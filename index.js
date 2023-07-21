
// // index.js

// console.log('Hello, World! This is index.js.');


// document.addEventListener('DOMContentLoaded', () => {
//     "use strict";
  
//     /**
//      * Preloader
//      */
//     const preloader = document.querySelector('#preloader');
//     if (preloader) {
//       window.addEventListener('load', () => {
//         preloader.remove();
//       });
//     }
  
//     /**
//      * Sticky header on scroll
//      */
//     const selectHeader = document.querySelector('#header');
//     if (selectHeader) {
//       document.addEventListener('scroll', () => {
//         window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
//       });
//     }
  
//     /**
//      * Mobile nav toggle
//      */
//     const mobileNavShow = document.querySelector('.mobile-nav-show');
//     const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
//     document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
//       el.addEventListener('click', function(event) {
//         event.preventDefault();
//         mobileNavToogle();
//       })
//     });
  
//     function mobileNavToogle() {
//       document.querySelector('body').classList.toggle('mobile-nav-active');
//       mobileNavShow.classList.toggle('d-none');
//       mobileNavHide.classList.toggle('d-none');
//     }
  
//     /**
//      * Toggle mobile nav dropdowns
//      */
//     const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
  
//     navDropdowns.forEach(el => {
//       el.addEventListener('click', function(event) {
//         if (document.querySelector('.mobile-nav-active')) {
//           event.preventDefault();
//           this.classList.toggle('active');
//           this.nextElementSibling.classList.toggle('dropdown-active');
  
//           let dropDownIndicator = this.querySelector('.dropdown-indicator');
//           dropDownIndicator.classList.toggle('bi-chevron-up');
//           dropDownIndicator.classList.toggle('bi-chevron-down');
//         }
//       })
//     });
  
//     /**
//      * Scroll top button
//      */
//     const scrollTop = document.querySelector('.scroll-top');
//     if (scrollTop) {
//       const togglescrollTop = function() {
//         window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
//       }
//       window.addEventListener('load', togglescrollTop);
//       document.addEventListener('scroll', togglescrollTop);
//       scrollTop.addEventListener('click', window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       }));
//     }
  
//     /**
//      * Initiate glightbox
//      */
//     const glightbox = GLightbox({
//       selector: '.glightbox'
//     });
  
//     /**
//      * Init swiper slider with 1 slide at once in desktop view
//      */
//     new Swiper('.slides-1', {
//       speed: 600,
//       loop: true,
//       autoplay: {
//         delay: 5000,
//         disableOnInteraction: false
//       },
//       slidesPerView: 'auto',
//       pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       }
//     });
  
//     /**
//      * Init swiper slider with 3 slides at once in desktop view
//      */
//     new Swiper('.slides-3', {
//       speed: 600,
//       loop: true,
//       autoplay: {
//         delay: 5000,
//         disableOnInteraction: false
//       },
//       slidesPerView: 'auto',
//       pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       breakpoints: {
//         320: {
//           slidesPerView: 1,
//           spaceBetween: 40
//         },
  
//         1200: {
//           slidesPerView: 3,
//         }
//       }
//     });
  
//     /**
//      * Porfolio isotope and filter
//      */
//     let portfolionIsotope = document.querySelector('.portfolio-isotope');
  
//     if (portfolionIsotope) {
  
//       let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
//       let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
//       let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';
  
//       window.addEventListener('load', () => {
//         let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
//           itemSelector: '.portfolio-item',
//           layoutMode: portfolioLayout,
//           filter: portfolioFilter,
//           sortBy: portfolioSort
//         });
  
//         let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
//         menuFilters.forEach(function(el) {
//           el.addEventListener('click', function() {
//             document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
//             this.classList.add('filter-active');
//             portfolioIsotope.arrange({
//               filter: this.getAttribute('data-filter')
//             });
//             if (typeof aos_init === 'function') {
//               aos_init();
//             }
//           }, false);
//         });
  
//       });
  
//     }
  
//     /**
//      * Animation on scroll function and init
//      */
//     function aos_init() {
//       AOS.init({
//         duration: 800,
//         easing: 'slide',
//         once: true,
//         mirror: false
//       });
//     }
//     window.addEventListener('load', () => {
//       aos_init();
//     });
  
//   });


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

// Replace contact@example.com with your real receiving email address
const receivingEmailAddress = 'contact@example.com';

// Middleware to parse incoming request bodies as JSON
app.use(bodyParser.json());

// Endpoint to handle the contact form submission
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Add your SMTP configuration here if you want to use SMTP
    // For example, for Gmail: https://nodemailer.com/usage/using-gmail/
  });

  // Email content
  const mailOptions = {
    from: email,
    to: receivingEmailAddress,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
