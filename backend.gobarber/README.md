# Recuperação de senha

  **Requisitos Funcionais**

  - O usuário deve poder recuperar sua senha informando seu e-mail;
  - O usuário deve poder receber um e-mail com as instruções de recuperação de senha;
  - O usuário deve poder resetar sua senha;

  **Requisitos Não Funcionais**

  - Utilizar Mailtrap para utilizar envios em ambiente de desenvolvimento;
  - Utilizar Amazon SES para envios em produção;
  - O envio de e-mails deve acontecer em segundo plano (background job);

  **Regras de Negocio**

  - O link enviado por email para resetar senha, deve expirar em duas hrs;
  - O usuário precisa confirmar a nova senha no momento de resetar a anterior;

# Atualização do perfil

# Painel do prestador

# Agendamento de serviços
