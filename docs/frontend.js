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
cpclipbd.forEach((btn) => {
  btn.addEventListener("click", () => {
    const code = document.querySelectorAll(".codeblock").textContent;
    let cpresult = navigator.clipboard.writeText(code);
    cpresult.then(() => window.alert("Copied")).catch(() => alert("Error while copying"));
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

// Load C or Rust?
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

