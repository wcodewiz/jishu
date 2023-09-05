
const validateInput = (element) => {
    console.log(element.value)
}

onMount(() => {
    $(".login input", (element, index) => {
        element.addEventListener("change", (ev) => validateInput(element));
    });

});
