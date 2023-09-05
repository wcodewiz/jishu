




const validateInput = (element) => {
    alert(element.value)
}

onMount(() => {
    $(".input-control input, .input-control select", (element, index) => {
        element.addEventListener("keydown", (ev) => validateInput(element));
    });

});


