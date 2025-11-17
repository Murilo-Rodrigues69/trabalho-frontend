// Alerta de boas-vindas na primeira visita
document.addEventListener("DOMContentLoaded", function () {

    // Verifica se o modal já foi mostrado em visitas anteriores
    if (!localStorage.getItem("modalMostrado")) {

        // Inicializa o modal Bootstrap
        var modal = new bootstrap.Modal(document.getElementById("modalBoasVindas"));

        // Exibe o modal
        modal.show();

        // Quando o modal for fechado, registra no localStorage
        document.getElementById("modalBoasVindas").addEventListener("hidden.bs.modal", function () {
            localStorage.setItem("modalMostrado", "true");
        });
    }
});


const root = document.documentElement; // <html>
const btnTema = document.getElementById("btnTema");

// Aplica tema salvo
const temaSalvo = localStorage.getItem("tema-bs") || "light";
root.setAttribute("data-bs-theme", temaSalvo);
if (btnTema) btnTema.textContent = temaSalvo === "dark" ? "☀️" : "🌙";

// Alterna ao clicar
if (btnTema) {
    btnTema.addEventListener("click", () => {
        const atual = root.getAttribute("data-bs-theme");
        const novoTema = atual === "light" ? "dark" : "light";
        root.setAttribute("data-bs-theme", novoTema);
        localStorage.setItem("tema-bs", novoTema);
        btnTema.textContent = novoTema === "dark" ? "☀️" : "🌙";
    });
}
//Função para mostrar os contatos
document.addEventListener("DOMContentLoaded", function () {
    const btnContato = document.getElementById("btnMostrarContato");
    const secContato = document.getElementById("contato");

    if (btnContato) {
        btnContato.addEventListener("click", () => {
            secContato.style.display = "block";
            secContato.scrollIntoView({ behavior: "smooth" });
        });
    }
});


// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Validação básica do formulário de contato
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && email && mensagem) {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}
