import { marked } from "./node_modules/marked/lib/marked.esm.js";
import init, { returnformat, get_element_id } from "/docs/rust-wasm/my_wasm_project.js";

await init();
// JS Clipboard
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

const parse_md = get_element_id("parse_md");
let md_reader = get_element_id(returnformat("md_reader"));

parse_md.addEventListener("click", function() {
  let text = md_reader.value.trim();
  const md_result = get_element_id(returnformat("md_result"));
  md_result.innerHTML = marked.parse(`${text}`);
});

parse_md.dispatchEvent(new Event("click"));