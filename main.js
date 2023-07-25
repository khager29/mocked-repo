import * as folder1 from "./src/folder1";
import * as folder2 from "./src/folder2";
import * as folder3 from "./src/folder3";
import * as folder4 from "./src/sandbox/folder4";
import * as src from "./src";

export const testUtils = { ...src, folder1, folder2, folder3, folder4 };

window.testUtils = testUtils;
