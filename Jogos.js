



const dado = fetch("https://www.freetogame.com/api/games")
    .then(Sucesso => {
        if (!Sucesso.ok) { throw new Error("Erro de requisição:" + Sucesso.status) }
        return Sucesso.json()
    })
    .then(dados => {
        console.log(dados)

        const dado = dados

        const fundoIMG = document.querySelector(".Conteudo__principal")

        const jogos = document.querySelector(".Todos__jogos")

        fundoIMG.innerHTML = `
    <p class="destaque">⭐ JOGO EM DESTAQUE</p>
     <h2>${dados[65].title}</h2>       
     <p>${dados[65].short_description}</p>   

    <div class="principal__descrissao">
        <p>⭐ 9.6</p>
        <p>📅 09/11/2022</p>
         <p>🎮 PlayStation 5</p>
    </div>
    <div>
                <button class="button1__principal">Ver detalhes</button>
                <button>♡ Adicionar aos favoritos</button>
                </div>
    `
        jogos.innerHTML = `
${dados.map(dadoss => {
            return `
  <div class="cards__jogos">
  <img src="${dadoss.thumbnail}">

  <h3>${dadoss.title}</h3>
  <p>${dadoss.genre}</p>
  <p>${dadoss.platform}</p>

  <a href="${dadoss.game_url}">Ver jogo</a>

  </div>
  `
        }
        ).join("")}
`
const cards = document.querySelectorAll(".cards")

cards.forEach(card=>{
const genero = card.dataset.genero
        card.addEventListener("click", function(){
             
            const ação = dado.filter(filtro =>
                filtro.genre === genero



            )
console.log(ação)
console.log("Jogos Action:", ação.length)
const quantidadeGeneros = {}

dado.forEach(jogo => {

    const genero = jogo.genre

    quantidadeGeneros[genero] =
        (quantidadeGeneros[genero] || 0) + 1

})

console.log(quantidadeGeneros)

            jogos.innerHTML = ação.map(jogo => {
                return `
            <div class="cards__jogos">

                <img src="${jogo.thumbnail}" alt="${jogo.title}">

                <h3>${jogo.title}</h3>

                <p>${jogo.genre}</p>

                <p>${jogo.platform}</p>

                <a href="${jogo.game_url}" target="_blank">
                    Ver jogo
                </a>

            </div>
`    }).join("")

})
const cardizinho = document.querySelector(".cardzinho")
        cardizinho.addEventListener("click", function(){ 
            jogos.innerHTML = `
${dados.map(dadoss => {
            return `
  <div class="cards__jogos">
  <img src="${dadoss.thumbnail}">

  <h3>${dadoss.title}</h3>
  <p>${dadoss.genre}</p>
  <p>${dadoss.platform}</p>

  <a href="${dadoss.game_url}">Ver jogo</a>

  </div>
  `
        }
        ).join("")}
`})
                              
}

    )})
    

    .catch(Erro => console.log(Erro))


