const urlap = document.querySelector("#urlap")
console.log(urlap)
let nev = "Kiss miska"
function bekuld(event) {
  console.log("bekuld1 függvény lefut")

  const nev = document.querySelector("#nev")
  console.log("nev:" + nev.value)

  event.preventDefault()
}

urlap.addEventListener("submit", bekuld)
