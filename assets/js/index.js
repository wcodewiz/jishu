
const onMount = (callback) => document.body.onload = callback;

function $(selector, callback) {
    let query = document.querySelectorAll(`${selector}`);
    query.forEach((element, index, query) => callback(element, index, query));
    return true;
}
const $one = (selector) => document.querySelector(`${selector}`);


const required = (value, message) => value === "" ? message : "";
const max = (value, range, message) => `${value}`.length > range ? message : "";
const min = (value, range, message) => `${value}`.length < range ? message : "";
const same = (value1, value2, message) => value1 !== value2 ? message : "";
const email = (value, message) => /^[A-Za-z0-9]{3,}\@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{2,}$/g.test(`${value}`) ? "" : message