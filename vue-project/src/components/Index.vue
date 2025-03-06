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

  <!-- Main Container -->
  <div class="main-container">
    <div class="container">
      <h1>Hi, I'm Rhea-Anne Danao, a BSIT student at Asia Pacific College.</h1>
      <div class="purpose-box">
        <p>
          Driven by a passion for technology and innovation, I aim to create solutions that make a positive impact on the world. Let's build a better future together!
        </p>
      </div>
    </div>
    <div class="profile">
      <img :src="pic1" alt="Profile Picture" />
    </div>
  </div>

  <!-- Picture Gallery Section -->
  <div class="gallery-container">
    <h2>PICTURE GALLERY</h2>
    <div class="flex-gallery">
      <img
        v-for="(img, index) in slides"
        :key="index"
        :src="img"
        :alt="`Image ${index + 1}`"
        @click="showImage(index)"
      />
    </div>
  </div>

  <!-- Modal for viewing an image -->
  <div v-if="modalVisible" class="modal">
    <div class="modal-content">
      <button class="modal-close" @click="closeModal">✕</button>
      <button class="modal-nav modal-prev" @click="prevImage">‹</button>
      <img :src="modalImg" alt="Modal Image" />
      <button class="modal-nav modal-next" @click="nextImage">›</button>
    </div>
  </div>

  <!-- About Me Section -->
  <div class="about-me">
    <div class="about-image">
      <img :src="eyya" alt="About Me Image" />
    </div>
    <div class="about-content">
      <h1>About Me</h1>
      <h2>I am a bubbly person, outgoing, and always up for a good time.</h2>
      <p>
        I am a proud province girl from Isabela, deeply connected to my roots and inspired by the simplicity and warmth of rural life. Growing up in a province has shaped me into a hardworking, resourceful, and determined individual who values family, culture, and community. My upbringing has taught me the importance of perseverance and embracing challenges with a positive mindset.
      </p>
      <button class="read-more-btn">READ MORE</button>
    </div>
  </div>

  <!-- Social Media Section -->
  <div class="social-media">
    <h2>Social Media</h2>
    <div class="social-links">
      <a
        href="https://www.instagram.com/iem_eyya?igsh=OGI1aWdiMXJxMmJk"
        target="_blank"
        class="social-link"
      >
        <img :src="ins" alt="Instagram" />
        <span>Instagram</span>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61565180164018&mibextid=ZbWKwL"
        target="_blank"
        class="social-link"
      >
        <img :src="face" alt="Facebook" />
        <span>Facebook</span>
      </a>
      <a
        href="http://www.linkedin.com/in/rhea-anne-danao-a420bb289"
        target="_blank"
        class="social-link"
      >
        <img :src="link" alt="LinkedIn" />
        <span>LinkedIn</span>
      </a>
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

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Import images from assets
import face from '@/assets/images/face.png';
import link from '@/assets/images/link.png';
import ins from '@/assets/images/ins.png';
import pic1 from '@/assets/images/pic1.jpg';
import eyya from '@/assets/images/eyya.jpg';
import rr1 from '@/assets/images/rr1.png';
import r2 from '@/assets/images/r2.jpg';
import rr2 from '@/assets/images/rr2.png';
import r3 from '@/assets/images/r3.png';
import rr3 from '@/assets/images/rr3.jpg';
import r4 from '@/assets/images/r4.png';
import r5 from '@/assets/images/r5.png';
import r6 from '@/assets/images/r6.png';

// Reactive state for gallery
const slides = ref([rr3, rr1, rr2, r2, r3, r4, r5, r6]);
const modalVisible = ref(false);
const modalImg = ref('');
const currentIndex = ref(0);

// Modal functions
const showImage = (index) => {
  modalImg.value = slides.value[index];
  currentIndex.value = index;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  modalImg.value = slides.value[currentIndex.value];
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  modalImg.value = slides.value[currentIndex.value];
};

const handleKeydown = (event) => {
  if (!modalVisible.value) return;
  if (event.key === 'ArrowLeft') prevImage();
  if (event.key === 'ArrowRight') nextImage();
  if (event.key === 'Escape') closeModal();
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
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

/* Main Container */
.main-container {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.container {
  max-width: 600px;
  padding: 20px;
}
.container h1 {
  font-size: 48px;
  color: #494040;
  margin-bottom: 20px;
}
.purpose-box {
  background: #f9f9f9;
  border-left: 5px solid #007bff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}
.profile {
    width: 400px; /* Adjust as needed */
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid white;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Add shadow for depth */
}

.profile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .main-container {
        flex-direction: column; /* Stack items vertically on smaller screens */
        text-align: center; /* Center text */
        padding: 20px;
    }

    .container {
        max-width: 100%; /* Full width on smaller screens */
    }

    .profile {
        width: 300px; /* Smaller profile image for tablets */
        height: 300px;
        margin-top: 30px; /* Space between text and image */
    }

    .purpose-box {
        padding: 15px;
    }

    .purpose-box p {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .container h1 {
        font-size: 36px; /* Smaller heading for mobile */
    }

    .profile {
        width: 200px; /* Smaller profile image for mobile */
        height: 200px;
    }

    .purpose-box {
        padding: 10px;
    }

    .purpose-box p {
        font-size: 14px;
    }
}

/* Gallery Section */
.gallery-container {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  max-width: 900px;
  margin: 250px auto 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;
}
.gallery-container h2 {
  font-size: 40px;
  font-weight: bold;
  color: #151314a0;
  margin-bottom: 20px;
}

/* Flex Gallery */
.flex-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
.flex-gallery img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}
.flex-gallery img:hover {
  transform: scale(1.05);
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  position: relative;
  max-width: 80%;
  max-height: 80%;
}
.modal-content img {
  width: 100%;
  height: auto;
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  border: none;
  font-size: 1.2rem;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
.modal-nav {
  position: absolute;
  top: 50%;
  background: #fff;
  border: none;
  font-size: 1.5rem;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}
.modal-prev {
  left: 10px;
  transform: translateY(-50%);
}
.modal-next {
  right: 10px;
  transform: translateY(-50%);
}

/* About Me Section */
.about-me {
  padding: 80px 5%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
}
.about-image {
  flex: 1 1 40%;
  min-width: 250px;
}
.about-image img {
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
}
.about-content {
  flex: 1 1 50%;
  min-width: 250px;
}
.about-content h1 {
  font-size: 28px;
  font-weight: bold;
  color: #e17979;
  margin-bottom: 30px;
  text-align: left;
  padding-left: 15px;
  border-bottom: 2px solid #e17979;
  display: inline-block;
}
.about-content h2 {
  font-size: 36px;
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
  margin-bottom: 20px;
  color: #151314a0;
}
.about-content p {
  font-size: 18px;
  line-height: 1.6;
  color: #44444497;
  margin-bottom: 20px;
}
.read-more-btn {
  padding: 12px 24px;
  font-size: 18px;
  background: #DFA0A0;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.read-more-btn:hover {
  background: #F7CAC9;
}

/* Social Media Section */
.social-media {
  padding: 60px 5%;
  background: #F7CAC9;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 50px auto;
  border-left: 8px solid #e17979;
  text-align: center;
}
.social-media h2 {
  font-size: 28px;
  font-weight: bold;
  color: #e17979;
  margin-bottom: 30px;
  text-align: left;
  padding-left: 15px;
  border-bottom: 2px solid #e17979;
  display: inline-block;
}
.social-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s ease, color 0.3s ease;
}
.social-link img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}
.social-link span {
  font-size: 18px;
  font-weight: bold;
  color: #555;
  transition: color 0.3s ease;
}
.social-link:hover {
  transform: translateY(-5px);
}
.social-link:hover img {
  transform: scale(1.1);
}
.social-link:hover span {
  color: #e17979;
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
