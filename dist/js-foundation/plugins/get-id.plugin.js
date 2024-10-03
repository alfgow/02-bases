"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueId = void 0;
const uuid_1 = require("uuid");
// const uniqueId = uuidv4();
const uniqueId = () => {
    return (0, uuid_1.v4)();
};
exports.uniqueId = uniqueId;
