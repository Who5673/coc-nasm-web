export async function loadWasmSub() {
    // Load WebAssembly normal functions:
    const response = await fetch("sub.wasm");
    const bytes = await response.arrayBuffer();
    const result = await WebAssembly.instantiate(bytes);
    return result.instance;
}
