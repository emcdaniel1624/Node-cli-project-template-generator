"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTodo = exports.getTodos = void 0;
const database_1 = require("../database");
const getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield database_1.todosDataAccess.getTodos();
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getTodos = getTodos;
const postTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield database_1.todosDataAccess.postTodo();
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.postTodo = postTodo;
