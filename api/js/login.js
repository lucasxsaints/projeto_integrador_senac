const http = axios.create({
    baseURL: "http://localhost:3000",
});


async function login() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    // if (nome == "Projeto" && senha == "abc") {
    //     alert("Sucesso!");
    //     location.href = "index.html";
    // } else {
    //     alert("Usuário ou senha incorretos");
    // }

    await http.post("/usuario/login", { email: nome, password: senha })
        .then(res => {
            console.log(res);
            let user = JSON.stringify(res.data);
            sessionStorage.setItem("user", user);
            location.replace("index.html");
        })
        .catch(error => {
            console.log(error);
            sessionStorage.removeItem("user");
        });
}

