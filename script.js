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

        li.innerHTML = `
            <span>${descricaoFormatada} (${valorFormatado}) - ${gasto.categoria}</span>
            <div>
                <button class="editar" data-index="${i}">Editar</button>
                <button class="remover" data-index="${i}">Remover</button>
            </div>
        `;
        listaGastos.appendChild(li);
        total += gasto.valor;
    }
    totalGastos.textContent = total.toFixed(2);
    document.querySelectorAll('.editar').forEach(btn => btn.onclick = editarGasto);
};
const adicionarGasto = () => {
    const descricao = descricaoInput.value.trim();
    const valor = parseFloat(valorInput.value);
    if (descricao && !isNaN(valor)) {
        gastos.push({ descricao, valor, categoria: categoriaSelect.value });
        descricaoInput.value = '';
        valorInput.value = '';
        atualizarLista();
    } else {
        alert('Preencha os campos.');
    }
};