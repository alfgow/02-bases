interface User {
    id: number,
    name: string
}

const users: User[] = [
    {
        id: 1,
        name: 'alfgow',
    },
    {
        id: 2,
        name: 'mi apa',
    }
];

function getUserById(id: number, callback: (error?: string, user?: any)=>void){
    const user = users.find(function(user){
        return user.id === id;
    });
    if (!user) {
        return callback(`USUARIO ${id} no encontrado`);
    }
    callback(undefined, user)
}

module.exports = {
    getUserById
}