

const validateInput = (element) => {
    
}

onMount(() => {
    $(".input-control input", (element, index) => {
        element.addEventListener("change", (ev) => validateInput(element));
    });

});

