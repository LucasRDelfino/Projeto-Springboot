function logar(){
    var objeto = {
		"nome" : document.getElementById("nome").value,
        "email" : document.getElementById("email").value,
        "senha" : document.getElementById("senha").value
    }

    var cabecalho = {
        method: "POST",
        body: JSON.stringify(objeto),
        headers:{
            "Content-type":"application/json"
        }
    }

    fetch("http://localhost:8090/novousuario", cabecalho)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("logado",JSON.stringify(res));
            window.location="cadastro";
        })
        .catch(err => {
            window.alert("Deu ruim");
        });
    

}/**
 * 
 */