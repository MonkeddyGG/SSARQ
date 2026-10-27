document.addEventListener("DOMContentLoaded", () => {

    // 1. Manejo del menú móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const header = document.getElementById('header');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.innerHTML = navLinks.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Cerrar menú al dar click en un enlace (Móviles)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // 2. Efecto del Header al hacer Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            header.style.height = '80px'; // Encoger ligeramente
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
            header.style.height = '90px'; // Tamaño original
        }
    });

    // 3. Animaciones de Revelado (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // Se activa cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Funcionalidad del Formulario
    const formCotizacion = document.getElementById('form-cotizacion');
    if (formCotizacion) {
        formCotizacion.addEventListener('submit', (e) => {
            e.preventDefault();
            // Lógica de envío (API o fetch)
            alert('¡Excelente! Hemos recibido tu solicitud. Nos comunicaremos contigo a la brevedad para asesorarte.');
            formCotizacion.reset();
        });
    }
});