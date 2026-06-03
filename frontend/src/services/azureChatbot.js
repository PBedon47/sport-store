export async function sendMessageToAzure(
  userMessage,
  conversationHistory = []
) {
  try {
    const response = await fetch(
      "http://localhost:5000/api/chat",
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
    reply: data.reply,
    products: data.products || []
  };

  } catch (error) {
    console.error(error);
    return "Error al conectar con SportBot.";
  }
}