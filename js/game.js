const btn = document.querySelector('button')
const resp = document.querySelector('div#resp')

    btn.addEventListener("click", (e) => {
        e.preventDefault()

        function saida() {
            jog.innerHTML = `Voce escolheu<br>`
            jog.appendChild(imgP)
            computador.innerHTML = `Computador escolheu<br>`
            computador.appendChild(imgC)

        }

        const label = document.getElementsByName("escolha")
        const imgP = document.createElement("img")
        const imgC = document.createElement("img")
        const jog = document.getElementById("player")
        const computador = document.getElementById("comp")
        let player, comp

        //Escolhendo a jogada do player
        for (let cont = 0; cont <= 2; cont++) {
            if(label[cont].checked) {
                player = cont
            }
        }
            player += + 1
        //Fim da escolha do player

        comp = Math.floor(Math.random() * 3 + 1)
        
        imgP.setAttribute('id', 'foto')
        imgC.setAttribute('id', 'Foto')

        if (comp == 1) {
            imgC.setAttribute('src', 'img/pedra.jpg')
        } else if (comp == 2) {
            imgC.setAttribute('src', 'img/papel.jpg')
        } else if (comp == 3) {
            imgC.setAttribute('src', 'img/tesoura.jpg')
        }


        if (player == null) {
            alert("Faça uma escolha antes de jogar!")
        } else {
            if (player == 1) {
                imgP.setAttribute('src', 'img/pedra.jpg')
            } else if (player == 2) {
                imgP.setAttribute('src', 'img/papel.jpg')
            } else if (player == 3) {
                imgP.setAttribute('src', 'img/tesoura.jpg')
            }
            //Saída de dados
            saida()
        }  
    })