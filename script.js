const eletrodomesticos = [
    {
        nome: "Geladeira",
        marca: "Samsung",
        modelo: "RF28R7351SR",
        tipo: "Refrigerador",
        cor: "Inox",
        capacidade: "533L",
        voltagem: "110V",
        preço: "R$ 4.999,00"
    },
    {
        nome: "Micro-ondas",
        marca: "LG",
        modelo: "MH6535GDS",
        tipo: "Micro-ondas",
        cor: "Preto",
        capacidade: "32L",
        voltagem: "220V",
        preço: "R$ 599,00"
    },
    {
        nome: "Máquina de lavar",
        marca: "Brastemp",
        modelo: "BWK12A",
        tipo: "Lava e Seca",
        cor: "Branca",
        capacidade: "12kg",
        voltagem: "110V",
        preço: "R$ 2.299,00"
    },
    {
        nome: "Fogão",
        marca: "Electrolux",
        modelo: "FE6S",
        tipo: "Fogão 6 bocas",
        cor: "Aço Inox",
        capacidade: "80L",
        voltagem: "110V",
        preço: "R$ 1.699,00"
    },
    {
        nome: "Aspirador de pó",
        marca: "Philips",
        modelo: "FC6404/01",
        tipo: "Aspirador Vertical",
        cor: "Vermelho",
        potência: "1000W",
        voltagem: "220V",
        preço: "R$ 399,00"
    },
    {
        nome: "Cafeteira",
        marca: "Nescafé Dolce Gusto",
        modelo: "Genio 2",
        tipo: "Cafeteira Espresso",
        cor: "Preto",
        capacidade: "0,8L",
        voltagem: "220V",
        preço: "R$ 299,00"
    },
    {
        nome: "Liquidificador",
        marca: "Arno",
        modelo: "LIQ 600",
        tipo: "Liquidificador",
        cor: "Preto",
        potência: "600W",
        voltagem: "110V",
        preço: "R$ 169,00"
    },
    {
        nome: "Ventilador",
        marca: "Mondial",
        modelo: "VTR-30",
        tipo: "Ventilador de Torre",
        cor: "Branco",
        potência: "30W",
        voltagem: "110V",
        preço: "R$ 199,00"
    }
];

const meusEletrodomesticos = []

const todosEletrodomesticos = document.getElementById('div-eletros')
const meusEletrosFavoritos = document.getElementById('div-fav')


for (const eletro of eletrodomesticos) {

    todosEletrodomesticos.innerHTML += `
        <div class = "eletrodomestico">
           <div> 
                <h3>${eletro.nome} ${eletro.marca} ${eletro.modelo}</h3>
                <h3>${eletro.preço}</h3>
                <p>${eletro.tipo}</p>
                <p>${eletro.cor}</p>
                <p>${eletro.voltagem}</p>
                <button class="btn btn-dark">Favoritar</button>
           </div>   
        </div>
    
    `
}

const btns = document.querySelectorAll(".btn")
let btnRemover = []

for (const index in btns) {
    btns[index].addEventListener('click', function () {
        for (const element of meusEletrodomesticos) {
            if (eletrodomesticos[index] === element) {
                return alert("Esse item já existe")

            }
        }


        meusEletrodomesticos.push(eletrodomesticos[index])

        meusEletrosFavoritos.innerHTML = ''
        for (const eletro of meusEletrodomesticos) {

            meusEletrosFavoritos.innerHTML += `
                <div class = "eletrodomestico">
                   <div> 
                        <h3>${eletro.nome} ${eletro.marca} ${eletro.modelo}</h3>
                        <h3>${eletro.preço}</h3>
                        <p>${eletro.tipo}</p>
                        <p>${eletro.cor}</p>
                        <p>${eletro.voltagem}</p>
                        <button class="btn btn-danger">Remover</button>
                   </div>   
                </div>
            
            `
        }

        btnRemover = document.querySelectorAll(".btn-danger")

        for (const index in btnRemover) {
            btnRemover[index].addEventListener('click', function () {
                alert(index)

            })
        }

    })



}

