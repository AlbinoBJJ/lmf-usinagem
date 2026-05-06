document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Scroll Effect for Navbar
    window.onscroll = function() {
        const nav = document.querySelector('.navbar');
        if (window.pageYOffset > 50) {
            nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
            nav.style.padding = "0.5rem 0";
        } else {
            nav.style.boxShadow = "none";
            nav.style.padding = "1rem 0";
        }
    };

    // Form Handlers
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.onsubmit = (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
            e.target.reset();
        };
    }

    const quoteForm = document.getElementById('quoteForm');
    if(quoteForm) {
        quoteForm.onsubmit = (e) => {
            e.preventDefault();
            alert('Solicitação de orçamento recebida. Analisaremos seu projeto técnico imediatamente.');
            e.target.reset();
        };
    }
});