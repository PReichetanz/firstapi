const handler = (request, response) => {
  return response.json({
    message: `Ich wurde mit der Methode ${request.method} aufgerufen.`,
  });
};

export default handler;
