

const validateInput = (element) => {
    alert(element.value)
}

onMount(() => {
    $(".input-control input, .input-control select", (element, index) => {
        element.addEventListener("change", (ev) => validateInput(element));
    });

});

