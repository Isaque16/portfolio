document.querySelector(".contact-wrapper").addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o envio inicial do formulário

  const fields = [
    { field: 'input[name="contato"]', message: "O campo de contato é obrigatório." },
    { field: 'input[name="nomeProjeto"]', message: "O campo do nome do projeto é obrigatório." },
    { field: 'input[name="contratante"]', message: "O campo do seu nome é obrigatório." },
    { field: 'textarea[name="mensagem"]', message: "A mensagem não pode estar vazia." },
  ];

  let hasError = false;

  // Limpa mensagens de erro
  document.querySelectorAll(".error-message").forEach((msg) => (msg.textContent = ""));

  // Valida os campos
  fields.forEach(({ field, message }) => {
    const input = document.querySelector(field);
    switch (true) {
      case !input.value.trim():
        input.nextElementSibling.textContent = message;
        hasError = true;
        break;
    }
  });

  // Se não houver erros, submete o formulário
  if (!hasError) e.target.submit();
});
