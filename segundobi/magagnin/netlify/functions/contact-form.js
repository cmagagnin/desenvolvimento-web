export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Preencha todos os campos.' }),
      };
    }

    console.log('Novo contato recebido:', { name, email, message });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Mensagem enviada com sucesso. Em breve entraremos em contato!',
      }),
    };
  } catch (error) {
    console.error('Erro na função contact-form:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Erro ao enviar a mensagem. Tente novamente mais tarde.',
      }),
    };
  }
};
