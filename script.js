function redirecionar() {
    var telefone = document.getElementById('telefone').value;
    telefone = telefone.replace(/\D/g, '');
    var countryCode = document.getElementById('countryCode').value;

    if (telefone) {
        window.location.href = `https://wa.me/${countryCode}${telefone}`;
    } else {
        alert('Por favor, insira um número de telefone válido.');
    }
}
