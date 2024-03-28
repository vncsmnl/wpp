function redirecionar() {
    var telefone = document.getElementById('telefone').value;
    if (telefone) {
        window.location.href = `https://wa.me/55${telefone}`;
    } else {
        alert('Por favor, insira um número de telefone válido.');
    }
}
