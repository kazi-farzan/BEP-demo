document.addEventListener("DOMContentLoaded", function() {
    const weekItems = document.querySelectorAll('.week-item');
    const tlCards = document.querySelectorAll('.tl-card');
    const timelinePathProgress = document.getElementById('timeline-path-progress');
    const svgCircles = document.querySelectorAll('.svg circle');
    let activeButton = null; // Keep track of the active button
  
    function hideContent(card, onComplete) {
        gsap.to(card, {
            display: 'none',
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: onComplete
        });
    }
  
    function showContent(card) {
        const staggerItems = card.querySelectorAll('.tl-stagger-item');
        gsap.to(card, {
            display: 'flex',
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut',
            onStart: () => {
                card.classList.add('active');
            }
        });
        gsap.fromTo(staggerItems, {
            y: '50%',
            opacity: 0,
        }, {
            y: '0%',
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.2,
        });
    }
  
    weekItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const targetWeek = item.getAttribute('data-week');
  
            // Toggle active class for button color change
            if (activeButton) {
                activeButton.classList.remove('active');
                gsap.to(activeButton, {color: '', duration: 0.5, ease: 'power2.inOut'}); // Revert text color of previously active button with ease animation
            }
            item.classList.add('active');
            gsap.to(item, {color: '#2ECC71', duration: 0.5, ease: 'power2.inOut'}); // Change text color of clicked button with ease animation
            activeButton = item;
  
            // Change circle color and scale based on button selected
            svgCircles.forEach((circle, circleIndex) => {
                if (circleIndex <= index) {
                    gsap.to(circle, {
                        fill: '#3498DB',
                        scale: 1.5,
                        transformOrigin: 'center center',
                        duration: 0.5,
                        ease: 'power2.inOut'
                    });
                } else {
                    gsap.to(circle, {
                        fill: 'white',
                        scale: 1,
                        transformOrigin: 'center center',
                        duration: 0.5,
                        ease: 'power2.inOut'
                    });
                }
            });

            // Hide all cards first
            let hidePromises = [];
            tlCards.forEach(card => {
                if (card.classList.contains('active')) {
                    hidePromises.push(new Promise(resolve => {
                        hideContent(card, resolve);
                    }));
                }
            });
  
            // Show the new content after all cards are hidden
            Promise.all(hidePromises).then(() => {
                const newCard = document.querySelector(`.${targetWeek}`);
                showContent(newCard);
            });
  
            // Update timeline path progress with ease animation
            const pathLength = 375 * index;
            gsap.to(timelinePathProgress, {attr: {d: `M 0 50 ${pathLength} 50`}, duration: 1, ease: "expoScale(0.5,7,none)"});
        });
  
        // Add mouseup event listener to revert button color
        item.addEventListener('mouseup', () => {
            if (item !== activeButton) { // Check if the unclicked button is not the active button
                item.classList.remove('active');
                gsap.to(item, {color: '', duration: 0.5, ease: 'power2.inOut'}); // Revert text color of unclicked button with ease animation
            }
        });
    });
  
    // Show the first week's content by default
    const firstWeekButton = document.querySelector('.week-item[data-week="div1"]');
    firstWeekButton.click();
});
