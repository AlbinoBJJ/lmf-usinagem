document.addEventListener('DOMContentLoaded', () => {
    // Efeito de rolagem na barra de navegação (Navbar)
    window.onscroll = function() {
        const nav = document.querySelector('.navbar');
        if (window.pageYOffset > 50) {
            nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
            nav.style.padding = "0.5rem 0";
        } else {
            nav.style.boxShadow = "none";
            nav.style.padding = "1rem 0";
        }
    };

    // Controle de envio do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Nossa equipe comercial entrará em contato em breve.');
            e.target.reset();
        };
    }

    // Controle de envio do Formulário de Orçamento
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.onsubmit = (e) => {
            e.preventDefault();
            alert('Solicitação de orçamento recebida! Nossa engenharia analisará seu projeto técnico imediatamente.');
            e.target.reset();
        };
    }
});