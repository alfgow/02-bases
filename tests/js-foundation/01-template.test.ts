import { emailTemplate } from "../../src/js-foundation/01-template";

describe("js-foundation/01-template", () => {
	test("emailTemplate should  contain a greeting", () => {
		expect(emailTemplate).toContain("Hola, ");
	});

	test("emailTemplate should contain a name", () => {
		expect(emailTemplate).toContain("{{name}}");
	});
});
