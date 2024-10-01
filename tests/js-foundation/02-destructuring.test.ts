import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring", () => {
	test("characters shoud contain la chona", () => {
		expect(characters).toContain("la chona");
	});

	test("first character should be la chona and second Mi apa", () => {
		const [chona, apa] = characters;
		expect(chona).toBe("la chona");
		expect(apa).toBe("bmw");
	});
});
