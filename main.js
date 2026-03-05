// AOS Animation
AOS.init({
    offset: 150, duration: 1200, 
});

// login window
const LoginBtn = document.getElementById("login-btn");
const closeLogin = document.getElementById("closeLogin");
const LoginWindow = document.getElementById("loginWindow");
const body = document.querySelector("body");

const emailField = document.getElementById("emailField");
const passwField = document.getElementById("passwField");

const login = document.getElementById("loginBtn");

const loginFields = document.querySelectorAll(".login-Fields");
login.addEventListener("click", () => {
    loginFields.forEach((loginField) => {
        if(loginField.value === ""){
            loginField.classList.add("error");
        } else{
            loginField.classList.remove("error");
        }
    });

    if(!emailField.value.includes("@")){ 
        emailField.classList.add("error");
    } else{
        emailField.classList.remove("error");
    }
});

let signUpFields = document.querySelectorAll(".signUp-Field");
LoginBtn.addEventListener("click", function(){
    LoginWindow.classList.toggle("WindowManage");
    signUpWindow.classList.remove("WindowManage");
    buyWindow.classList.remove("WindowManage");
    body.classList.add("bodyBlur");

    signUpFields.forEach((signUpField) => {
        signUpField.classList.remove("error");
        signUpField.value = "";
    });
});

closeLogin.addEventListener("click", function(){
    LoginWindow.classList.toggle("WindowManage");
    body.classList.remove("bodyBlur");
    emailField.value = "";
    passwField.value = "";
    passwField.classList.remove("error");
    emailField.classList.remove("error");
});

// SIGNUP WINDOW
const signUpOpener = document.getElementById("signUpOpener");
const loginOpener = document.getElementById("loginOpener");

const signUpWindow = document.getElementById("signUpWindow");
const closeSignUp = document.getElementById("closeSignUp");

const nameField = document.getElementById("name");
const emailField2 = document.getElementById("emailField2");

const passw1Filed = document.getElementById("passw1Field");
const passw2Filed = document.getElementById("passw2Field");

const createAccBtn = document.getElementById("SignUp");

signUpOpener.addEventListener("click", () => {
    LoginWindow.classList.remove("WindowManage");
    signUpWindow.classList.add("WindowManage");

    signUpFields.forEach((signUpField) => {
        signUpField.classList.remove("error");
        signUpField.value = "";
    })
});

loginOpener.addEventListener("click", () => {
    LoginWindow.classList.add("WindowManage");
    signUpWindow.classList.remove("WindowManage");

    loginFields.forEach((loginField => {
        loginField.classList.remove("error");
        loginField.value = "";
    }))
});

closeSignUp.addEventListener("click", () => {
    signUpWindow.classList.remove("WindowManage");
    body.classList.remove("bodyBlur");
    signUpFields.forEach((signUpField) => {
        signUpField.classList.remove("error");
        signUpField.value = "";
    });
});

createAccBtn.addEventListener("click", () => {
    if(!emailField2.value.includes("@")){
        emailField2.classList.add("error");
    } else{
        emailField2.classList.remove("error");
    }

    if(/\d/.test(nameField.value)){
        nameField.classList.add("error");
    } else{
        nameField.classList.remove("error");
    }

    if(!(passw1Filed.value === passw2Filed.value)){
        passw1Filed.classList.add("error");
        passw2Filed.classList.add("error");
    } else{
        passw1Filed.classList.remove("error");
        passw2Filed.classList.remove("error");
    }

    signUpFields.forEach((signUpField) => {
        if(signUpField.value === ""){
            signUpField.classList.add("error");
        } 
    });
});

// BUY-WINDOW
const buyWindow = document.getElementById("buy-box");
const openBuyes = document.querySelectorAll(".buy-manga");

const buyFields = document.querySelectorAll(".buyField");
const makeOrder = document.getElementById("buy-button");

const closeBuy = document.getElementById("closeBuy");

let userMangaText = document.getElementById("user-manga");

const mangaBooks = {
    manga1: "Code Geass",
    manga2: "Death Note",
    manga3: "Atack On Titan",
    manga4: "Bleach",
    manga5: "Berserk",
    manga6: "Naruto"
};

openBuyes.forEach((openBuy, index) => {
    openBuy.addEventListener("click", () => {
        buyWindow.classList.add("WindowManage");
        body.classList.add("bodyBlur");

        LoginWindow.classList.remove("WindowManage");
        signUpWindow.classList.remove("WindowManage");
        let currentIndex = index+1;
        userMangaText.textContent = mangaBooks["manga" + currentIndex];
    });
});

closeBuy.addEventListener("click", () => {
    buyWindow.classList.remove("WindowManage");
    body.classList.remove("bodyBlur");

    buyFields.forEach((buyField) => {
        buyField.classList.remove("error");
        buyField.value = "";
        amountText.value = "";
    })
})


let amountText = document.getElementById("manga-amount");
let amountField = document.getElementById("amount");

amountField.addEventListener("blur", () => {
    let amount = amountField.value;

    try{
        if(amount === "" || isNaN(amount) || Number(amount) < 0){
            throw "Invalid Input";
        } 

        amountText.textContent = amount;
    } catch(error){
        amountText.textContent = "0";
        alert("Please Enter a valid amount.");
    }
});

makeOrder.addEventListener("click", () => {
    buyFields.forEach((buyField) => {
        if(buyField.value === ""){
            buyField.classList.add("error");
        } else{
            buyField.classList.remove("error");
        }
    });
})
