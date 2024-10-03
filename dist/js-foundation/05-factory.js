"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
//! FACTORY => una función que crea una función
const buildMakePerson = ({ uniqueId, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: uniqueId(),
            name,
            birthdate,
            age: getAge(birthdate)
        };
    };
};
exports.buildMakePerson = buildMakePerson;
