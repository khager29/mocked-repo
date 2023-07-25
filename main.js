import * as folder1 from "./src/folder1";
import * as folder2 from "./src/sandbox/folder2";
import * as src from "./src";

export const testUtils = { ...src, folder1, folder2 };

window.testUtils = testUtils;
