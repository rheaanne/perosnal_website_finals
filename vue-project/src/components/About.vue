<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import r1 from '@/assets/images/r1.jpg';
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

  <!-- About Me Section -->
  <div id="about" class="section1">
    <h2>About Me</h2>
    <div class="flex-container">
      <div class="text-container">
        <h1>Hello, I'm <strong>Rhea-Anne Danao</strong>, but you can call me "Eyya."</h1>
        <h3>I was born and raised in the province of <strong>Isabela</strong>, where I spent most of my childhood surrounded by nature, simplicity, and strong community values.</h3>
        <p>My journey took an unexpected turn when an anonymous person gave me the opportunity to continue my studies in <strong>Makati</strong>. Moving from a small town to the bustling city was a significant challenge, but it also opened doors to new experiences, opportunities, and personal growth.</p>
        <p>I have always been passionate about <strong>technology and problem-solving</strong>. My curiosity about computers led me to pursue a <strong>Bachelor of Science in Information Technology</strong>, where I gained hands-on experience in programming, software development, and system analysis. I enjoy learning new things, whether it's coding in <strong>Java</strong>, designing user-friendly interfaces, or researching the latest tech trends.</p>
      </div>
      <div class="image-container">
        <img :src="r1" alt="Rhea-Anne Danao" />
      </div>
    </div>
  </div>

  <!-- Education & Achievements Section -->
  <div id="education" class="section2">
    <h2>Education & Achievements</h2>
    <div class="education-grid">
      <div class="education-item">
        <i class="fas fa-school"></i>
        <div class="education-details">
          <h3>Elementary</h3>
          <p>Binguang Elementary School</p>
          <p>2016 - 2017</p>
        </div>
      </div>
      <div class="education-item">
        <i class="fas fa-graduation-cap"></i>
        <div class="education-details">
          <h3>Secondary</h3>
          <p>San Pablo National High School</p>
          <p>2020 - 2021 | Graduated with Honors</p>
        </div>
      </div>
      <div class="education-item">
        <i class="fas fa-graduation-cap"></i>
        <div class="education-details">
          <h3>Senior High</h3>
          <p>San Pablo National High School</p>
          <p>2022 - 2023 | Graduated with Honors</p>
        </div>
      </div>
      <div class="education-item">
        <i class="fas fa-university"></i>
        <div class="education-details">
          <h3>Tertiary</h3>
          <p>Asia Pacific College</p>
          <p>2022 - 2023</p>
          <ul>
            <li>Executive Director of APC-MSC Membership Committee</li>
            <li>With Honors (2023 - 2024)</li>
          </ul>
        </div>
      </div>
      <div class="education-item">
        <i class="fas fa-laptop-code"></i>
        <div class="education-details">
          <h3>Course</h3>
          <p>Bachelor of Science in Information Technology</p>
        </div>
      </div>
    </div>
  </div>

  <!-- IT Experience Section -->
  <div id="experience" class="section3">
    <h2>IT Experience</h2>
    <div class="flex-container">
      <ul class="tech-icons">
        <li><i class="fab fa-java"></i> Java</li>
        <li><i class="fab fa-python"></i> Python</li>
        <li><i class="fab fa-js"></i> JavaScript</li>
        <li><i class="fab fa-html5"></i> HTML</li>
      </ul>
      <p>In my first year, I gained experience coding with <strong>Java</strong> and <strong>Python</strong>. I learned basic tools for using a computer, though my knowledge was limited in high school.</p>
    </div>
  </div>

  <!-- Hobbies & Interests Section -->
  <div id="hobbies" class="section4">
    <h2>Hobbies & Interests</h2>
    <div class="flex-container">
      <div class="hobby-icons">
        <div class="hobby-item">
          <i class="fas fa-book"></i>
          <p>Reading Books</p>
        </div>
        <div class="hobby-item">
          <i class="fas fa-laptop-code"></i>
          <p>Exploring Technology</p>
        </div>
        <div class="hobby-item">
          <i class="fas fa-futbol"></i>
          <p>Engaging in Sports</p>
        </div>
        <div class="hobby-item">
          <i class="fas fa-lightbulb"></i>
          <p>Creative Activities</p>
        </div>
      </div>
      <p class="hobby-description">I love <strong>reading books</strong>, exploring <strong>technology</strong>, engaging in <strong>sports</strong>, and finding all sorts of exciting and creative things to do.</p>
    </div>
  </div>

  <!-- Goals in Life Section -->
  <div id="goals" class="section5">
    <h2>Goals in Life</h2>
    <div class="flex-container">
      <div class="goal-icons">
        <div class="goal-item">
          <i class="fas fa-laptop-code"></i>
          <p>Pursue a Career in IT</p>
        </div>
        <div class="goal-item">
          <i class="fas fa-building"></i>
          <p>Establish a Tech Company</p>
        </div>
        <div class="goal-item">
          <i class="fas fa-globe"></i>
          <p>Make a Global Impact</p>
        </div>
      </div>
      <p class="goal-description">My dream is to pursue a career in <strong>IT</strong> and eventually establish my own <strong>tech company</strong>, creating solutions that can make a meaningful impact in the world.</p>
    </div>
  </div>

  <!-- Footer Section -->
  <footer class="footer">
    <div class="footer-nav">
      <router-link to="/index">Home</router-link>
      <router-link to="/reference">Reference</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
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
  background: #FAE8E0;
  color: #333;
  min-height: 100vh;
  overflow-x: hidden;
  line-height: 1.6;
}

/* CSS Animations */
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
    transform: scale(1.1);
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
}

/* About Me Section */
.section1 {
  padding: 60px 5%;
  max-width: 1200px;
  margin: 50px auto;
  animation: fadeInUp 1s ease-out;
}

.section1 h2 {
  font-size: 28px;
  font-weight: bold;
  color: #e17979;
  margin-bottom: 30px;
  text-align: left;
  padding-left: 15px;
  border-bottom: 2px solid #e17979;
  display: inline-block;
}

/* Flex Container for Text and Image */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
}

.text-container {
  flex: 1;
  max-width: 700px;
}

.text-container h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.3;
}

.text-container h1 strong {
  color: #e17979;
}

.text-container h3 {
  font-size: 20px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
}

.text-container h3 strong {
  color: #4a90e2;
}

.text-container p {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.text-container p strong {
  color: #4a90e2;
}

.image-container {
  flex: 1;
  max-width: 400px;
  text-align: center;
}

.image-container img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-container img:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Education & Achievements Section */
.section2 {
  padding: 60px 5%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 50px auto;
  border-left: 8px solid #e17979;
  animation: fadeInUp 1s ease-out;
}

.section2 h2 {
  font-size: 28px;
  font-weight: bold;
  color: #e17979;
  margin-bottom: 30px;
  text-align: left;
  padding-left: 15px;
  border-bottom: 2px solid #e17979;
  display: inline-block;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.education-item {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  gap: 15px;
}

.education-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.education-item i {
  font-size: 32px;
  color: #e17979;
}

.education-details h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.education-details p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 5px;
}

.education-details ul {
  list-style-type: none;
  padding: 0;
  margin: 10px 0 0 0;
}

.education-details ul li {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  padding-left: 20px;
  position: relative;
}

.education-details ul li::before {
  content: "✔";
  color: #e17979;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}

/* IT Experience Section */
.section3 {
  padding: 60px 5%;
  background: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 50px auto;
  border-left: 8px solid #4a90e2;
  animation: fadeInUp 1s ease-out;
}

.section3 h2 {
  font-size: 28px;
  font-weight: bold;
  color: #4a90e2;
  margin-bottom: 30px;
  text-align: left;
  padding-left: 15px;
  border-bottom: 2px solid #4a90e2;
  display: inline-block;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
}

.tech-icons {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.tech-icons li {
  font-size: 18px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-icons li:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.tech-icons li i {
  font-size: 24px;
  color: #4a90e2;
}

.section3 p {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  flex: 1;
  margin: 0;
}

/* Hobbies & Interests Section */
.section4 {
  padding: 60px 5%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 50px auto;
  border-left: 8px solid #e17979;
  animation: fadeInUp 1s ease-out;
}

.section4 h2 {
  font-size: 28px;
  font-weight: bold;
  color: #e17979;
  margin-bottom: 30px;
  text-align: left;
  padding-left: 15px;
  border-bottom: 2px solid #e17979;
  display: inline-block;
}

.hobby-icons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  flex: 1;
}

.hobby-item {
  text-align: center;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hobby-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.hobby-item i {
  font-size: 32px;
  color: #e17979;
  margin-bottom: 10px;
}

.hobby-item p {
  font-size: 16px;
  color: #333;
  margin: 0;
}

.hobby-description {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  flex: 1;
  margin: 0;
}

/* Goals in Life Section */
.section5 {
  padding: 60px 5%;
  background: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 50px auto;
  border-left: 8px solid #4a90e2;
  animation: fadeInUp 1s ease-out;
}

.section5 h2 {
  font-size: 28px;
  font-weight: bold;
  color: #4a90e2;
  margin-bottom: 30px;
  text-align: left;
  padding-left: 15px;
  border-bottom: 2px solid #4a90e2;
  display: inline-block;
}

.goal-icons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  flex: 1;
}

.goal-item {
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.goal-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.goal-item i {
  font-size: 32px;
  color: #4a90e2;
  margin-bottom: 10px;
}

.goal-item p {
  font-size: 16px;
  color: #333;
  margin: 0;
}

.goal-description {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  flex: 1;
  margin: 0;
}

/* Tech Icons (Additional) */
.tech-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
}

.tech-icons li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
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
  transition: color 0.3s, transform 0.3s;
}

.footer-nav a:hover {
  color: #F7CAC9;
  animation: pulse 0.6s;
}

.footer-copyright p {
  color: rgba(29, 28, 28, 0.622);
  margin-top: 30px;
  font-size: 14px;
}

/* Additional Hover Animation for Interactive Elements */
.contact-form button:hover {
  background: #c94c4c;
  animation: pulse 0.6s;
}

.social-links a {
  font-size: 24px;
  color: #4a90e2;
  transition: color 0.3s, transform 0.3s;
}

.social-links a:hover {
  color: #e17979;
  animation: pulse 0.6s;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section1 {
    padding: 40px 5%;
  }
  .section1 h2 {
    font-size: 24px;
  }
  .flex-container {
    flex-direction: column;
    gap: 20px;
  }
  .text-container h1 {
    font-size: 28px;
  }
  .text-container h3 {
    font-size: 18px;
  }
  .text-container p {
    font-size: 16px;
  }
  .image-container {
    max-width: 100%;
  }
  .section2 {
    padding: 40px 5%;
  }
  .section2 h2 {
    font-size: 24px;
  }
  .education-grid {
    grid-template-columns: 1fr;
  }
  .section3 {
    padding: 40px 5%;
  }
  .section3 h2 {
    font-size: 24px;
  }
  .flex-container {
    flex-direction: column;
    gap: 20px;
  }
  .tech-icons {
    justify-content: center;
  }
  .section3 p {
    font-size: 16px;
    text-align: center;
  }
  .section4 {
    padding: 40px 5%;
  }
  .section4 h2 {
    font-size: 24px;
  }
  .flex-container {
    flex-direction: column;
    gap: 20px;
  }
  .hobby-icons {
    grid-template-columns: repeat(2, 1fr);
  }
  .hobby-description {
    text-align: center;
  }
  .section5 {
    padding: 40px 5%;
  }
  .section5 h2 {
    font-size: 24px;
  }
  .flex-container {
    flex-direction: column;
    gap: 20px;
  }
  .goal-icons {
    grid-template-columns: repeat(2, 1fr);
  }
  .goal-description {
    text-align: center;
  }
}
</style>
