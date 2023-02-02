const http = axios.create({
    baseURL: "http://localhost:3000",
});


async function buscar() {
    let bloco = document.querySelector('.Bloco');
    let andar = document.querySelector('.Andar');
    let apartamento = document.querySelector('.Apto');

    await http.get("/encomenda/list/" + bloco + "/" + andar + "/" + apartamento)
        .then(res => {
            console.log(res);
            let user = JSON.stringify(res.data);
        })
        .catch(error => {
            console.log(error);
            sessionStorage.removeItem("user");
        });
}

