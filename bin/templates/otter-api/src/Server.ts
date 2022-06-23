import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', (req, res) => res.send('Server is running.'));

server.use('/api', routes);

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`API listening on port ${port}`));

export default server;

