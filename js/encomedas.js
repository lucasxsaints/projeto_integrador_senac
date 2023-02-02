const http = axios.create({
    baseURL: "http://localhost:3000",
});


async function buscarEncomenda(bloco, andar, apartamento) {
    try {
        let res = await http.get("/encomenda/list/" + bloco + "/" + andar + "/" + apartamento);
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        alert("Erro ao buscar!");
    }
}


async function cadastroEncomenda(bloco, andar, apartamento) {
    await http.post("/encomenda/add/", { bloco: bloco, andar: andar, apartamento: apartamento })
        .then(res => {
            console.log(res);
            alert("Cadastrado!");
        })
        .catch(error => {
            console.log(error);
            alert("Erro ao cadastrar!");
        });
}

