/**
 * @this {import("../../../../").Compiler} the compiler
 */
var testPlugin = function () {
	this.hooks.compilation.tap("TestPlugin", compilation => {
		compilation.hooks.finishModules.tapAsync("TestPlugin", function (
			modules,
			callback
		) {
			const firstModule = Array.from(modules.values())[0];

			compilation.rebuildModule(firstModule, () => {
				callback();
			});
		});
	});
};

/** @type {import("../../../../").Configuration} */
module.exports = {
	plugins: [testPlugin]
};
