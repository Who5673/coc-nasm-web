export async function loadWasmUnsignedDiv() {
    // Load WebAssembly normal functions:
    const response = await fetch("unsigned_div.wasm");
    const bytes = await response.arrayBuffer();
    const result = await WebAssembly.instantiate(bytes);
    return result.instance;
}
