use wasm_bindgen::prelude::*;
use web_sys::{window, Document, Element};

#[wasm_bindgen]
pub fn returnformat(a: String) -> String {
    a
}

#[wasm_bindgen]
pub fn get_element_id(id:&str) -> Element {
    // document:
    let document: Document = window().unwrap().document().unwrap();
    // element:
    let element: Element = document.get_element_by_id(id).unwrap();
    // Initialize textContent:
    element
}