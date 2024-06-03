
let input = document.getElementById("email-btn");

let confirmed_address = document.getElementById("confirmed_address");

let submit_btn = document.querySelector(".submit_btn");

let login_page = document.querySelector(".login-page");

let error_warning = document.getElementById("error-warning") 

let close_icon = document.getElementById("close-icon") 

let login_password = document.getElementById("login_password") 

let sign_in = document.getElementById("sign_in") 

let valid_password = "billa"



console.log(input , submit_btn, error_warning , login_page )




submit_btn.addEventListener("click", function() {


});


// i want that when i click on submit btn it check input value if it has correct regex value for email address then 
// login_page display get display flex and error warning display get display none if not then error warning display get display flex and login_page display get display none


function emailIsValid(email) {
    // Regular expression for email validation
    const regexEmail = /^[a-zA-Z0-9]+[0-9]+@gmail\.com$/
    ;
    return regexEmail.test(email);
}
submit_btn.addEventListener("click", function() {
    const emailInput = input.value.trim(); // Get the email input value

    if (emailIsValid(emailInput)) {
        // Valid email: Show login page and hide error warning
        login_page.style.display = "flex";
        error_warning.style.display = "none";
        confirmed_address.value = emailInput;
    } else {
        // Invalid email: Show error warning and hide login page
        login_page.style.display = "none";
        error_warning.style.display = "flex";
    }
});




close_icon.addEventListener("click" , function(){
    login_page.style.display = "none";

})



sign_in.addEventListener("click", function() {

    const password = login_password.value; // Get the email input value

     if(password == valid_password){
        console.log(password)
        window.location.href = "home.html";

     }
     else{
        console.log("wrong password")
     }
    

})
