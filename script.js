document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o menu hamburguer em telas pequenas
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Lógica para alternar entre os formulários de cadastro (PF e PJ)
    const formToggleButtons = document.querySelectorAll('.btn-toggle');
    const formSections = document.querySelectorAll('.form-section');

    formToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const formId = button.getAttribute('data-form');

            // Remove a classe 'active' de todos os botões e seções
            formToggleButtons.forEach(btn => btn.classList.remove('active'));
            formSections.forEach(section => section.classList.remove('active'));

            // Adiciona a classe 'active' ao botão e à seção correspondente
            button.classList.add('active');
            document.getElementById(`form-${formId}`).classList.add('active');
        });
    });

    // Adiciona validação básica do formulário (opcional)
    const cadastroForm = document.getElementById('cadastro-form');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulação de envio
            alert('Cadastro enviado com sucesso! Aguarde a aprovação para acessar os preços.');
            
            // Aqui você faria uma chamada a uma API ou enviaria para um servidor
            // Ex: fetch('URL_DO_SEU_SERVIDOR', { method: 'POST', body: new FormData(e.target) });
        });
    }
});