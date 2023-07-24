/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// // index.js\n\n// console.log('Hello, World! This is index.js.');\n\n\n// document.addEventListener('DOMContentLoaded', () => {\n//     \"use strict\";\n  \n//     /**\n//      * Preloader\n//      */\n//     const preloader = document.querySelector('#preloader');\n//     if (preloader) {\n//       window.addEventListener('load', () => {\n//         preloader.remove();\n//       });\n//     }\n  \n//     /**\n//      * Sticky header on scroll\n//      */\n//     const selectHeader = document.querySelector('#header');\n//     if (selectHeader) {\n//       document.addEventListener('scroll', () => {\n//         window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');\n//       });\n//     }\n  \n//     /**\n//      * Mobile nav toggle\n//      */\n//     const mobileNavShow = document.querySelector('.mobile-nav-show');\n//     const mobileNavHide = document.querySelector('.mobile-nav-hide');\n  \n//     document.querySelectorAll('.mobile-nav-toggle').forEach(el => {\n//       el.addEventListener('click', function(event) {\n//         event.preventDefault();\n//         mobileNavToogle();\n//       })\n//     });\n  \n//     function mobileNavToogle() {\n//       document.querySelector('body').classList.toggle('mobile-nav-active');\n//       mobileNavShow.classList.toggle('d-none');\n//       mobileNavHide.classList.toggle('d-none');\n//     }\n  \n//     /**\n//      * Toggle mobile nav dropdowns\n//      */\n//     const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');\n  \n//     navDropdowns.forEach(el => {\n//       el.addEventListener('click', function(event) {\n//         if (document.querySelector('.mobile-nav-active')) {\n//           event.preventDefault();\n//           this.classList.toggle('active');\n//           this.nextElementSibling.classList.toggle('dropdown-active');\n  \n//           let dropDownIndicator = this.querySelector('.dropdown-indicator');\n//           dropDownIndicator.classList.toggle('bi-chevron-up');\n//           dropDownIndicator.classList.toggle('bi-chevron-down');\n//         }\n//       })\n//     });\n  \n//     /**\n//      * Scroll top button\n//      */\n//     const scrollTop = document.querySelector('.scroll-top');\n//     if (scrollTop) {\n//       const togglescrollTop = function() {\n//         window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');\n//       }\n//       window.addEventListener('load', togglescrollTop);\n//       document.addEventListener('scroll', togglescrollTop);\n//       scrollTop.addEventListener('click', window.scrollTo({\n//         top: 0,\n//         behavior: 'smooth'\n//       }));\n//     }\n  \n//     /**\n//      * Initiate glightbox\n//      */\n//     const glightbox = GLightbox({\n//       selector: '.glightbox'\n//     });\n  \n//     /**\n//      * Init swiper slider with 1 slide at once in desktop view\n//      */\n//     new Swiper('.slides-1', {\n//       speed: 600,\n//       loop: true,\n//       autoplay: {\n//         delay: 5000,\n//         disableOnInteraction: false\n//       },\n//       slidesPerView: 'auto',\n//       pagination: {\n//         el: '.swiper-pagination',\n//         type: 'bullets',\n//         clickable: true\n//       },\n//       navigation: {\n//         nextEl: '.swiper-button-next',\n//         prevEl: '.swiper-button-prev',\n//       }\n//     });\n  \n//     /**\n//      * Init swiper slider with 3 slides at once in desktop view\n//      */\n//     new Swiper('.slides-3', {\n//       speed: 600,\n//       loop: true,\n//       autoplay: {\n//         delay: 5000,\n//         disableOnInteraction: false\n//       },\n//       slidesPerView: 'auto',\n//       pagination: {\n//         el: '.swiper-pagination',\n//         type: 'bullets',\n//         clickable: true\n//       },\n//       navigation: {\n//         nextEl: '.swiper-button-next',\n//         prevEl: '.swiper-button-prev',\n//       },\n//       breakpoints: {\n//         320: {\n//           slidesPerView: 1,\n//           spaceBetween: 40\n//         },\n  \n//         1200: {\n//           slidesPerView: 3,\n//         }\n//       }\n//     });\n  \n//     /**\n//      * Porfolio isotope and filter\n//      */\n//     let portfolionIsotope = document.querySelector('.portfolio-isotope');\n  \n//     if (portfolionIsotope) {\n  \n//       let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';\n//       let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';\n//       let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';\n  \n//       window.addEventListener('load', () => {\n//         let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {\n//           itemSelector: '.portfolio-item',\n//           layoutMode: portfolioLayout,\n//           filter: portfolioFilter,\n//           sortBy: portfolioSort\n//         });\n  \n//         let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');\n//         menuFilters.forEach(function(el) {\n//           el.addEventListener('click', function() {\n//             document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');\n//             this.classList.add('filter-active');\n//             portfolioIsotope.arrange({\n//               filter: this.getAttribute('data-filter')\n//             });\n//             if (typeof aos_init === 'function') {\n//               aos_init();\n//             }\n//           }, false);\n//         });\n  \n//       });\n  \n//     }\n  \n//     /**\n//      * Animation on scroll function and init\n//      */\n//     function aos_init() {\n//       AOS.init({\n//         duration: 800,\n//         easing: 'slide',\n//         once: true,\n//         mirror: false\n//       });\n//     }\n//     window.addEventListener('load', () => {\n//       aos_init();\n//     });\n  \n//   });\n\n\nconst express = __webpack_require__(/*! express */ \"express\");\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nconst app = express();\nconst port = process.env.PORT || 3000;\n\n// Replace contact@example.com with your real receiving email address\nconst receivingEmailAddress = 'contact@example.com';\n\n// Middleware to parse incoming request bodies as JSON\napp.use(bodyParser.json());\n\n// Endpoint to handle the contact form submission\napp.post('/send-email', (req, res) => {\n  const { name, email, subject, message } = req.body;\n\n  // Create a Nodemailer transporter\n  const transporter = nodemailer.createTransport({\n    // Add your SMTP configuration here if you want to use SMTP\n    // For example, for Gmail: https://nodemailer.com/usage/using-gmail/\n  });\n\n  // Email content\n  const mailOptions = {\n    from: email,\n    to: receivingEmailAddress,\n    subject: subject,\n    text: `Name: ${name}\\nEmail: ${email}\\nMessage: ${message}`,\n  };\n\n  // Send the email\n  transporter.sendMail(mailOptions, (error, info) => {\n    if (error) {\n      console.error('Error sending email:', error);\n      res.status(500).json({ error: 'Error sending email' });\n    } else {\n      console.log('Email sent:', info.response);\n      res.status(200).json({ message: 'Email sent successfully' });\n    }\n  });\n});\n\n// Start the server\napp.listen(port, () => {\n  console.log(`Server is running on port ${port}`);\n});\n\n\n//# sourceURL=webpack://globcon2/./index.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemailer");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;