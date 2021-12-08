function clicar() {
    var a = document.getElementById('mudar')
    a.innerHTML = 'PRODUTO INDISPONIVEL!'
}

function mudar() {
    var a = document.getElementById('alterar')
    a.innerHTML = 'PRODUTO INDISPONIVEL!'
}

function aperte() {
    var a = document.getElementById('indisponivel')
    a.innerHTML = 'PRODUTO INDISPONIVEL!'
}

function ap() {
    var a = document.getElementById('ap')
    a.innerHTML = 'PRODUTO INDISPONIVEL!'
}

function a() {
    var a = document.getElementById('a')
    a.innerHTML = 'PRODUTO INDISPONIVEL!'
}

function b() {
    var a = document.getElementById('b')
    a.innerHTML = 'PRODUTO INDISPONIVEL!'
}

function c() {
    var a = document.getElementById('c')
    a.innerHTML = 'PRODUTO INDISPONIVEL!'
}

function d() {
    var a = document.getElementById('d')
    a.innerHTML = 'PRODUTO INDISPONIVEL!'
}

function teste() {
    var data = new Date()
    var ano = data.getFullYear()
    var name = document.getElementById('name')
    var nome = String(name.value)
    var fano = document.getElementById('date')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[]ERRO verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked) {
            genero = 'Masculino'

        } else if (fsex[1].checked) {
            genero = 'Feminino'

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Bem-vindo(a) ${nome} sexo ${genero} idade ${idade} anos`
    }
}