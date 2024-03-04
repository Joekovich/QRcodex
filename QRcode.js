function generateQR() {
    document.querySelector("#qr-Image").style.display = "block";
    let QRtext = document.querySelector("#text").value;
    if(QRtext.trim().length == 0) {
        document.querySelector("#qr-image .error").innerHTML = "please enter text";
        document.querySelector("#img").style.display = "none";
    } else {
        document.querySelector("#img").style.display = "block";
        document.querySelector("#qr-image .error").innerHTML = "";
        document.querySelector("#img").src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + QRtext;
    }
}