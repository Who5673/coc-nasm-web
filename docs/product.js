export async function loadWasmProduct() {
    // Load WebAssembly normal functions:
    const response = await fetch("product.wasm");
    const bytes = await response.arrayBuffer();
    const result = await WebAssembly.instantiate(bytes);
    return result.instance;
}
