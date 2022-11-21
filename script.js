
//permite obter um elemento do documento a partir de seu atributo ID especificado

function salvar(){
    localStorage.info = document.getElementById("dado").value;
    document.getElementById("dado").value = "";
}

function carregar(){
    document.getElementById("dado").value = localStorage.info;
}

function salvar2(){
    localStorage.setItem("nome",document.getElementById("dado").value);
    document.getElementById("dado").value = "";
}

function carregar2(){
    document.getElementById("texto").innerHTML = localStorage.getItem("nome");
}

function apagar(){
    localStorage.removeItem("info");
    localStorage.removeItem("nome");
}

