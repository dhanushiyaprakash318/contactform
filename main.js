const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

//form validation
document.addEventListener("DOMContentLoaded",function(){
    const form=document.querySelector("#contactForm");
    form.addEventListener("submit",function(e){
        e.preventDefault();


        const name=document.getElementById("name").value.trim();
        const email=document.getElementById("email").value.trim();
        const phone=document.getElementById("phone").value.trim();
        const message=document.getElementById("message").value.trim();
        const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
        const phonePattern=/^[0-9\s\-\+\(\)]{7,15}$/;


        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            return;
        }
        if(!emailPattern.test(email)){
            alert("Please enter a valid email address.");
            return;
        }
        if(phone && !phonePattern.test(phone)){
            alert("Please enter a valid phone number.");
            return;
        }
        alert("Form submitted successfully!");
        form.submit(); 

    });
});


