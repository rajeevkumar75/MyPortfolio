  
        const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        const toggleMenu = () => mobileMenu.classList.toggle('active');

        menuToggle.addEventListener('click', toggleMenu);
        menuClose.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

        VANTA.NET({
            el: "#vanta-canvas",
            mouseControls: true,
            touchControls: true,
            color: 0x6366f1,
            backgroundColor: 0x020617,
            points: window.innerWidth < 768 ? 8.00 : 12.00,
            maxDistance: 22.00,
            spacing: 16.00
        });

        if (window.innerWidth > 1024) {
            const cursor = document.getElementById('cursor');
            const dot = document.getElementById('cursor-dot');
            window.addEventListener('mousemove', (e) => {
                cursor.animate({ left: `${e.clientX - 15}px`, top: `${e.clientY - 15}px` }, { duration: 500, fill: "forwards" });
                dot.style.left = `${e.clientX - 3}px`;
                dot.style.top = `${e.clientY - 3}px`;
            });
        }

        const sr = ScrollReveal({ reset: false, mobile: true });
        sr.reveal('.reveal-top', { origin: 'top', distance: '40px', duration: 1000 });
        sr.reveal('.reveal-left', { origin: 'left', distance: '60px', duration: 1200 });
        sr.reveal('.reveal-right', { origin: 'right', distance: '60px', duration: 1200 });
        sr.reveal('.reveal-bottom', { origin: 'bottom', distance: '60px', duration: 1000, interval: 150 });
        sr.reveal('.reveal-load', { opacity: 0, duration: 2000 });

        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), { max: 5, speed: 400, glare: true, "max-glare": 0.2 });