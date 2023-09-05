const validateInput = (element, index, query) => {
    const errorText = element.parentNode.nextElementSibling;
    const type = element.type;
    let errors = "";
    if (type === "text") {
        errors = required(element.value, `${element.placeholder ?? "this field"} is required`);
    } else if (type == "email") {
        errors = required(element.value, `${element.placeholder ?? "this field"} is required`)
        if (errors === "")
            errors = email(element.value, "invalid email address");
    } else if (type === "password") {
        let next = query[++index];
        if (next === undefined) {
            next = query[--index]
        } else {
            if (next.type === undefined)
                next = query[--index]
        }


        let error2 = required(next.value, `${next.placeholder ?? "this field"} is required`);
        if (error2 == "")
            error2 = same(element.value, next.value, `${next.placeholder ?? "this field"} mismatch`);

        const errorText2 = next.parentNode.nextElementSibling;

        if (error2 !== "") {
            errorText2.innerHTML = error2;
            errorText2.classList.remove("error_text");
            errorText2.classList.add("error_text-shown");
        } else {
            errorText2.innerHTML = "";
            errorText2.classList.add("error_text");
            errorText2.classList.remove("error_text-shown");
        }



        errors = required(element.value, `${element.placeholder ?? "this field"} is required`);
        if (errors == "")
            errors = min(element.value, 5, `${element.placeholder ?? "this field"} must be at least 5 characters`)
    }
    else {
        errors = required(element.value, `${element.placeholder ?? "this field"} is required`);
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
    $(".login input, .login select", (element, index, query) => {
        element.addEventListener("keydown", (ev) => validateInput(element, index, query));
    });

    $(`button[type*="submit"]`, (element) => {
        element.addEventListener("click", (ev) => {
            ev.preventDefault();
            $(".login input, .login select", (element, index, query) => {
                validateInput(element, index, query);
            });
            return false;
        });



    });


});