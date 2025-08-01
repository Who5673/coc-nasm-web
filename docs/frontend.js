/*
Copyright (c) 2025 who5673. All rights served.

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

// WebAssembly and frontend.js
Module.onRuntimeInitialized = () => {
  const returnformat = Module.cwrap('returnformat', 'string', ['string']);
  const result2 = returnformat("Hello from WebAssembly!");
  console.log(result2);
  let current_background = returnformat("dark");

  /* Smooth scrolling */
  window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100)
      }
    }
  });

  /* Static scripts */
  const backgroundmode = document.getElementById("light");
  const menu = document.getElementsByTagName("nav")[0];
  const faketitle = document.getElementById("faketitle");
  backgroundmode.addEventListener("click", () => {
    switch (current_background) {
      case "dark":
        document.getElementById("bodie").classList.add("light");
        menu.classList.add(returnformat("light"));
        current_background = returnformat("light");
        break;
      default:
        document.getElementById("bodie").classList.remove("light");
        menu.classList.remove(returnformat("light"));
        current_background = returnformat("dark");
        break;
    }
  });

  /* Get the boxes in Home */
}
/* JavaScript's Copy Clipboard */
let cpclipbd = document.querySelectorAll(".c2");
cpclipbd.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const code = document.querySelectorAll(".codeblock")[idx].textContent;
    let cpresult = navigator.clipboard.writeText(code);
    cpresult.then(() => window.alert("Copied")).catch(() => alert("Error while copying"));
  });
});