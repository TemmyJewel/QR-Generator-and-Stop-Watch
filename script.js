const qrtext = document.getElementById("text");
const generatebtn = document.getElementById("generatebtn");
const qrCode = document.getElementById("qrCode");
const imgBox = document.getElementById("imgBox")

generatebtn.addEventListener("click", ()=>{
   if(qrtext.value.length > 0){
    qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    imgBox.classList.add("show-img");
    
   }else{
        qrtext.classList.add("error");
        setTimeout(()=>{
            qrtext.classList.remove('error');
        }, 1000);
   }
    
});


