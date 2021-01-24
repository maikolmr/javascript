console.log(soma(2)(3)(4))

function soma(n1) {
    return function soma2(n2) {
        return function soma3(n3) {
            return n1 + n2 + n3;
        }
    }
}
function soma(n1) {
    return function soma2(n2) {
        return function soma3(n3) {
            return n1 + n2 + n3;
        }
    }
}