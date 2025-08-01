import { loadWasmSignedDiv } from "./signed_div.js";

loadWasmSignedDiv().then(instance => {
    const signed_div = instance.exports.signed_div;
    const result = signed_div(-15, 3);
    console.log(result)
})