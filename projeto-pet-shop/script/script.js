function mostrarGaleria(){
let imagens =  ["bulldog.jpg", "golden.jpg", "labrador.jpg", "pastor.jpg", "poodle.jpg"];
    let galeria = document.getElementById('galeria');
    imagens.forEach(img => {
        let imgElement = document.createElement('img');
        imgElement.src = 'img/' + img;
        galeria.appendChild(imgElement);
    });
    

}

document.onload = mostrarGaleria();



function exibirRaca(raca){
    let info = {
        'Labrador': 'O Labrador Retriever é uma raça de cães de grande porte. É uma das raças mais populares do Reino Unido e dos Estados Unidos. É conhecido por ser amigável, inteligente e ativo.',
        'Golden Retriever': 'O Golden Retriever é uma raça de cães de grande porte. É uma das raças mais populares do Reino Unido e dos Estados Unidos. É conhecido por ser amigável, inteligente e ativo.',
        'BullDog': 'O Bulldog é uma raça de cães de pequeno a médio porte. É uma das raças mais populares do Reino Unido e dos Estados Unidos. É conhecido por ser amigável, inteligente e ativo.',
        'Pastor Alemão': 'O Pastor Alemão é uma raça de cães de grande porte. É uma das raças mais populares do Reino Unido e dos Estados Unidos. É conhecido por ser amigável, inteligente e ativo.',
    
        'Poodle': 'O Poodle é uma raça de cães de pequeno a médio porte. É uma das raças mais populares do Reino Unido e dos Estados Unidos. É conhecido por ser amigável, inteligente e ativo.'
    };

    document.getElementById('infoRaca').innerText = info[raca];
    


}
       function pesquisarRaca() {
        let pesquisa = document.getElementById('campoPesquisa').value.toLowerCase();
        let racas = ['labrador', 'golden retriever', 'bulldog', 'pastor alemão', 'poodle'];
        let resultado = racas.some(raca => raca.toLowerCase().includes(pesquisa)) 
            ? 'Raça encontrada'  
            : 'Raça não encontrada';
        document.getElementById('resultadoPesquisa').innerText = resultado;
        
    }


