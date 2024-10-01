import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("js-foundation/03-callbacks.ts", () => {
	test("should return an error if user doesn't exists", (done) => {
		const id = 10;
		getUserById(id, (err, user) => {
			expect(err).toBe(`USUARIO ${id} no encontrado`);
			expect(user).toBeUndefined();
			done();
		});
	});
});
