const main_div = document.querySelector('.container'),
queryInput = document.querySelector(".form input"),
queryImage = document.querySelector(".QR-code img"),
generateBtn = document.querySelector(".form button");

generateBtn.addEventListener("click",()=>{
    let queryValue = queryInput.value;
    console.log(queryInput.value);

    if(!queryValue)
        return;

    generateBtn.innerHTML= "Generating QR Code .....";    
    queryImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${queryValue}";     

    // If the input box is empty then return without adding the class

    queryImage.addEventListener("load",()=>{
        generateBtn.innerHTML= "Generate QR code"; 
        main_div.classList.add('active');
    });
    
});

// lets remove the active class from the container if the Input field is empty 

queryInput.addEventListener("keyup",()=>{
    if(!queryInput.value){
        main_div.classList.remove('active');
    }
});