function enviarMensagem() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('owner_email', 'felipechagas@gmail.com');

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
    });
}