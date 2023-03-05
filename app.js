const url = "http://media.featherbase.info/images/images/eichelhaeher01-2.jpg";

const response =  fetch(url);
const text =  response.text();

console.log(text);