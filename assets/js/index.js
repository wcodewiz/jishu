
const onMount = (callback) => document.body.onload = callback;

function $(selector, callback) {
    let query = document.querySelectorAll(`${selector}`);
    query.forEach((element, index) => callback(element, index));
    return true;
}
const $one = (selector) => document.querySelector(`${selector}`);

