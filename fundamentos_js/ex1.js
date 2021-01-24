// console.log('teste JavaScript!!!') 

function bomDia() {
    console.log('Bom dia!!!!')
}

const boaTarde = function () {
    console.log('Boa tarde!!!')
}

function executar(fn) {
    fn() 
}
executar(bomDia)
executar(boaTarde)