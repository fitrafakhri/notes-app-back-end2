const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

const startServer = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

if (process.env.NODE_ENV === "production") {
  startServer();
} else {
  init();
}
