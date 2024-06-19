// se tirarmos o await ele nao vai esperar a execucao dessa para ir para a proxima linha

// usamos then e o catch para tratarmos as promises


async function TestAsync() {
    console.log('starting')
    let example = fetch('http://httpbin.org/get')
    console.log('terminou a requisicao')
}

async function Test() {
    console.log('starting2')

    let example = fetch('http://httpbin.org/get').then((res) => {
        console.log('inside the then')
        console.log(res)
    });
    console.log('example')

    console.log('after the call')
}


// PROMISE ALL
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
// Expected output: Array [3, 42, "foo"]


// PROMISE ANY
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"