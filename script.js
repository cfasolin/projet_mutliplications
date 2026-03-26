
// AFFICHE LE RESULTAT //
function afficherResultat (Score, tentatives, vitesse) {
let spanScore = document.getElementById("score")
let affichageScore = `${Score}/${tentatives}` 
spanScore.innerText = affichageScore
let spanVit = document.getElementById("vitesse")
let affichVit = vitesse + " ms"
spanVit.innerText = affichVit }


// GENERE ET AFFICHE LES CALCULS//
function lancerJeu () 
{
    let Score = 0
    let tentatives = 0
    let heureDep = Date.now()
    let heureFin = 0
    let vitesse = 0
    let prNb = Math.floor(Math.random() * 7) +3
    let sdNb = Math.floor(Math.random() * 7) +3
    let genQuestion = document.getElementById("question")
    genQuestion.innerText = prNb + " x " + sdNb

    afficherResultat(Score, tentatives, vitesse)

//RECUPERE USER INPUT//

    let btnOK = document.querySelector("#resultat button")
    let inputResultat = document.getElementById("userresult")
    inputResultat.focus()

    function verifReponse() { 
        if (Number(inputResultat.value) === prNb * sdNb ) {
        Score++
        tentatives++
            }
            else {
                tentatives++
            }
            heureFin = Date.now()
            vitesse = heureFin - heureDep
            if (Number(inputResultat.value) === prNb * sdNb) {
            if (vitesse < 2000) {
            document.getElementById("message").innerText = "Très rapide!"
            document.getElementById("message").style.color = "#9cfd00" 
                } else if (vitesse < 3000) {
            document.getElementById("message").innerText = "Plutôt rapide!"
            document.getElementById("message").style.color = "#f9fd00" 
                } else {
            document.getElementById("message").innerText = "Tu peux aller plus vite!"
            document.getElementById("message").style.color = "#00cafd" 
            }}
            else {
            document.getElementById("message").innerText = "Faux !!!"
            document.getElementById("message").style.color = "#fd0000"  
            }
            

            afficherResultat(Score, tentatives, vitesse)
            
            
            inputResultat.value =''
    
        }

    btnOK.addEventListener ("click", () => {
      verifReponse()
      prNb = Math.floor(Math.random() * 7) +3
      sdNb = Math.floor(Math.random() * 7) +3
      genQuestion.innerText = prNb + " x " + sdNb  
      heureDep = Date.now()
    })

    inputResultat.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            verifReponse() 
            prNb = Math.floor(Math.random() * 7) +3
            sdNb = Math.floor(Math.random() * 7) +3
            genQuestion.innerText = prNb +" x "+ sdNb
            heureDep = Date.now()
        }
    })
    
}

// LANCER LE JEU

let buttonLancerJeu = document.getElementById("pret")

buttonLancerJeu.addEventListener ("click", () => {
    lancerJeu()
    })













