let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")

function GenerateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img")

        setTimeout(() => {
            alert("QR code generated successfully")
        }, 2000);

    }

    else {
        let remove1 = document.getElementById("error1")

        remove1.innerHTML = "*Please enter text";
        remove1.style.color = "red";
        setTimeout(() => {
            remove1.innerHTML = ""
        }, 2000);
    }
}