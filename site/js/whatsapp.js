// script.js

// Função para abrir o link do WhatsApp
function openWhatsApp() {
    // Número de telefone para o qual você deseja enviar a mensagem
    var phoneNumber = "5581992189378";
  
    // Remova todos os caracteres não numéricos do número de telefone
    phoneNumber = phoneNumber.replace(/\D/g, '');
  
    // Construa o link do WhatsApp com o número de telefone
    var whatsappLink = "https://wa.me/" + phoneNumber;
  
    // Abrir o link no WhatsApp em uma nova janela pop-up
    window.open(whatsappLink, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=600,height=600");
  }
  
  // Adicionar um evento de clique ao botão
  document.getElementById("whatsappButton").addEventListener("click", openWhatsApp);
  