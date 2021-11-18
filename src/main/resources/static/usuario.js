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

    fetch("http://localhost:8080/ble", cabecalho)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("logado",JSON.stringify(res));
            window.location="index.html";
        })
        .catch(err => {
            window.alert("Deu ruim");
        });
    

}