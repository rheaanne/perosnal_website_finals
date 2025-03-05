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
            <img :src="r1" alt="Rhea-Anne Danao">
        </div>
    </div>
</div>

 <!-- Education & Achievements Section -->
<div id="education" class="section2">
    <h2>Education & Achievements</h2>
    <div class="education-grid">
        <div class="education-item">
            <i class="fas fa-school"></i> <!-- School icon -->
            <div class="education-details">
                <h3>Elementary</h3>
                <p>Binguang Elementary School</p>
                <p>2016 - 2017</p>
            </div>
        </div>
        <div class="education-item">
            <i class="fas fa-graduation-cap"></i> <!-- Graduation icon -->
            <div class="education-details">
                <h3>Secondary</h3>
                <p>San Pablo National High School</p>
                <p>2020 - 2021 | Graduated with Honors</p>
            </div>
        </div>
        <div class="education-item">
            <i class="fas fa-graduation-cap"></i> <!-- Graduation icon -->
            <div class="education-details">
                <h3>Senior High</h3>
                <p>San Pablo National High School</p>
                <p>2022 - 2023 | Graduated with Honors</p>
            </div>
        </div>
        <div class="education-item">
            <i class="fas fa-university"></i> <!-- University icon -->
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
            <i class="fas fa-laptop-code"></i> <!-- IT icon -->
            <div class="education-details">
                <h3>Course</h3>
                <p>Bachelor of Science in Information Technology</p>
            </div>
        </div>
    </div>
</div>


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


<div id="hobbies" class="section4">
    <h2>Hobbies & Interests</h2>
    <div class="flex-container">
        <div class="hobby-icons">
            <div class="hobby-item">
                <i class="fas fa-book"></i> <!-- Book icon -->
                <p>Reading Books</p>
            </div>
            <div class="hobby-item">
                <i class="fas fa-laptop-code"></i> <!-- Technology icon -->
                <p>Exploring Technology</p>
            </div>
            <div class="hobby-item">
                <i class="fas fa-futbol"></i> <!-- Sports icon -->
                <p>Engaging in Sports</p>
            </div>
            <div class="hobby-item">
                <i class="fas fa-lightbulb"></i> <!-- Creative icon -->
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
                <i class="fas fa-laptop-code"></i> <!-- IT Career icon -->
                <p>Pursue a Career in IT</p>
            </div>
            <div class="goal-item">
                <i class="fas fa-building"></i> <!-- Tech Company icon -->
                <p>Establish a Tech Company</p>
            </div>
            <div class="goal-item">
                <i class="fas fa-globe"></i> <!-- Global Impact icon -->
                <p>Make a Global Impact</p>
            </div>
        </div>
        <p class="goal-description">My dream is to pursue a career in <strong>IT</strong> and eventually establish my own <strong>tech company</strong>, creating solutions that can make a meaningful impact in the world.</p>
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

/* Main Content */
.container {
    padding: 50px 10%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Main Content */
.container {
    padding: 50px 10%;
    max-width: 1200px;
    margin: 0 auto;
}

/* About Me Section */
.section1 {
    padding: 60px 5%;
    max-width: 1200px; /* Limit width */
    margin: 50px auto; /* Centering */
}

.section1 h2 {
    font-size: 28px;
    font-weight: bold;
    color: #e17979; /* Red color for heading */
    margin-bottom: 30px;
    text-align: left;
    padding-left: 15px;
    border-bottom: 2px solid #e17979; /* Underline effect */
    display: inline-block; /* Makes underline fit text */
}

/* Flex Container for Text and Image */
.flex-container {
    display: flex;
    flex-wrap: wrap; /* Wrap items for responsiveness */
    gap: 40px; /* Space between text and image */
    align-items: center; /* Center items vertically */
}

/* Text Container */
.text-container {
    flex: 1; /* Take available space */
    max-width: 700px; /* Limit text width for readability */
}

.text-container h1 {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
    line-height: 1.3; /* Improved readability */
}

.text-container h1 strong {
    color: #e17979; /* Red color for name */
}

.text-container h3 {
    font-size: 20px;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6; /* Improved readability */
}

.text-container h3 strong {
    color: #4a90e2; /* Blue color for highlights */
}

.text-container p {
    font-size: 18px;
    color: #555;
    line-height: 1.6; /* Improved readability */
    margin-bottom: 20px;
}

.text-container p strong {
    color: #4a90e2; /* Blue color for highlights */
}

/* Image Container */
.image-container {
    flex: 1; /* Take available space */
    max-width: 400px; /* Limit image width */
    text-align: center; /* Center the image */
}

.image-container img {
    width: 100%;
    border-radius: 15px; /* Rounded corners for image */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
}

.image-container img:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
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
        flex-direction: column; /* Stack items vertically on small screens */
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
        max-width: 100%; /* Full width for image on small screens */
    }
}
/* Education & Achievements Section */
.section2 {
    padding: 60px 5%;
    background: #fff; /* White background */
    border-radius: 15px; /* Rounded corners */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    max-width: 1200px; /* Limit width */
    margin: 50px auto; /* Centering */
    border-left: 8px solid #e17979; /* Stylish left border */
}

.section2 h2 {
    font-size: 28px;
    font-weight: bold;
    color: #e17979; /* Red color for heading */
    margin-bottom: 30px;
    text-align: left;
    padding-left: 15px;
    border-bottom: 2px solid #e17979; /* Underline effect */
    display: inline-block; /* Makes underline fit text */
}

/* Education Grid Layout */
.education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
    gap: 20px; /* Space between items */
}

/* Education Item Styling */
.education-item {
    background: #f9f9f9; /* Light gray background */
    padding: 20px;
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
    display: flex;
    align-items: center;
    gap: 15px; /* Space between icon and text */
}

.education-item:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

.education-item i {
    font-size: 32px; /* Icon size */
    color: #e17979; /* Red color for icons */
}

.education-details h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
}

.education-details p {
    font-size: 16px;
    color: #555;
    line-height: 1.6; /* Improved readability */
    margin-bottom: 5px;
}

.education-details ul {
    list-style-type: none; /* Remove default bullets */
    padding: 0;
    margin: 10px 0 0 0;
}

.education-details ul li {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
    padding-left: 20px; /* Space for custom bullet */
    position: relative; /* For custom bullet positioning */
}

.education-details ul li::before {
    content: "✔";
    color: #e17979; /* Red color for custom bullet */
    font-weight: bold;
    position: absolute; /* Position the bullet */
    left: 0; /* Align bullet to the left */
    top: 0; /* Align bullet to the top */
}

/* Responsive Design */
@media (max-width: 768px) {
    .section2 {
        padding: 40px 5%;
    }

    .section2 h2 {
        font-size: 24px;
    }

    .education-grid {
        grid-template-columns: 1fr; /* Stack items vertically on small screens */
    }
}

/* IT Experience Section */
.section3 {
    padding: 60px 5%;
    background: #f9f9f9; /* Light gray background */
    border-radius: 15px; /* Rounded corners */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    max-width: 1200px; /* Limit width */
    margin: 50px auto; /* Centering */
    border-left: 8px solid #4a90e2; /* Stylish blue left border */
}

.section3 h2 {
    font-size: 28px;
    font-weight: bold;
    color: #4a90e2; /* Blue color for heading */
    margin-bottom: 30px;
    text-align: left;
    padding-left: 15px;
    border-bottom: 2px solid #4a90e2; /* Underline effect */
    display: inline-block; /* Makes underline fit text */
}

/* Flex Container for Icons and Text */
.flex-container {
    display: flex;
    flex-wrap: wrap; /* Wrap items for responsiveness */
    gap: 30px; /* Space between icons and text */
    align-items: center; /* Center items vertically */
}

/* Tech Icons List */
.tech-icons {
    list-style-type: none; /* Remove default bullets */
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap; /* Wrap icons for responsiveness */
    gap: 20px; /* Space between icons */
}

.tech-icons li {
    font-size: 18px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 10px; /* Space between icon and text */
    background: #fff; /* White background for icons */
    padding: 10px 20px;
    border-radius: 8px; /* Rounded corners for icons */
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
}

.tech-icons li:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

/* Icon Styling */
.tech-icons li i {
    font-size: 24px; /* Icon size */
    color: #4a90e2; /* Blue color for icons */
}

/* Paragraph Styling */
.section3 p {
    font-size: 18px;
    color: #555;
    line-height: 1.6; /* Improved readability */
    flex: 1; /* Allow text to take remaining space */
    margin: 0; /* Remove default margin */
}

/* Responsive Design */
@media (max-width: 768px) {
    .section3 {
        padding: 40px 5%;
    }

    .section3 h2 {
        font-size: 24px;
    }

    .flex-container {
        flex-direction: column; /* Stack items vertically on small screens */
        gap: 20px;
    }

    .tech-icons {
        justify-content: center; /* Center icons on small screens */
    }

    .section3 p {
        font-size: 16px;
        text-align: center; /* Center text on small screens */
    }
}

/* Hobbies & Interests Section */
.section4 {
    padding: 60px 5%;
    background: #fff; /* White background */
    border-radius: 15px; /* Rounded corners */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    max-width: 1200px; /* Limit width */
    margin: 50px auto; /* Centering */
    border-left: 8px solid #e17979; /* Stylish left border */
}

.section4 h2 {
    font-size: 28px;
    font-weight: bold;
    color: #e17979; /* Red color for heading */
    margin-bottom: 30px;
    text-align: left;
    padding-left: 15px;
    border-bottom: 2px solid #e17979; /* Underline effect */
    display: inline-block; /* Makes underline fit text */
}

/* Flex Container for Hobbies */
.flex-container {
    display: flex;
    flex-wrap: wrap; /* Wrap items for responsiveness */
    gap: 30px; /* Space between icons and text */
    align-items: center; /* Center items vertically */
}

/* Hobby Icons Grid */
.hobby-icons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive grid */
    gap: 20px; /* Space between icons */
    flex: 1; /* Take available space */
}

/* Hobby Item Styling */
.hobby-item {
    text-align: center;
    background: #f9f9f9; /* Light gray background */
    padding: 20px;
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
}

.hobby-item:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

.hobby-item i {
    font-size: 32px; /* Icon size */
    color: #e17979; /* Red color for icons */
    margin-bottom: 10px;
}

.hobby-item p {
    font-size: 16px;
    color: #333;
    margin: 0;
}

/* Hobby Description */
.hobby-description {
    font-size: 18px;
    color: #555;
    line-height: 1.6; /* Improved readability */
    flex: 1; /* Take available space */
    margin: 0; /* Remove default margin */
}

/* Responsive Design */
@media (max-width: 768px) {
    .section4 {
        padding: 40px 5%;
    }

    .section4 h2 {
        font-size: 24px;
    }

    .flex-container {
        flex-direction: column; /* Stack items vertically on small screens */
        gap: 20px;
    }

    .hobby-icons {
        grid-template-columns: repeat(2, 1fr); /* Two columns on small screens */
    }

    .hobby-description {
        text-align: center; /* Center text on small screens */
    }
}

/* Goals in Life Section */
.section5 {
    padding: 60px 5%;
    background: #f9f9f9; /* Light gray background */
    border-radius: 15px; /* Rounded corners */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    max-width: 1200px; /* Limit width */
    margin: 50px auto; /* Centering */
    border-left: 8px solid #4a90e2; /* Stylish blue left border */
}

.section5 h2 {
    font-size: 28px;
    font-weight: bold;
    color: #4a90e2; /* Blue color for heading */
    margin-bottom: 30px;
    text-align: left;
    padding-left: 15px;
    border-bottom: 2px solid #4a90e2; /* Underline effect */
    display: inline-block; /* Makes underline fit text */
}

/* Flex Container for Goals */
.flex-container {
    display: flex;
    flex-wrap: wrap; /* Wrap items for responsiveness */
    gap: 30px; /* Space between icons and text */
    align-items: center; /* Center items vertically */
}

/* Goal Icons Grid */
.goal-icons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive grid */
    gap: 20px; /* Space between icons */
    flex: 1; /* Take available space */
}

/* Goal Item Styling */
.goal-item {
    text-align: center;
    background: #fff; /* White background */
    padding: 20px;
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
}

.goal-item:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

.goal-item i {
    font-size: 32px; /* Icon size */
    color: #4a90e2; /* Blue color for icons */
    margin-bottom: 10px;
}

.goal-item p {
    font-size: 16px;
    color: #333;
    margin: 0;
}

/* Goal Description */
.goal-description {
    font-size: 18px;
    color: #555;
    line-height: 1.6; /* Improved readability */
    flex: 1; /* Take available space */
    margin: 0; /* Remove default margin */
}

/* Responsive Design */
@media (max-width: 768px) {
    .section5 {
        padding: 40px 5%;
    }

    .section5 h2 {
        font-size: 24px;
    }

    .flex-container {
        flex-direction: column; /* Stack items vertically on small screens */
        gap: 20px;
    }

    .goal-icons {
        grid-template-columns: repeat(2, 1fr); /* Two columns on small screens */
    }

    .goal-description {
        text-align: center; /* Center text on small screens */
    }
}
/* Tech Icons */
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
