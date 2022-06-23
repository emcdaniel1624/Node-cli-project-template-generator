"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const server = (0, express_1.default)();
server.use(body_parser_1.default.json());
server.use(body_parser_1.default.urlencoded({ extended: true }));
server.get('/', (req, res) => res.send('Server is running.'));
server.use('/api', routes_1.default);
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`API listening on port ${port}`));
exports.default = server;
