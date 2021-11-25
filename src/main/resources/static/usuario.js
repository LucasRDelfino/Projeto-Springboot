
var id;
function logar(){
    var objeto = {
        "email" : document.getElementById("txtemail").value,
        "senha" : document.getElementById("txtsenha").value
    }

    var cabecalho = {
        method: "POST",
        body: JSON.stringify(objeto),
        headers:{
            "Content-type":"application/json"
        }
    }

    fetch("http://localhost:8090/login", cabecalho)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("logado",JSON.stringify(res));
                      //window.location="index";
			id = document.getElementById("id").innerText = res.id
			document.getElementById("id").innerText = res.id
			document.getElementById("nome").innerText = res.nome
			document.getElementById("senha").innerText = res.senha
			document.getElementById("email").innerText = res.email
        })
        .catch(err => {
            window.alert("Deu ruim");
        });
    

}


function deletar(){
    var objeto = {
        "id" : id
    }

    var cabecalho = {
        method: "POST",
        body: JSON.stringify(objeto),
        headers:{
            "Content-type":"application/json"
        }
    }
    fetch("http://localhost:8090/remover/", cabecalho)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("logado",JSON.stringify(res));
            window.location="index";
        })
        .catch(err => {
            window.alert("Deu ruim");
        });
   

}