function alterarStatus(numBotao) {


	let divGame = document.getElementById(`game-${numBotao}`);

	let imagem = divGame.querySelector('.dashboard__item__img');
	let botao = divGame.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented') && botao.classList.contains('dashboard__item__button--return')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = "Alugar";
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";
    }

    


}

