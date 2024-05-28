document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var fullname = document.getElementById('fullname').value;
    var specialty = document.getElementById('specialty').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    
    // Verifica se a data e o horário estão disponíveis
    if (!isAvailable(date, time)) {
      document.getElementById('message').innerText = 'Data e horário indisponíveis. Por favor, escolha outro.';
      return;
    }
    
    // Aqui você pode enviar os dados do formulário para o servidor ou realizar outra ação desejada
    var message = document.createElement('p');
    message.innerText = 'Agendamento realizado com sucesso:';
    var data = document.createElement('p');
    data.innerText = 'Nome Completo: ' + fullname + ', Especialidade Desejada: ' + specialty + ', Data da Consulta: ' + date + ', Horário da Consulta: ' + time;
    
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = '';
    messageDiv.appendChild(message);
    messageDiv.appendChild(data);
  });
  
  function isAvailable(date, time) {
    // Simula a verificação de disponibilidade
    // Aqui você pode implementar a lógica de verificação com sua própria lógica de agendamento
    // Este é apenas um exemplo simples
    var appointments = [
      { date: '2024-05-10', time: '09:00' },
      { date: '2024-05-10', time: '10:00' },
      { date: '2024-05-11', time: '11:00' }
    ];
    
    for (var i = 0; i < appointments.length; i++) {
      if (appointments[i].date === date && appointments[i].time === time) {
        return false;
      }
    }
    
    return true;
  }
  