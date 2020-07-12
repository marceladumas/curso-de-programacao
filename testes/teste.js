console.log ("marcela");

const obj = {
    a: 5,
        b:  {
        c: "ok",
    },
    minhaFuncao: function () {
        console.log("isso daqui de dentro");
    },
    square: function (x) {
        y = x*x;
        console.log(y);
    }
    };

    //console.log(obj.square(10));

function minhaFuncaoComCallback (nome, callback) {
    console.log(nome);
    const nomes = nome.split(' ');
    console.log(nomes);
    callback();
}
minhaFuncaoComCallback ("marcela dumas", function () {
    console.log ("ola de dentro do callback");
});