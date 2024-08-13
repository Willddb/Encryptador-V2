document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('outputText').value = decryptedText;
});

document.getElementById('cleanBtn').addEventListener('click', function() {
    const clean = "";
    const output = textoInicial();
    document.getElementById('inputText').value = clean;
    document.getElementById('outputText').value = output;
});

function encryptText(text) {
    let result = '';
    for (let char of text) {
        switch (char) {
            case 'a':
                result += 'ai';
                break;
            case 'e':
                result += 'enter';
                break;
            case 'i':
                result += 'imes';
                break;
            case 'o':
                result += 'ober';
                break;
            case 'u':
                result += 'ufat';
                break;
            default:
                result += char;
        }
    }
    return result;
}

function decryptText(text) {
    return text.replace(/ufat/g, 'u')
               .replace(/ober/g, 'o')
               .replace(/imes/g, 'i')
               .replace(/enter/g, 'e')
               .replace(/ai/g, 'a');
}

function textoInicial(){
    return "Ningun mensaje fue encontrado";
}




