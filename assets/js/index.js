
const onMount = (callback) => document.body.onload = callback;

function $(selector, callback) {
    let query = document.querySelectorAll(`${selector}`);
    query.forEach((element, index) => callback(element, index));
    return true;
}
const $one = (selector) => document.querySelector(`${selector}`);


const required = (value, message) => value === "" ? message : "";
const email = (value, message) => /^[A-Za-z0-9]{3,}\@[a-zA-Z0-9]{1,}\.[a-zA-Z0-9]{2,}$/g.test(value) ? "" : message