
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuContainer = document.getElementById('mobile-menu-container');
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    const counters = document.querySelectorAll('.counter');

    // Function to open mobile menu
    menuBtn.addEventListener('click', () => {
        mobileMenuContainer.classList.remove('hidden');
        mobileMenu.classList.remove('translate-x-full');
        
        // Add animation to menu links
        mobileMenuLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.remove('opacity-0');
                link.classList.remove('translate-x-4');
            }, 100 * index); // Delay each link's animation
        });
    });

    // Function to close mobile menu
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenuContainer.classList.add('hidden');
        }, 300); // Wait for animation to finish before hiding container
    });

// counter section........................
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    const speed = 700; // Speed of count-up effect

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                const increment = target / speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = `${target}+`;
                }
            };
            updateCount();
        });
    };

    // Check if section is in view
    const statsSection = document.getElementById('stats');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(statsSection); // Stop observing once animation starts
            }
        });
    });

    observer.observe(statsSection); // Start observing
});


