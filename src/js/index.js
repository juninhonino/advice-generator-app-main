

async function pegaConselho() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json =  await resposta.json()
    const advice =  json.slip.advice
    const adviceId =  json.slip.id

    const conselho = document.querySelector('.advice-description')
    conselho.textContent = advice

    const idConselho = document.querySelector('.advice-id')
    idConselho.textContent = 'advice #' + adviceId


}

pegaConselho()