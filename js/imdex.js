document.addEventListener('DOMContentLoaded', function() {
    const botaoclipe = document.querySelector(".botao-clipe");
    const modal = document.querySelector(".modal");
    const fecharModalBtn = document.querySelector('.fechar-modal');

    botaoclipe.addEventListener("click", () => {
        console.log("clicou no botao veja o clipe");
        modal.classList.add("aberto");
    });

    fecharModalBtn.addEventListener('click', function() {
        modal.classList.remove('aberto');
    });
});



