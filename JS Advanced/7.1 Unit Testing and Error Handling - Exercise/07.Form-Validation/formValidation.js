function validate() {
    const userNameRef = document.getElementById(`username`);
    const emailRef = document.getElementById(`email`);
    const passwordRef = document.getElementById(`password`);
    const confirmPasswordRef = document.getElementById(`confirm-password`);
    const submitBtnRef = document.getElementById(`submit`);
    const checkBoxRef = document.getElementById(`company`);
    const companyInfoRef = document.getElementById(`companyInfo`);
    const validRef = document.getElementById(`valid`);
    const companyNumberRef = document.getElementById(`companyNumber`);

    submitBtnRef.addEventListener(`click`, onClickHandler);

    document.querySelector("#company").addEventListener("change", onChangeHandler)
    
    function onChangeHandler() {
        if (checkBoxRef.checked) {
            companyInfoRef.style.display = "block";
        } else {
            companyInfoRef.style.display = "none";
        }
    }

    let userNameValidator = /\b[A-Za-z0-9]{3,20}\b/g;
    let passwordValidator = /^[\w]{5,15}$/g;
    let emailValidator = /^[^@.]+@[^@]*\.[^@]*$/g;

    function onClickHandler(event) {
        isValid = true;
        //UserName
        let userNameText = userNameRef.value;
        let userNameMatch = userNameText.match(userNameValidator);
        if (!userNameMatch) {
            userNameRef.style.borderColor = "red";
            isValid = false;
        } else {
            userNameRef.style.border = "none";
        }

        //Password
        let password = passwordRef.value;
        let passMatch = password.match(passwordValidator);

        if (!passMatch) {
            passwordRef.style.borderColor = "red";
            isValid = false;
        } else {
            passwordRef.style.border = "none";
        }

        //Confirm password
        let isConfirmed = false;
        if (confirmPasswordRef.value != passMatch) {
            confirmPasswordRef.style.borderColor = "red";
            isValid = false;
        } else {
            confirmPasswordRef.style.border = "none";
            isConfirmed = true;
        }

        //Email
        let email = emailRef.value;
        let emailMatch = email.match(emailValidator);

        if (!emailMatch) {
            emailRef.style.borderColor = "red";
            isValid = false;
        } else {
            emailRef.style.border = "none";
        }

        //CompanyInfo
        let companyNumberValue = Number(companyNumberRef.value);

            if (checkBoxRef.checked) {
                companyInfoRef.style.display = "block"
    
                if (!(companyNumberValue >= 1000 && companyNumberValue <= 9999)) {
                    companyNumberRef.style.borderColor = "red";
                    isValid = false;
                } else {
                    companyNumberRef.style.border = "none";
                }
    
            } else {
                companyInfoRef.style.display = "none"
            }

        //Valid
        if (!checkBoxRef.checked) {
            if (isValid) {
                validRef.style.display = "block";
            }

        } else {
            if (isValid) {
                validRef.style.display = "block";
            }
        }

        event.preventDefault()
    }

}
