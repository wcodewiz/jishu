
const validateInput = (element) => {
    alert(element.value)
}

onMount(() => {
    $(".login input", (element, index) => {
        element.addEventListener("change", (ev) => validateInput(element));
    });

});
