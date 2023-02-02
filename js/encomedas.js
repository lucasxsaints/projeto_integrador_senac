const http = axios.create({
    baseURL: "http://localhost:3000",
});


async function buscarEncomenda() {
    let bloco = document.querySelector('.Bloco');
    let andar = document.querySelector('.Andar');
    let apartamento = document.querySelector('.Apto');
    try {
        let res = await http.get("/encomenda/list/" + bloco + "/" + andar + "/" + apartamento);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        alert("Erro ao buscar a encomenda!");
    }
}


async function cadastroEncomanda() {
    let bloco = document.querySelector('.Bloco');
    let andar = document.querySelector('.Andar');
    let apartamento = document.querySelector('.Apto');

    await http.post("/encomenda/add/", { bloco: bloco, andar: andar, apartamento: apartamento })
        .then(res => {
            console.log(res);
            alert("Cadastrado!");
        })
        .catch(error => {
            console.log(error);
            alert("Erro ao cadastrar a encomenda!");
        });
}

