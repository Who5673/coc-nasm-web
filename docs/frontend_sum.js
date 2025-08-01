import { loadWasm } from "./sum.js";

loadWasm().then(instance => {
  const sum = instance.exports.sum;
  const result = sum(15, 60);
  console.log(result);
});