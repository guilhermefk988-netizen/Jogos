



const dado = fetch("https://www.freetogame.com/api/games")
    .then(Sucesso => {
        if (!Sucesso.ok) { throw new Error("Erro de requisição" + Sucesso.status) }
        return Sucesso.json()
    })
    .then(dados => {
        console.log(dados)

        const dado = dados

        const fundoIMG = document.querySelector(".Conteudo__principal")

        const jogos = document.querySelector(".Todos__jogos")

        fundoIMG.innerHTML = `
    <p class="destaque">⭐ JOGO EM DESTAQUE</p>
     <h2>${dados[66].title}</h2>       
     <p>${dados[66].short_description}</p>   

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
  <img src="${dadoss.thumbnail}"

  <h2>${dadoss.title}</h2>
  <p>${dadoss.genre}</p>
  <p>${dadoss.platform}</p>

  <a href="${dadoss.game_url}">Ver jogo</a>

  </div>
  `
        }
        ).join()}


`
    }
    )

    .catch(Erro => console.log(Erro))


