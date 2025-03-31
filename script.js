 // Mobile Navigation Toggle
 const mobileNavToggle = document.getElementById('mobileNavToggle');
 const mobileNav = document.getElementById('mobileNav');

 mobileNavToggle.addEventListener('click', () => {
     mobileNav.classList.toggle('active');
     const icon = mobileNavToggle.querySelector('i');
     if (mobileNav.classList.contains('active')) {
         icon.classList.remove('fa-bars');
         icon.classList.add('fa-times');
     } else {
         icon.classList.remove('fa-times');
         icon.classList.add('fa-bars');
     }
 });

 // Close mobile nav when clicking on a link
 const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
 mobileNavLinks.forEach(link => {
     link.addEventListener('click', () => {
         mobileNav.classList.remove('active');
         const icon = mobileNavToggle.querySelector('i');
         icon.classList.remove('fa-times');
         icon.classList.add('fa-bars');
     });
 });




     // Smooth scrolling for anchor links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             
             const targetId = this.getAttribute('href');
             const targetElement = document.querySelector(targetId);
             
             if (targetElement) {
                 window.scrollTo({
                     top: targetElement.offsetTop,
                     behavior: 'smooth'
                 });
             }
         });
     });
     
     // Highlight active nav link based on scroll position
     //Huh zvakona n'anga murapwa achida, try again tomorrow
     const sections = document.querySelectorAll('section');
     const navLinks = document.querySelectorAll('.nav-links a');
     
     window.addEventListener('scroll', () => {
         let current = '';
         
         sections.forEach(section => {
             const sectionTop = section.offsetTop;
             const sectionHeight = section.clientHeight;
             
             if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                 current = section.getAttribute('id');
             }
         });
         
         navLinks.forEach(link => {
             link.classList.remove('activ');
             if (link.getAttribute('href') === `#${current}`) {
                 link.classList.add('activ');
             }
         });
     });

 // Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;
        

        
       
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Hire Me Form Handling
const hireForm = document.getElementById('hireForm');
if (hireForm) {
    hireForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
       
        const name = document.getElementById('hire-name').value;
        const email = document.getElementById('hire-email').value;
        const phone = document.getElementById('hire-phone').value;
        const details = document.getElementById('hire-details').value;
        const budget = document.getElementById('hire-budget').value;
        
        
        const services = [];
        document.querySelectorAll('input[name="services"]:checked').forEach(checkbox => {
            services.push(checkbox.value);
        });
        
        
        alert('Thank you for your request! I will review it and get back to you soon.');
        hireForm.reset();
    });
}


// Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();