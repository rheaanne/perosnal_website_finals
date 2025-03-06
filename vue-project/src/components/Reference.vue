<template>
  <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="logo">Rhea-Anne</div>
    <div class="nav-links">
      <router-link to="/index">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/reference">REFERENCE</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </div>
  </nav>

  <!-- Resources Section -->
  <div id="resources" class="resources-section">
    <h2>Resources</h2>
    <div class="resources-grid">
        <!-- Vue.js -->
        <div class="resource-card">
            <i class="fab fa-vuejs"></i>
            <h3>Vue.js Official Documentation</h3>
            <p>The official guide for Vue.js, a progressive JavaScript framework for building user interfaces.</p>
            <a href="https://vuejs.org/" target="_blank">Visit Website</a>
        </div>

        <!-- CSS Guide (MDN) -->
        <div class="resource-card">
            <i class="fab fa-css3-alt"></i>
            <h3>CSS Guide (MDN)</h3>
            <p>Comprehensive documentation and tutorials for CSS by Mozilla Developer Network.</p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">Visit Website</a>
        </div>

        <!-- JavaScript Guide (MDN) -->
        <div class="resource-card">
            <i class="fab fa-js-square"></i>
            <h3>JavaScript Guide (MDN)</h3>
            <p>Learn JavaScript with detailed guides and examples from Mozilla Developer Network.</p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Visit Website</a>
        </div>

        <!-- W3Schools -->
        <div class="resource-card">
            <i class="fas fa-code"></i>
            <h3>W3Schools Tutorials</h3>
            <p>Beginner-friendly tutorials for web development, including HTML, CSS, JavaScript, and more.</p>
            <a href="https://www.w3schools.com/" target="_blank">Visit Website</a>
        </div>

        <!-- Vue Comment Section Tutorial -->
        <div class="resource-card">
            <i class="fas fa-comments"></i>
            <h3>Vue Comment Section Tutorial</h3>
            <p>A step-by-step guide to building a simple comment section using Vue components.</p>
            <a href="https://dev.to/tsanak/simple-comment-section-with-vue-components-1cdm" target="_blank">Visit Website</a>
        </div>

        <!-- imgbb -->
        <div class="resource-card">
            <i class="fas fa-image"></i>
            <h3>imgbb</h3>
            <p>A free image hosting service for uploading and sharing images online.</p>
            <a href="https://imgbb.com/" target="_blank">Visit Website</a>
        </div>

        <!-- DeepSeek -->
        <div class="resource-card">
            <i class="fas fa-search"></i>
            <h3>DeepSeek</h3>
            <p>An advanced search tool for finding resources, tools, and information efficiently.</p>
            <a href="https://www.deepseek.com/" target="_blank">Visit Website</a>
        </div>

        <!-- ChatGPT -->
        <div class="resource-card">
            <i class="fas fa-robot"></i>
            <h3>ChatGPT</h3>
            <p>An AI-powered chatbot by OpenAI for answering questions, generating content, and more.</p>
            <a href="https://openai.com/chatgpt" target="_blank">Visit Website</a>
        </div>
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

<script setup>
  // No additional script logic is needed for the animations.
</script>

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

/* Resources Section */
.resources-section {
  padding: 60px 5%;
  background: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 50px auto;
  border-left: 8px solid #4a90e2;
  animation: fadeInUp 1s ease-out;
}

.resources-section h2 {
  font-size: 28px;
  font-weight: bold;
  color: #4a90e2;
  margin-bottom: 30px;
  text-align: left;
  padding-left: 15px;
  border-bottom: 2px solid #4a90e2;
  display: inline-block;
}

/* Resources Grid Layout */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Resource Card Styling */
.resource-card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 1s ease-out;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  animation: pulse 0.6s;
}

.resource-card i {
  font-size: 40px;
  color: #4a90e2;
  margin-bottom: 15px;
}

.resource-card h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.resource-card p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.resource-card a {
  display: inline-block;
  font-size: 16px;
  color: #4a90e2;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.resource-card a:hover {
  color: #e17979;
  text-decoration: underline;
}

/* Footer Section */
.footer {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 40px;
  text-align: center;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  margin-top: 50px;
  animation: fadeInUp 1s ease-out;
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
