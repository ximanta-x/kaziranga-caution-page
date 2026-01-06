document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
        
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !mainNav.contains(event.target)) {
                mainNav.classList.remove('active');
            }
        });
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            fetch('/api/contact', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    alert('Your message has been submitted successfully. ✅ You will receive a response through proper channels.');
                    contactForm.reset();
                } else {
                    alert('There was an error submitting your message. ❗ Please try again or use alternative communication methods.');
                }
            })
            .catch(error => {
                alert('Network error. Please ensure you have a stable connection and try again. 📶');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
    
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.footer-copyright p:first-child');
    copyrightElements.forEach(element => {
        element.textContent = element.textContent.replace('2026', currentYear.toString());
    });
});
