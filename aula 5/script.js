//const onButtonClick = () => {
//
//   const nomeInput = document.getElementById("nomeInput")
//  console.log(nomeInput.value);
//}
//document.getElementById("botaoDeEnvio").addEventListener("click", () => onButtonClick());

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nomeInput").value;
    const dataNascimento = document.getElementById("dataNascimentoInput").value;
    const telefone = document.getElementById("telefoneInput").value;
    const curso = document.getElementById("cursoInput").value;
    const habilitacao = document.getElementById("habilitacaoInput").value;
    const rua = document.getElementById("ruaInput").value;
    const numero = document.getElementById("numeroInput").value;
    const cidade = document.getElementById("cidadeInput").value;

    //location.href = "./estudante.html" + queryParams;
    //location.href = `./estudante.html?nome=${nome}dataNascimento=${dataNascimento}`; - naivy

    const urlParams = new URLSearchParams();
    urlParams.append("nome", nome)
    urlParams.append("dataNascimento", dataNascimento)
    urlParams.append("telefone", telefone)
    urlParams.append("curso", curso)
    urlParams.append("habilitacao", habilitacao)
    urlParams.append("rua", rua)
    urlParams.append("numero", numero)
    urlParams.append("cidade", cidade)

    console.log(urlParams.toString());

    //location.href = `./estudante.html?${urlParams.toString()}`;
    location.href = "./estudante.html" + "?" + urlParams.toString();
})
