document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.benefit-nav-item');
    const benefitSections = document.querySelectorAll('.benefits-list');
    const benefitContentWrapper = document.getElementById('benefits-content-wrapper');

    let currentBackground = null;
    const backgrounds = ['back1.jpg', 'back2.jpg', 'back3.jpg'];

    // Function to change the background
    function changeBackground(newBackground) {
        if (currentBackground !== newBackground) {
            gsap.to(benefitContentWrapper, {
                backgroundImage: `url(${newBackground})`,
                duration: 1,
                ease: 'power2.inOut'
            });
            currentBackground = newBackground;
        }
    }

    // GSAP animation for the nav items
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const targetBenefit = item.getAttribute('data-benefit');
            benefitSections.forEach(section => {
                if (section.id === targetBenefit) {
                    gsap.to(section.querySelectorAll('li'), {
                        autoAlpha: 1,
                        duration: 0.5,
                        stagger: 0.2,
                        ease: 'power2.inOut'
                    });
                    section.classList.add('visible');
                    section.classList.remove('hidden');

                    // Change background
                    const backgroundIndex = index % backgrounds.length;
                    const newBackground = backgrounds[backgroundIndex] || 'aquamarine';
                    changeBackground(newBackground);

                    // Highlight the clicked button
                    navItems.forEach(navItem => navItem.classList.remove('active'));
                    item.classList.add('active');
                } else {
                    gsap.to(section.querySelectorAll('li'), { autoAlpha: 0, duration: 0.5 });
                    section.classList.remove('visible');
                    section.classList.add('hidden');
                }
            });
        });
    });

    // Show participant-benefits by default
    const participantBenefitsButton = document.querySelector('.benefit-nav-item[data-benefit="participant-benefits"]');
    participantBenefitsButton.click();
});