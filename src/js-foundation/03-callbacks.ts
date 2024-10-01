interface User {
	id: number;
	name: string;
}

const users: User[] = [
	{
		id: 1,
		name: "alfgow",
	},
	{
		id: 2,
		name: "mi apa",
	},
];

export const getUserById = (
	id: number,
	callback: (error?: string, user?: any) => void
) => {
	const user = users.find((user) => user.id === id);

	user
		? callback(undefined, user)
		: callback(`USUARIO ${id} no encontrado`);
};
