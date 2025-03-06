<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter
import supabase from '@/supabase.js'; // Import Supabase

const name = ref('');
const email = ref('');
const message = ref('');
const successMessage = ref('');
const errorMessage = ref('');

const router = useRouter(); // Initialize router

const submitMessage = async () => {
  if (!name.value || !email.value || !message.value) {
    errorMessage.value = 'Please fill out all fields.';
    return;
  }

  const { error } = await supabase.from('messages').insert([
    {
      name: name.value,
      email: email.value,
      message: message.value,
    },
  ]);

  if (error) {
    errorMessage.value = 'Error submitting message. Try again.';
    console.error(error);
    return;
  }

  successMessage.value = 'Message sent successfully!';
  name.value = '';
  email.value = '';
  message.value = '';

  // ✅ Navigate to Index.vue
  router.push('/');
};

</script>

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
            <form @submit.prevent="submitMessage">

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" v-model="message" placeholder="Your Message" rows="5" required></textarea>
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
                <a href="https://www.instagram.com/iem_eyya?igsh=OGI1aWdiMXJxMmJk" target="_blank"><i class="fab fa-instagram"></i></a> <!-- Instagram link -->
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
            <a href="index.html">Home</a>
            <a href="reference.html">Reference</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </div>
        <div class="footer-copyright">
            <p>Copyright © 2025 Rhea-Anne Danao | Powered by Rhea-Anne</p>
        </div>
    </footer>


</template>

<style scoped>
/* General Styles */
body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background: #FAE8E0; /* Soft pink background */
    color: #333;
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 1.6;
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
}


/* Contact Section */
.contact-section {
    padding: 60px 5%;
    background: #fff; /* White background */
    border-radius: 15px; /* Rounded corners */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    max-width: 1200px; /* Limit width */
    margin: 50px auto; /* Centering */
    border-left: 8px solid #e17979; /* Stylish red left border */
}

.contact-section h2 {
    font-size: 28px;
    font-weight: bold;
    color: #e17979; /* Red color for heading */
    margin-bottom: 30px;
    text-align: left;
    padding-left: 15px;
    border-bottom: 2px solid #e17979; /* Underline effect */
    display: inline-block; /* Makes underline fit text */
}

/* Contact Container */
.contact-container {
    display: flex;
    flex-wrap: wrap; /* Wrap items for responsiveness */
    gap: 40px; /* Space between form and info */
    margin-bottom: 40px;
}

/* Contact Form */
.contact-form {
    flex: 1;
    max-width: 600px; /* Limit form width */
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
    border-color: #e17979; /* Red border on focus */
    outline: none;
}

.contact-form textarea {
    resize: none; /* Allow vertical resizing */
}

.contact-form button {
    background: #e17979; /* Red background */
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.contact-form button:hover {
    background: #c94c4c; /* Darker red on hover */
}

/* Contact Info */
.contact-info {
    flex: 1;
    max-width: 400px; /* Limit info width */
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
    gap: 10px; /* Space between icon and text */
}

.contact-info ul li i {
    color: #e17979; /* Red color for icons */
}

.contact-info ul li a {
    color: #4a90e2; /* Blue color for links */
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-info ul li a:hover {
    color: #e17979; /* Red color on hover */
}

/* Social Links */
.social-links {
    display: flex;
    gap: 15px; /* Space between icons */
    margin-top: 20px;
}

.social-links a {
    font-size: 24px;
    color: #4a90e2; /* Blue color for icons */
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: #e17979; /* Red color on hover */
}

/* Map Container */
.map-container {
    margin-top: 40px;
    border-radius: 10px;
    overflow: hidden; /* Ensure map corners are rounded */
}

/* Responsive Design */
@media (max-width: 768px) {
    .contact-container {
        flex-direction: column; /* Stack form and info vertically on small screens */
    }

    .contact-form,
    .contact-info {
        max-width: 100%; /* Full width on small screens */
    }
}

/* Footer Section */
.footer {
    background: rgba(255, 255, 255, 0.2);/* Semi-transparent background */
    backdrop-filter: blur(10px); /* Blur effect */
    padding: 40px;
    text-align: center;
    border-top: 2px solid rgba(255, 255, 255, 0.3); /* Top border */
    margin-top: 50px; /* Spacing above the footer */
}

.footer-nav {
    margin-bottom: 10px; /* Spacing between links and copyright */
}

.footer-nav a {
    margin: 0 15px; /* Spacing between links */
    color: rgb(197, 152, 152); /* Link color */
    text-decoration: none; /* Remove underline */
    font-size: 20px;
    margin-bottom: 100px;
    transition: color 0.3s;
}

.footer-nav a:hover {
    color: #F7CAC9; /* Hover color */
}

.footer-copyright p {
    color: rgba(29, 28, 28, 0.622); /* Text color */
    margin-top: 30px; /* Spacing above the text */
    font-size: 14px;
}

</style>
