<script setup>

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

  <div id="resources" class="resources-section">
    <h2>Resources</h2>
    <div class="resources-grid">
        <!-- Vue.js -->
        <div class="resource-card">
            <i class="fab fa-vuejs"></i> <!-- Vue.js icon -->
            <h3>Vue.js Official Documentation</h3>
            <p>The official guide for Vue.js, a progressive JavaScript framework for building user interfaces.</p>
            <a href="https://vuejs.org/" target="_blank">Visit Website</a>
        </div>

        <!-- CSS Guide (MDN) -->
        <div class="resource-card">
            <i class="fab fa-css3-alt"></i> <!-- CSS icon -->
            <h3>CSS Guide (MDN)</h3>
            <p>Comprehensive documentation and tutorials for CSS by Mozilla Developer Network.</p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">Visit Website</a>
        </div>

        <!-- JavaScript Guide (MDN) -->
        <div class="resource-card">
            <i class="fab fa-js-square"></i> <!-- JavaScript icon -->
            <h3>JavaScript Guide (MDN)</h3>
            <p>Learn JavaScript with detailed guides and examples from Mozilla Developer Network.</p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Visit Website</a>
        </div>

        <!-- W3Schools -->
        <div class="resource-card">
            <i class="fas fa-code"></i> <!-- Code icon -->
            <h3>W3Schools Tutorials</h3>
            <p>Beginner-friendly tutorials for web development, including HTML, CSS, JavaScript, and more.</p>
            <a href="https://www.w3schools.com/" target="_blank">Visit Website</a>
        </div>

        <!-- Vue Comment Section Tutorial -->
        <div class="resource-card">
            <i class="fas fa-comments"></i> <!-- Comment icon -->
            <h3>Vue Comment Section Tutorial</h3>
            <p>A step-by-step guide to building a simple comment section using Vue components.</p>
            <a href="https://dev.to/tsanak/simple-comment-section-with-vue-components-1cdm" target="_blank">Visit Website</a>
        </div>

        <!-- imgbb -->
        <div class="resource-card">
            <i class="fas fa-image"></i> <!-- Image icon -->
            <h3>imgbb</h3>
            <p>A free image hosting service for uploading and sharing images online.</p>
            <a href="https://imgbb.com/" target="_blank">Visit Website</a>
        </div>

        <!-- DeepSeek -->
        <div class="resource-card">
            <i class="fas fa-search"></i> <!-- Search icon -->
            <h3>DeepSeek</h3>
            <p>An advanced search tool for finding resources, tools, and information efficiently.</p>
            <a href="https://www.deepseek.com/" target="_blank">Visit Website</a>
        </div>

        <!-- ChatGPT -->
        <div class="resource-card">
            <i class="fas fa-robot"></i> <!-- Robot icon -->
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

/* Resources Section */
.resources-section {
    padding: 60px 5%;
    background: #f9f9f9; /* Light gray background */
    border-radius: 15px; /* Rounded corners */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    max-width: 1200px; /* Limit width */
    margin: 50px auto; /* Centering */
    border-left: 8px solid #4a90e2; /* Stylish blue left border */
}

.resources-section h2 {
    font-size: 28px;
    font-weight: bold;
    color: #4a90e2; /* Blue color for heading */
    margin-bottom: 30px;
    text-align: left;
    padding-left: 15px;
    border-bottom: 2px solid #4a90e2; /* Underline effect */
    display: inline-block; /* Makes underline fit text */
}

/* Resources Grid Layout */
.resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
    gap: 20px; /* Space between cards */
}

/* Resource Card Styling */
.resource-card {
    background: #fff; /* White background */
    padding: 20px;
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
}

.resource-card:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

.resource-card i {
    font-size: 40px; /* Icon size */
    color: #4a90e2; /* Blue color for icons */
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
    line-height: 1.6; /* Improved readability */
    margin-bottom: 15px;
}

.resource-card a {
    display: inline-block;
    font-size: 16px;
    color: #4a90e2; /* Blue color for links */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

.resource-card a:hover {
    color: #e17979; /* Red color on hover */
    text-decoration: underline; /* Add underline on hover */
}

/* Responsive Design */
@media (max-width: 768px) {
    .resources-section {
        padding: 40px 5%;
    }

    .resources-section h2 {
        font-size: 24px;
    }

    .resources-grid {
        grid-template-columns: 1fr; /* Stack cards vertically on small screens */
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
