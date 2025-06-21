function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Bem-vindo à minha página! Nunca desista dos seus sonhos.";
    mensagem.style.marginTop = "15px";
    mensagem.style.fontWeight = "bold";
    mensagem.style.color = "#2e7d32"; 
    setTimeout(() => {
        mensagem.innerHTML = "";
    }, 3000);
}