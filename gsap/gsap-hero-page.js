document.addEventListener("DOMContentLoaded", function() {
    const hp_title = document.querySelector('.hero-title1');  
    const navItems = document.querySelectorAll('.nav-item');    
    
    // GSAP animation for the hero title
    hp_title.addEventListener('mouseenter', () => {
        gsap.to(hp_title, {
            backgroundImage: "linear-gradient(90deg, #43cea2, #185a9d)",
            duration: 0.5,
            ease: "power1.inOut",
            onUpdate: () => {
                hp_title.style.webkitBackgroundClip = 'text';
                hp_title.style.webkitTextFillColor = 'transparent';
            }
        });
    });

    hp_title.addEventListener('mouseleave', () => {
        gsap.to(hp_title, {
            backgroundImage: "linear-gradient(90deg, #2ECC71, #2ECC71)",
            duration: 0.5,
            ease: "power1.inOut",
            onUpdate: () => {
                hp_title.style.webkitBackgroundClip = 'text';
                hp_title.style.webkitTextFillColor = 'transparent';
            }
        });
    });

    // GSAP animation for the nav items
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                backgroundImage: "linear-gradient(90deg, #43cea2, #185a9d)",
                fontSize: "1.75rem",
                duration: 0.3,
                ease: "power1.inOut",
                onUpdate: () => {
                    item.style.webkitBackgroundClip = 'text';
                    item.style.webkitTextFillColor = 'transparent';
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                backgroundImage: "linear-gradient(90deg, #D9E4EC, #D9E4EC)",     
                fontSize: "1.35rem",           
                duration: 0.3,
                ease: "power1.inOut",
                onUpdate: () => {
                    item.style.webkitBackgroundClip = 'text';
                    item.style.webkitTextFillColor = 'transparent';
                }
            });
        });
    });
})
