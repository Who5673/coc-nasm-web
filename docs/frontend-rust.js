import init, { returnformat } from "./rust-wasm/my_wasm_project.js";

await init();
console.log(returnformat("Hello from Rust WebAssembly"));