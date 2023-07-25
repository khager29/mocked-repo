import * as function1 from "./src/function1";
import * as function2 from "./src/function2";
import * as function3 from "./src/function3";
import * as folder from "./src/folder";
import * as function4 from "./src/sandbox/function4"
import * as src from "./src";

export const testUtils = { ...src, function1, function2, function3, function4, folder};

window.testUtils = testUtils;
