<template>
  <nav class="navbar">
    <div class="logo">Rhea-Anne</div>
    <div class="nav-links">
      <router-link to="/index">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/reference">REFERENCE</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </div>
  </nav>

  <div id="contact" class="contact-section">
    <h2>Contact Me</h2>
    <div class="contact-container">
      <!-- Contact Form -->
      <div class="contact-form">
        <h3>Send Me a Message</h3>
        <!-- Note: Changed the submit handler to submitForm -->
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <!-- Bind to form.name -->
            <input type="text" id="name" v-model="form.name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <!-- Bind to form.email -->
            <input type="email" id="email" v-model="form.email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <!-- Bind to form.message -->
            <textarea id="message" v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="contact-info">
        <h3>Get in Touch</h3>
        <p>Feel free to reach out to me for collaborations, questions, or just to say hello!</p>
        <ul>
          <li><i class="fas fa-envelope"></i> <a href="mailto:your.email@example.com">radanao@student.apc.edu.ph</a></li>
          <li><i class="fas fa-phone"></i> <a href="tel:+1234567890">09758496422</a></li>
          <li><i class="fas fa-map-marker-alt"></i> San Lorenzo Village, Makati City</li>
        </ul>
        <div class="social-links">
          <a href="https://www.facebook.com/profile.php?id=61565180164018&mibextid=ZbWKwL" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/iem_eyya?igsh=OGI1aWdiMXJxMmJk" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="http://www.linkedin.com/in/rhea-anne-danao-a420bb289" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/rheaanne" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>

    <!-- Embedded Google Map -->
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.785714285714!2d121.027315315338!3d14.554558589819042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0ed01%3A0x6d5b1b2b5b5b5b5b!2sSan%20Lorenzo%20Village%2C%20Makati%20City%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
        width="100%"
        height="400"
        style="border:0;"
        allowfullscreen=""
        loading="lazy">
      </iframe>
    </div>
  </div>
 
  <!-- Footer Section -->
  <footer class="footer">
    <div class="footer-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/reference">Reference</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="footer-copyright">
      <p>Copyright © 2025 Rhea-Anne Danao | Powered by Rhea-Anne</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { createClient } from '@supabase/supabase-js';

// Reactive form state
const form = ref({
  name: "",
  email: "",
  message: ""
});

// Initialize Supabase client
const supabaseUrl = 'https://eeomhghphspzjcitknfn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlb21oZ2hwaHNwempjaXRrbmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMjUxMTUsImV4cCI6MjA1NjgwMTExNX0.XvlKe8x1tQTK7ZEMxpmkRDPii0T_zRdpftGz2lGid6w';
const supabaseClient = createClient(supabaseUrl, supabaseKey);
console.log("Supabase client initialized:", supabaseClient);

// Function to initialize smooth scrolling for in-page anchor links
function initSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

// Run smooth scrolling initialization on component mount
onMounted(() => {
  initSmoothScroll();
});

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Form submission handler with debugging logs
async function submitForm() {
  console.log("submitForm triggered", form.value);
  const { name, email, message } = form.value;
  
  // Validate inputs
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  
  try {
    const { data, error } = await supabaseClient
      .from("contacts")
      .insert([{ name, email, message }]);
      
    if (error) {
      console.error("Supabase error:", error);
      alert("Error sending message: " + error.message);
      return;
    }
    alert("Thank you for your message! I will get back to you soon.");
    // Reset the form
    form.value = { name: "", email: "", message: "" };
  } catch (err) {
    console.error("Unexpected error:", err);
    alert("An unexpected error occurred.");
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background: #FAE8E0;
  color: #333;
  min-height: 100vh;
  overflow-x: hidden;
  line-height: 1.6;
}

/* Keyframe Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  animation: fadeInDown 1s ease-out;
}

.logo {
  color: #151314a0;
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
  font-weight: bold;
}

.nav-links a {
  margin: 0 15px;
  color: #151314a0;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #F7CAC9;
  animation: pulse 0.6s;
}

/* Contact Section */
.contact-section {
  padding: 60px 5%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 50px auto;
  border-left: 8px solid #e17979;
  animation: fadeInUp 1s ease-out;
}

.contact-section h2 {
  font-size: 28px;
  font-weight: bold;
  color: #e17979;
  margin-bottom: 30px;
  text-align: left;
  padding-left: 15px;
  border-bottom: 2px solid #e17979;
  display: inline-block;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
}

/* Contact Form */
.contact-form {
  flex: 1;
  max-width: 600px;
}

.contact-form h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form label {
  font-size: 16px;
  color: #555;
  display: block;
  margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #e17979;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form button {
  background: #e17979;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-form button:hover {
  background: #c94c4c;
}

/* Contact Info */
.contact-info {
  flex: 1;
  max-width: 400px;
}

.contact-info h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.contact-info ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.contact-info ul li {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-info ul li i {
  color: #e17979;
}

.contact-info ul li a {
  color: #4a90e2;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info ul li a:hover {
  color: #e17979;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-links a {
  font-size: 24px;
  color: #4a90e2;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #e17979;
}

/* Map Container */
.map-container {
  margin-top: 40px;
  border-radius: 10px;
  overflow: hidden;
  animation: fadeInUp 1s ease-out 0.5s;
  animation-fill-mode: both;
}

/* Footer Section */
.footer {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 40px;
  text-align: center;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  margin-top: 50px;
}

.footer-nav {
  margin-bottom: 10px;
}

.footer-nav a {
  margin: 0 15px;
  color: rgb(197, 152, 152);
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: #F7CAC9;
}

.footer-copyright p {
  color: rgba(29, 28, 28, 0.622);
  margin-top: 30px;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .main-container {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  .container h1 {
    font-size: 36px;
  }
  .profile {
    width: 300px;
    height: 300px;
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    text-align: center;
  }
  .nav-links {
    margin-top: 10px;
  }
  .profile {
    width: 250px;
    height: 250px;
  }
  .container h1 {
    font-size: 32px;
  }
  .flex-gallery img {
    width: 200px;
    height: 200px;
  }
  .social-links {
    gap: 20px;
  }
  .social-link img {
    width: 50px;
    height: 50px;
  }
  .social-link span {
    font-size: 16px;
  }
}
</style>

