const btn = document.querySelector('button')
const resp = document.querySelector('div#resp')

    btn.addEventListener("click", (e) => {
        e.preventDefault()

        function saida() {
            jog.innerHTML = `<p style=" text-align: center;">Você</p><br>`
            jog.appendChild(imgP)
            computador.innerHTML = `<p style=" text-align: center;">Computador</p><br>`
            computador.appendChild(imgC)
            winner.innerHTML = resp
        }

        //Variáveis
        const label = document.getElementsByName("escolha")
        const imgP = document.createElement("img")
        const imgC = document.createElement("img")
        const jog = document.getElementById("player")
        const computador = document.getElementById("comp")
        const winner = document.getElementById("winner")
        let player, comp, resp

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

        //Depurador de jogada inválida
        while (player == null) {
            alert("Faça uma escolha antes de jogar!")
            break
        }

        //Adicionando imagem referente a jogada do computador
        if (comp == 1) {
            imgC.setAttribute('src', 'img/pedra.jpg')
        } else if (comp == 2) {
            imgC.setAttribute('src', 'img/papel.jpg')
        } else if (comp == 3) {
            imgC.setAttribute('src', 'img/tesoura.jpg')
        }

        //Adicionando imagem referente a jogada do player
        if (player == 0) {
            imgP.setAttribute('src', 'img/pedra.jpg')
  
        } else if (player == 1) {
            imgP.setAttribute('src', 'img/papel.jpg')
       
        } else if (player == 2) {
            imgP.setAttribute('src', 'img/tesoura.jpg')
          
        }

        //Decisão do vencedor
        if (player ==  (comp - 1)) {
            resp = "EMPATE!"
        } else if (player == 0 && comp == 3 || player == 1 && comp == 1 || player == 2 && comp == 2) {
            resp = "Você venceu!"
        } else {
            resp = "Computador venceu!"
        }

        //Saída de dados
        //Depurador confirmando saída de dados, caso player tenha jogado
        if (player >= 0) {
            saida()
        }
        
    })