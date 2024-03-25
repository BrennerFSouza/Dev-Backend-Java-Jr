function sortear() {
	let botaoSortear = document.getElementById("btn-sortear");
	let quantidade = parseInt(document.getElementById("quantidade").value);
	let de = parseInt(document.getElementById("de").value);
	let ate = parseInt(document.getElementById("ate").value);

	if (quantidade > ate - de) {
		alert("Quantidade Maior que a variedade de números!");
		reiniciar();
		alterarBotoes();
	} else {
		if (botaoSortear.classList.contains("container__botao")) {
			let sorteados = [];
			let numero;

			for (let i = 0; i < quantidade; i++) {
				numero = obterNumeroAleatorio(de, ate);

				while (sorteados.includes(numero)) {
					numero = obterNumeroAleatorio(de, ate);
				}

				sorteados.push(numero);
			}

			let texto = document.getElementById("resultado");
			texto.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

			alterarBotoes();
		}
	}
}
function obterNumeroAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarBotoes() {
	let botaoReinicar = document.getElementById("btn-reiniciar");
	let botaoSortear = document.getElementById("btn-sortear");

	if (botaoReinicar.classList.contains("container__botao-desabilitado")) {
		botaoReinicar.classList.remove("container__botao-desabilitado");
		botaoReinicar.classList.add("container__botao");
		botaoSortear.classList.remove("container__botao");
		botaoSortear.classList.add("container__botao-desabilitado");
	} else {
		botaoReinicar.classList.remove("container__botao");
		botaoReinicar.classList.add("container__botao-desabilitado");
		botaoSortear.classList.remove("container__botao-desabilitado");
		botaoSortear.classList.add("container__botao");
	}
}

function reiniciar() {
	document.getElementById("quantidade").value = "";
	document.getElementById("de").value = "";
	document.getElementById("ate").value = "";

	alterarBotoes();
	let texto = document.getElementById("resultado");
	texto.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
}
