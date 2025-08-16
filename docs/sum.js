
/*
Copyright (c) July, 2025 by who5673

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
export async function loadWasm() {
    // Load WebAssembly normal functions:
    const response = await fetch("sum.wasm");
    const bytes = await response.arrayBuffer();
    const result = await WebAssembly.instantiate(bytes);
    return result.instance;
}

let nasmToWasmInit = async function() {
  const instance = await loadWasm();
  globalThis.sum = instance.exports.sum;

  return instance;
};

export default nasmToWasmInit;
/* How to call the function:

await nasmInit();

// After that, call the function normally. For example, sum(a, b);

const x = sum(15, 20);

*/
