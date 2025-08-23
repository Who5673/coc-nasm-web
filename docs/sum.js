
export async function loadWasm() {
    // Load WebAssembly normal functions:
    const response = await fetch("sum.wasm");
    const bytes = await response.arrayBuffer();
    const result = await WebAssembly.instantiate(bytes);
    return result.instance;
}

export default async function nasmToWasmInit() {
  const instance = await loadWasm();
  globalThis.sum = instance.exports.sum

  return instance;
};

/* How to call the function:

await nasmInit();

// After that, call the function normally. For example, sum(a, b);

const x = sum(15, 20);

*/
