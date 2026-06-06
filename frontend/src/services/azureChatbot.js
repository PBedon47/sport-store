export async function sendMessageToAzure(
  userMessage,
  conversationHistory = []
) {
  try {
    const response = await fetch(
      "https://sport-store-backend-7s42.onrender.com/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: userMessage,
          history: conversationHistory
        })
      }
    );

    const data = await response.json();

    return {
    reply: data.reply || "Disculpa, no pude generar una respuesta.",
    products: data.products || []
  };

  } catch (error) {
  console.error(error);

  return {
    reply: "Error al conectar con SportBot.",
    products: []
  };
  }
}