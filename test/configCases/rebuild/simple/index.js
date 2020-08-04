import { doThings } from "./other-file";

it("should compile", function (done) {
	doThings(true);
	done();
});
