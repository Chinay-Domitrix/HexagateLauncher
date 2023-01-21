/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

window.addEventListener("DOMContentLoaded", () => {
	/**
  this.load.setBaseURL('.');
  this.load.image('background', 'assets/background.jpg');
	 */

	/**console.log(pathToFileURL('/assets/background.jpg'));*/

	const replaceText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerText = text;
	};

	for (const type of ["chrome", "node", "electron"]) replaceText(`${type}-version`, process.versions[type]);
});
