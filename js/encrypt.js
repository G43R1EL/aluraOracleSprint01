// Esta funcion recibe una cadena como parametro y la encripta reemplazando las vocales de la siguiente forma:
// a -> ai
// e -> enter
// i -> imes
// o -> ober
// u -> ufat

function encrypt(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
                newStr += "ai";
                break;
            case "e":
                newStr += "enter";
                break;
            case "i":
                newStr += "imes";
                break;
            case "o":
                newStr += "ober";
                break;
            case "u":
                newStr += "ufat";
                break;
            default:
                newStr += str[i];
                break;
        }
    }
    return newStr;
}

// Esta funcion recibe una cadena como parametro y la desencripta reemplazando las vocales de la siguiente forma:
// ai -> a
// enter -> e
// imes -> i
// ober -> o
// ufat -> u

function decrypt(str) {
    let newStr = "";
    newStr = str.replace(/ai/g, "a");
    newStr = newStr.replace(/enter/g, "e");
    newStr = newStr.replace(/imes/g, "i");
    newStr = newStr.replace(/ober/g, "o");
    newStr = newStr.replace(/ufat/g, "u");
    return newStr;
}

// Funciones de la interfaz
function encryptText() {
    outputText.innerText = encrypt(inputText.value);
    checkEmpty();
}

function decryptText() {
    outputText.innerText = decrypt(inputText.value);
    checkEmpty();
}

function checkEmpty() {
    if (inputText.value === "") {
        noInput.forEach(element => {
            element.classList.remove("invisible");
        });
        copyBtn.classList.add("invisible");
    } else {
        noInput.forEach(element => {
            element.classList.add("invisible");
        });
        copyBtn.classList.remove("invisible");
    }
}

// Copia el contenido de outputText al portapapeles
function copyText() {
    navigator.clipboard.writeText(outputText.innerText);
}

// Funcion para que solo se puedan escribir letras minusculas
// se permiten espacios, numeros y caracteres especiales
// no se permiten acentos
function onlyLower() {
    inputText.value = inputText.value.toLowerCase();
    inputText.value = inputText.value.replace(/[^a-z0-9.,;:-_¡!¿?#$\s]/gi, "");
}

// Funcion para configurar los botones de la pagina
function settingBehavior() {
    encryptBtn.addEventListener("click", encryptText);
    decryptBtn.addEventListener("click", decryptText);
    copyBtn.addEventListener("click", copyText);
    inputText.addEventListener("keyup", onlyLower);
}

// Generales
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const copyBtn = document.getElementById("copyBtn");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const noInput = document.querySelectorAll(".container__output--noinput");

settingBehavior();