import nasmToWasmInit from "./signed_div.js";

await nasmToWasmInit();
const result = signed_div(-15, 3);
console.log(result)