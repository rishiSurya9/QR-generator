const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');
const imageUpload = document.getElementById('image-upload');

let size = sizes.value;

// Event Listener for Generate Button
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if (qrText.value.length > 0) {
        generateQRCode(qrText.value);
    } else if (imageUpload.files.length > 0) {
        generateQRCodeForImage(imageUpload.files[0]);
    } else {
        alert("Please enter text or upload an image to generate your QR code");
    }
});

// Update size based on selection
sizes.addEventListener('change',(e)=>{
    size = e.target.value;
});

// Download QR Code
downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');
    if(img !== null){
        let imgSrc = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgSrc);
    } else {
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

// Function to generate QR code for text/URL
function generateQRCode(text){
    qrContainer.innerHTML = "";  // Clear the container
    new QRCode(qrContainer, {
        text: text,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}

