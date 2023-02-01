const navSlide = () => {
    const burger= document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');

    
    //toggle nav 
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');


   //animate links
   navLinks.forEach((link, index)=>{
    
        link.style.animation='navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
    
    
    });
     //burger animation
     burger.classList.toggle('toggle');
 });
 
}
 navSlide();


function Login() {
    var regexEmail=document.querySelector('#email').value;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var password = document.querySelector('#password').value;
    var passwordLength = (password.length < 8 || password.length > 20);
    var passwordIncludesUppercase = /[A-Z]/.test(password); 

    if(!regexEmail.test(email)){
        alert("Write another email!");
    }
    else if(password==null || password==""){
        alert("Please enter password!");
    }
    else if (passwordLength){
        alert(" The password should be within 8 to 20 characters.");
    }
    else if (!passwordIncludesUppercase) {
        alert("The password should contain at least one uppercase character.");
    } 
    else{
        alert("Login Successfully");
        
    }
}
Login();


function Register(){
    var name = document.querySelector('#name').value;
    var firstLetter = name[0];
    var firstLetterIsUpperCase = (firstLetter === firstLetter.toUpperCase());
    var regexEmail=document.querySelector('#email').value;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var password1 = document.querySelector('#password').value;
    var password2=document.querySelector('#cpassword').value;
    var passwordLength = (password.length < 8 || password.length > 20);
    var passwordIncludesUppercase = /[A-Z]/.test(password); 

    if(name==null || name==""){
        alert("Please provide your full username!");
    }
    else if (!firstLetterIsUpperCase) {
        alert(" The first letter of name must be uppercase.");
     }
    else if(!regexEmail.test(email)){
         alert("Write another email!");
     }
     else if(password1==null || password1=="" ){
        alert("Please enter password!");
    }
    else if (passwordLength){
        alert(" The password should be within 8 to 20 characters.");
    }
    else if (!passwordIncludesUppercase) {
        alert("The password should contain at least one uppercase character.");
    } 
    else if (password1 !== password2) {
        alert("The passwords do not match.");
    }
    else{
        alert("Login Successfully");
     
    }
    
}
Register();