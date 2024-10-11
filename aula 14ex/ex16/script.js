var inicio = document.getElementById('iinicio')
var fim = document.getElementById('ifim')
var passo = document.getElementById('ipasso')

function contar () {
    var s = inicio + passo
    while (s <= fim) {
        console.log(s)
        s + passo
    }
}