


let text = "¡Hi my name es Emmanuel!";
let i = 0;

function writeText() {
  document.getElementById("typing").innerHTML = text.slice(0, i);
  i++;
  if (i > text.length) {
    i = 0;
  }
}
setInterval(writeText, 150);

let github = document.getElementById("github");
let linkedin = document.getElementById("linkedin");

github.addEventListener("click", () => {
  window.open("https://github.com/Mane087", "_blank");
});

linkedin.addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/in/jesús-emmanuel-alaniz-mancilla-430991261/",
    "_blank"
  );
});

let button_download = document.querySelector(".download-button");
button_download.addEventListener("click", () => {
    let pdfURL = "docs/CV Jesus Emmanuel Alaniz Mancilla.pdf";
    
    // Nombre de archivo para descarga
    let fileName = "CV_Jesús_Emmanuel_Alaniz_Mancilla.pdf";
    
    
    let downloadLink = document.createElement("a");
    downloadLink.href = pdfURL;
    downloadLink.download = fileName;
    
    
    downloadLink.click();
});


const formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formulario);
    const message = formData.get("message");
    const subject = 'Contacto desde mi portafolio';

    
    const mailtoUrl = `mailto:manealaniz95@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    // Redirigir al usuario a la URL del correo electrónico
    window.location.href = mailtoUrl;
   
});