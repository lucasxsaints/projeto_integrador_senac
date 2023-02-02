const http = axios.create({
    baseURL: "http://localhost:3000",
});


async function login() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    await http.post("/usuario/login", { email: nome, password: senha })
        .then(res => {
            console.log(res);
            let user = JSON.stringify(res.data);
            sessionStorage.setItem("user", user);
            location.replace("/pages/encomendaBusca.html");
        })
        .catch(error => {
            console.log(error);
            sessionStorage.removeItem("user");
        });

}
async function cadastroUsuario(usuario) {
    await http.post("/usuario/add", {
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha,
        telefone: usuario.telefone,
        apartamento: usuario.apartamento,
        bloco: usuario.bloco,
        andar: usuario.andar
    })
        .then(res => {
            console.log(res);
            alert("Cadastrado!");
        })
        .catch(error => {
            console.log(error);
            alert("Erro ao cadastrar!");
        });
}

