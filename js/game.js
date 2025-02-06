const btn = document.querySelector('button')
const resp = document.querySelector('div#resp')

    btn.addEventListener("click", (e) => {
        e.preventDefault()

        function saida() {
            jog.innerHTML = `<p style=" text-align: center;">Você</p><br>`
            jog.appendChild(imgP)
            computador.innerHTML = `<p style=" text-align: center;">Computador</p><br>`
            computador.appendChild(imgC)

        }

        //Variáveis
        const label = document.getElementsByName("escolha")
        const imgP = document.createElement("img")
        const imgC = document.createElement("img")
        const jog = document.getElementById("player")
        const computador = document.getElementById("comp")
        const winner = document.getElementById("winner")
        let player, comp

        //Escolhendo a jogada do player
        for (let cont = 0; cont <= 2; cont++) {
            if(label[cont].checked) {
                player = cont
            }
        }
        //Fim da escolha do player

        comp = Math.floor(Math.random() * 3 + 1)
        
        imgP.setAttribute('id', 'foto')
        imgC.setAttribute('id', 'Foto')

        while (player == null) {
            alert("Faça uma escolha antes de jogar!")
            break
        }

        if (comp == 1) {
            imgC.setAttribute('src', 'img/pedra.jpg')
        } else if (comp == 2) {
            imgC.setAttribute('src', 'img/papel.jpg')
        } else if (comp == 3) {
            imgC.setAttribute('src', 'img/tesoura.jpg')
        }


         //Saída de dados
        if (player == 0) {
            imgP.setAttribute('src', 'img/pedra.jpg')
            saida()
        } else if (player == 1) {
            imgP.setAttribute('src', 'img/papel.jpg')
            saida()
        } else if (player == 2) {
            imgP.setAttribute('src', 'img/tesoura.jpg')
            saida()
        }   
    })