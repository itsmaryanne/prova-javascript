//Loja de informática

class Produto {
    nome; 
    preco;
    quantidade;

    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

let produtos = [
    new Produto("Teclado mecânico", 80, 20),
    new Produto("Mousepad", 30, 21),
    new Produto("Headset de gatinho", 60, 15),
    new Produto("Entrada de CD externa", 100, 12),
    new Produto("Mouse vertical wireless", 85, 6),
    new Produto("Cadeira ergonômica", 900, 3),
    new Produto("Apoio para pés", 45, 4),
    new Produto("Notebook da Positivo", 2, 1),
];

function calcularValorEstoque(produto) {
    return preco * quantidade;
}

let i = 0;
let resultado = 0;

for(let i = 0; i < produtos.length; i++){
    if (quantidade <= 5) {
        console.log(`Repor estoque`);
    } else {
        console.log(`Estoque OK`);
    }
    i++
}

let estoqueAcima500 = 0;
let estoqueAcima = 0;

while(i < produtos.length) {
    if (estoqueAcima(produtos[i]) > 0) {
        estoqueAcima500++;
    }
    i++;
}

console.log(`Valor total do estoque: ${preco * quantidade}`);
console.log(`Produto com estoque mais valioso: ${calcularValorEstoque}`);
console.log(`Precisam de reposição: ${estoque <= 5}`);