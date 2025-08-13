const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-currency")

function convertValue() {
  const inputCurrencyValue = Number(
    document.querySelector(".input-currency").value
  )
  const currencyValueToConvert = document.querySelector(".valor-moeda") //valor em real
  const currencyValueConverted = document.querySelector(
    ".valor-moeda-convertida"
  )

  console.log(currencySelect.value)
  //VALORES DE CONVERSAO
  const dolarToday = 5.2
  const euroToday = 6.2
  const bitcoinToday = 120.0
  const libraToday = 7.2
  //SELECAO DE MOEDAS E CONVERSAO
  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday)
  }

  if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday)
  }

  if (currencySelect.value === "Libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday)
  }

  if (currencySelect.value === "bitcoin") {
    currencyValueConverted.innerHTML =
      new Intl.NumberFormat("en-GB", {
        minimumFractionDigits: 8,
        maximumFractionDigits: 8,
      }).format(inputCurrencyValue / bitcoinToday) + " BTC"
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue)
}
//TROCA DE ELEMENTOS NA TELA
function changeCurrency() {
  const currencyName = document.querySelector("#currency-name")
  const currencyImage = document.querySelector(".moeda-convertida")
  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "US$ Dólar"
    currencyImage.src = "./img/Dolar.png"
  }

  if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "img/Euro.png"
  }

  if (currencySelect.value === "Libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "img/Libra.png"
  }

  if (currencySelect.value === "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "img/Bitcoin.png"
    currencyImage.style.boxShadow = "0px 5px 100px rgba(0, 0, 0, 0.4)"
  }

  convertValue()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)
