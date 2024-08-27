

function filtrarTexto() {
    const input = document.getElementById('texto');
    let texto = input.value;

    // Remover acentos y convertir a minúsculas
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    // Reemplazar el valor del input con el texto filtrado
    input.value = texto;
}

function ajustarAltura(element) {
    element.style.height = 'auto'; // Resetea la altura
    element.style.height = (element.scrollHeight) + 'px'; // Ajusta la altura al contenido
}

function encriptar(texto){
    let cont=0;
    let arreglo=texto.split("");
    arreglo.forEach(letra => {
        switch(letra){
            case 'a':
                arreglo.splice(cont,1,'ai');
                break;
            case 'e':
                arreglo.splice(cont,1,'enter');
                break;
            case 'i':
                arreglo.splice(cont,1,'imes');
                break;
            case 'o':
                arreglo.splice(cont,1,'ober');
                break;
            case 'u':
                arreglo.splice(cont,1,'ufat');
                break;
        }
    cont++;
    })
    return arreglo.join("");
}

function funcion_encriptar(){
    let texto = document.getElementById('texto').value;
    let texto_encriptado = encriptar(texto);
    window.location.href = "encriptar.html?texto=" + encodeURIComponent(texto_encriptado);
    return;
}

function desencriptar(texto){
    let cont=0;
    let arreglo=texto.split("");
    arreglo.forEach(letra => {
        switch(letra){
            case 'a':
                if(arreglo[cont+1] === 'i'){
                    arreglo.splice(cont+1,1);
                }
                break;
            case 'e':
                if(arreglo[cont+1] === 'n' && arreglo[cont+2] === 't' && arreglo[cont+3] === 'e' && arreglo[cont+4] === 'r'){
                    arreglo.splice(cont+1,4);
                }
                break;
            case 'i':
                if(arreglo[cont+1] === 'm' && arreglo[cont+2] === 'e' && arreglo[cont+3] === 's'){
                    arreglo.splice(cont+1,3);
                }
                break;
            case 'o':
                if(arreglo[cont+1] === 'b' && arreglo[cont+2] === 'e' && arreglo[cont+3] === 'r'){
                    arreglo.splice(cont+1,3);
                }
                break;
            case 'u':
                if(arreglo[cont+1] === 'f' && arreglo[cont+2] === 'a' && arreglo[cont+3] === 't'){
                    arreglo.splice(cont+1,3);
                }
                break;
        }
    cont++;
    })
    return arreglo.join("");
}

function funcion_desencriptar(){
    let texto = document.getElementById('texto').value;
    let texto_desencriptado = desencriptar(texto);
    window.location.href = "encriptar.html?texto=" + encodeURIComponent(texto_desencriptado);
    return;
}

function mostrarTextoEncriptado_Desencriptado() {
    const params = new URLSearchParams(window.location.search);
    const textoEncriptado_Desencriptado = params.get('texto');

    if (textoEncriptado_Desencriptado) {
        document.getElementById('parrafo_encriptado').textContent = textoEncriptado_Desencriptado;
    }
}

function copiarTexto() {
    // Seleccionar el elemento <p> usando su id
    const parrafo = document.getElementById('parrafo_encriptado');
    
    // Copiar el contenido al portapapeles
    navigator.clipboard.writeText(parrafo.textContent)
        .then(() => {
            console.log('Texto copiado al portapapeles');
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar texto: ', err);
        });
}

// Ejecutar la función correcta dependiendo de la página
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('encriptar.html')) {
        mostrarTextoEncriptado_Desencriptado();
    }
});