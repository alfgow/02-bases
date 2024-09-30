
interface BuildMakePersonOptions {
    uniqueId: () => string,
    getAge: (birthdate: string) => number
    
}

interface PersonOptions {
    name: string,
    birthdate: string
}

//! FACTORY => una función que crea una función

export const buildMakePerson = ({uniqueId , getAge}: BuildMakePersonOptions) => {
    return ({name, birthdate}: PersonOptions) => {
        return {
            id: uniqueId(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}