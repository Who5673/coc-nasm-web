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
import init, { returnformat } from "./rust-wasm/my_wasm_project.js";

function get_element_id(id) {
  return document.getElementById(id);
}

await init();

// WebAssembly and frontend.js
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

// Menu close button
get_element_id(returnformat("closemenu")).addEventListener("click", function() {
  document.querySelector("nav").classList.add("hide");
  document.querySelector("nav").classList.remove("show");
  get_element_id("openmenu").classList.remove("show");
  document.querySelector("main").classList.remove("show");
  document.querySelector("footer").classList.remove("show");
});
// Menu open button
get_element_id(returnformat("openmenu")).addEventListener("click", function() {
  document.querySelector("nav").classList.add("show");
  document.querySelector("nav").classList.remove("hide");
  document.querySelector("main").classList.add("show");
  document.querySelector("footer").classList.add("show");
  get_element_id("openmenu").classList.add("show");
});
let xy = get_element_id(returnformat("closemenu"));
xy.textContent = "<<";

const currentPath = window.location.pathname;
  /* Get the boxes in Home */


/* JavaScript's Flexible Copy Clipboard */
let cpclipbd = document.querySelectorAll(".c2");
cpclipbd.forEach((btn) => {
  btn.addEventListener("click", () => {
    const codeBlock = btn.closest(".nvimcodeinstallation").querySelector(".codeblock");
    console.log(codeBlock);
    navigator.clipboard.writeText(codeBlock.textContent)
    .then(() => window.alert("Copied"))
    .catch(() => alert("Error while copying"));
  });
});

let cpclipbdc5 = document.querySelectorAll(".c5");
cpclipbdc5.forEach((btn) => {
  btn.addEventListener("click", () => {
    // This is the element that changes between language-cpp and language-rust
    const codeElem = document.getElementById("testme");
    navigator.clipboard.writeText(codeElem.textContent)
      .then(() => window.alert("Copied"))
      .catch(() => alert("Error while copying"));
  });
});


let cliplang="cpp";

// Clipboxes
function setActiveTab(lang) {
  const cTab = document.querySelector(".clipbox1");
  const rTab = document.querySelector(".clipbox2");

  if (lang === "cpp") {
    cTab.classList.add("show");
    rTab.classList.remove("show");
  } else if (lang === "rust") {
    rTab.classList.add("show");
    cTab.classList.remove("show");
  }
}

// Load C or Rust Example
if (currentPath.endsWith("fake_document.html")) {
  const loadedLangs = new Set();
  const code = document.getElementById('testme');
  let rawCode = code.textContent;
  const codeSnippets = {
    cpp: `int main(void) {
  return 0;
}`,
    rust: `use std::process::exit;

fn main() {
  exit(0);
}`
  };

  function unhighlightElement(code) {
    code.classList.forEach(cls => {
      if (cls.startsWith("language-")) {
        code.classList.remove(cls);
      }
    });
    // remove attribute "data-highlighted":
    code.removeAttribute("data-highlighted");
  }
  // Switch and highlight a language
  function switchLanguage(lang) {
    if (!codeSnippets[lang]) lang = "cpp"; // fallback if invalid

    // Update tab highlight
    setActiveTab(lang);

    unhighlightElement(code);
    code.className = `language-${lang}`;
    code.textContent = codeSnippets[lang];

    const scriptPath = `highlighters/c_rust_highlight/languages/${lang}.min.js`;

    if (loadedLangs.has(lang)) {
      hljs.highlightElement(code);
      return;
    }

    const script = document.createElement('script');
    script.src = scriptPath;
    script.onload = function() {
      loadedLangs.add(lang);
      hljs.highlightElement(code);
    };
    script.onerror = function() {
      console.error(`Cannot load the script at ${scriptPath}`);
    };
    document.body.appendChild(script);
  }

  // Load default from cookie on page load
  let langFromCookie = cliplang || "cpp";
  switchLanguage(langFromCookie);

  document.querySelectorAll('#languageTabs div').forEach(div => {
    div.addEventListener('click', function() {
      const lang = div.dataset.lang;
      switchLanguage(lang);
      // Save to the cookie for the next time:
      cliplang = lang;
    });
  });
}
// End load C or Rust Example

// Hex converter program in fake (pseudo) document

let inputThing = get_element_id("input_thing");

await fetch("./jsonfiles/inthex.json")
.then(r => { 
  if (!r.ok) throw new Error("Could not fetch resource from inthex.json");
  return r.json()
})
.then(data => globalThis.dict = data.int2hex)
.catch(error => console.error(error));


class Converter {

  constructor(number) {
    this.number = Number(number);
  }

  Int2Hex() {
    /* Int to Hex */
    // Fetch resource
    if (this.number === -1)
      return `The greatest number computer can perform.`
    else if (this.number in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) return `0x0${this.number}`;
    else if (this.number < -1)
      return `0xfff...fff minus ${this.number * (-1)}`

    // Convert int to hex
    let x = Array();
    while (this.number > 0)
    {
      let remainder = this.number % 16;
      x.splice(0, 0, dict[`${remainder}`]);

      this.number = (this.number - remainder) / 16
    }
    if (x.length === 1) return `0x0${x.join('')}`;
    else return `0x${x.join('')}`;
  }

}


inputThing?.addEventListener("input", function(event) {
  let inputThing = event.target.value;
  get_element_id("inputlen").textContent = `${inputThing.length}`;
  let cv = new Converter(inputThing);
  let outputThing = get_element_id("output_thing");
  if (inputThing == "") outputThing.textContent = "";
  else outputThing.textContent = `${cv.Int2Hex()}`;
});
