import { marked } from "./node_modules/marked/lib/marked.esm.js";
import init, { returnformat } from "/docs/rust-wasm/my_wasm_project.js";

function get_element_id(id)
{
  return document.getElementById(id);
}

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

// Menu close button
get_element_id(returnformat("closemenu")).addEventListener("click", function() {
  document.querySelector("nav").classList.add("hide");
  document.querySelector("nav").classList.remove("show");
  get_element_id("openmenu").classList.remove("show");
  document.querySelector("main").classList.remove("show");
});
// Menu open button
get_element_id(returnformat("openmenu")).addEventListener("click", function() {
  document.querySelector("nav").classList.add("show");
  document.querySelector("nav").classList.remove("hide");
  document.querySelector("main").classList.add("show");
  get_element_id("openmenu").classList.add("show");
});
let xy = get_element_id(returnformat("closemenu"));
xy.textContent = "<<";


get_element_id("md-input").addEventListener("input", function(event) {
  let text = event.target.value.trim();
  const md_result = get_element_id(returnformat("md-output"));
  md_result.innerHTML = marked.parse(`${text}`);
});

//parse_md.dispatchEvent(new Event("click"));