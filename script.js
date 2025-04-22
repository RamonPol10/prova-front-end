const descricaoInput = document.getElementById('descricao');
const valorInput = document.getElementById('valor');
const categoriaSelect = document.getElementById('categoria');
const adicionarBotao = document.getElementById('adicionar');
const listaGastos = document.getElementById('gastos');
const totalGastos = document.getElementById('total');
let gastos = [];

const atualizarLista = () => {
    listaGastos.innerHTML = '';
    let total = 0;
    for (let i = gastos.length - 1; i >= 0; i--) {
        const gasto = gastos[i];
        const li = document.createElement('li');
        let descricaoFormatada = gasto.descricao;
        let valorFormatado = `R$ ${gasto.valor.toFixed(2)}`;

        if (gasto.valor > 100) {
            descricaoFormatada = `<span style="color: red; text-decoration: underline;">${gasto.descricao}</span>`;
            valorFormatado = `<span style="color: red; text-decoration: underline;">R$ ${gasto.valor.toFixed(2)}</span>`;
        }

        