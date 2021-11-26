function atualizar(){
   
	if(document.getElementById("inputName").value == "" || document.getElementById("inputQuant").value == ""){
		return;
	}
	
	if(document.getElementById("inputImg").value == ""){
		document.getElementById("inputImg").value = "https://gartic.com.br/imgs/mural/ma/master18_/xinforinfola.png";
	}
	
    var objeto = {
		"id" : document.getElementById("inputId").value,
        "nome" : document.getElementById("inputName").value,
        "quantidade" : document.getElementById("inputQuant").value,
        "urlImg" : document.getElementById("inputImg").value
    }	

	console.log(objeto)

    var cabecalho = {
        method: "PUT",
        body: JSON.stringify(objeto),
        headers:{
            "Content-type":"application/json"
        }
    }

    fetch("http://localhost:8090/atualizar", cabecalho)
        .then(res => res.json())
        .then(res => {
			console.log(res);
            localStorage.setItem("logado",JSON.stringify(res));
            window.location="../index";
        })
        .catch(err => {
			console.log(err);
            window.alert("Deu ruim");
        });
}