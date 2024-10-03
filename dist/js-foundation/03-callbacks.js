"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: "alfgow",
    },
    {
        id: 2,
        name: "mi apa",
    },
];
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    user
        ? callback(undefined, user)
        : callback(`USUARIO ${id} no encontrado`);
};
exports.getUserById = getUserById;
