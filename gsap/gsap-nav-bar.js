
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.nav-bar-logo');
    const navItems = document.querySelectorAll('.nav-item');    
    
    // GSAP animation for the hero title
    title.addEventListener('mouseenter', () => {
        gsap.to(title, {
            backgroundImage: "linear-gradient(90deg, #43cea2, #185a9d)",
            duration: 0.5,
            ease: "power1.inOut",
            onUpdate: () => {
                title.style.webkitBackgroundClip = 'text';
                title.style.webkitTextFillColor = 'transparent';
            }
        });
    });

    title.addEventListener('mouseleave', () => {
        gsap.to(title, {
            backgroundImage: "linear-gradient(90deg, #D9E4EC, #D9E4EC)",
            duration: 0.5,
            ease: "power1.inOut",
            onUpdate: () => {
                title.style.webkitBackgroundClip = 'text';
                title.style.webkitTextFillColor = 'transparent';
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
});

document.addEventListener("DOMContentLoaded", function() {    

    // Buttons
    const buttons = document.querySelectorAll('.guideline-button1, .guideline-button2');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            // Change background color with ripple effect
            createRipple(e, button);
            gsap.to(button, {
                backgroundColor: "#D9E4EC",
                color: "#111",
                borderColor: "#D9E4EC",
                duration: 0.3
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                backgroundColor: "#111",
                color: "#D9E4EC",
                borderColor: "#3EEB57",
                duration: 0.3
            });
        });
    });
});
