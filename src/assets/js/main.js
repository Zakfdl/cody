/**
 * CodyUI Pharmacy Theme - Main JS
 */

document.addEventListener('DOMContentLoaded', () => {
    initPharmacyUX();
});

function initPharmacyUX() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelectorAll('[data-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    menuToggle.forEach(btn => {
        btn.addEventListener('click', () => {
            mobileMenu?.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        });
    });

    // Sticky Header
    const header = document.querySelector('header');
    const topBar = header?.querySelector('.top-bar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header?.classList.add('shadow-xl', 'bg-white/95', 'backdrop-blur-md', 'py-1');
            header?.classList.remove('bg-white');
            topBar?.classList.add('hidden');
        } else {
            header?.classList.remove('shadow-xl', 'bg-white/95', 'backdrop-blur-md', 'py-1');
            header?.classList.add('bg-white');
            topBar?.classList.remove('hidden');
        }
    });

    // Prescription Upload Placeholder Logic
    const uploadBtn = document.querySelector('[data-upload-prescription]');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            alert('Prescription upload modal would open here.');
        });
    }

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => observer.observe(img));
    }
}
