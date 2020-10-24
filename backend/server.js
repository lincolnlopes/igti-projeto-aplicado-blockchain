import app from "./app";

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || "3001");

app.listen(port, () => {
  console.log(`Servidor iniciado em https://localhost:${port}`);
  logger.info("Listerning at port 3000....");
});
