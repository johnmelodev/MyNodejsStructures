function somar(numUm, NumDois) { return numUm + NumDois; }

function dividir(numUm, NumDois) { return numUm / NumDois; }

function multiplicar(numUm, NumDois) {
    if (numUm > 1) {
        numUm++,
        NumDois--
    }
    return numUm * NumDois;
}


function subtrair(numUm, NumDois) { return numUm - NumDois; }

module.exports = { somar, dividir, multiplicar, subtrair }