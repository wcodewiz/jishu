
const validateInput = (element) => {
    const errorText = element.parentNode.nextElementSibling;
    
    const type = element.type;
    let errors = "";
    if (type === "email") {
        errors = required(element.value, `${element.placeholder ?? "this field"} is required`);
    }else if (type == "password") {
        errors = required(element.value, `${element.placeholder ?? "this field"} is required`)
        if (errors === ""){
            errors = email(element.value, "invalid email address");
    } else {
        errors = required(element.value, `${element.placeholder ?? "this field"} is required`);
    }
}
    if (errors !== "") {
        errorText.innerHTML = errors;
        errorText.classList.remove("error_text");
        errorText.classList.add("error_text-shown");
    } else {
        errorText.innerHTML = "";
        errorText.classList.add("error_text");
        errorText.classList.remove("error_text-shown");
    }
}

onMount(() => {
    $(".login input", (element, index) => {
        element.addEventListener("keydown", (ev) => validateInput(element));
    });

});
