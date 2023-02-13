//esse script é inspirado no seguinte repositório: https://github.com/AnaCarolinaAquino/projeto-individual-modulo-5//
import inquirer from 'inquirer'
import chalk from 'chalk'


let array = ["align-items", "background-color", "border-radius"]

//menu inicial
listaCSS()

function listaCSS() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'O que você deseja fazer?',
                choices: [
                    'Exibir a lista CSS',
                    'Adicionar itens a lista',
                    'Remover itens CSS',
                    'Sair',
                ],
            },
        ])
        .then((answer) => {
            let action = answer['action']

            if (action === 'Exibir a lista CSS') {
                showList()
            } else if (action === 'Adicionar itens a lista') {
                insertItens()
            } else if (action === 'Remover itens CSS') {
                removeItens()
            } else if (action === 'Sair') {
                console.log('Sair')
                sair()

            }
        })
}

//opção de voltar ao menu
function back(){
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'back',
          message: 'Deseja voltar ao Menu Inicial?',
          choices: [
            'Sim',
            'Não',
          ],
        },
      ])
      .then((answer) => {
        let back = answer['back']

        if (back === 'Sim') {
            listaCSS()
        } else if (back === 'Não') {
            console.log('Sair')
            sair()
        }
      })
  }

//visualizar a lista
function showList(){
    console.log("lista CSS:", array.sort())
    back()

  }

//inserção de dados na lista
function insertItens() {
    inquirer
      .prompt([
        {
          name: 'insert',
          message: 'Digite uma propriedade CSS:',
        },
      ])
      .then((answer) => {
        let propriedadeCSS = answer['insert']

        if (!array.includes(propriedadeCSS)) {
          array.push(propriedadeCSS)
          console.log(chalk.magenta('Propriedade CSS adicionada a lista.'))
          console.log("lista CSS:", array.sort())
          return back()
        }
        else{
          console.log(chalk.bgMagenta.black('Esta propriedade já existe na lista, escolha outra.'))
          insertItens()
        }
      })
}

//remoção de dados na lista
 function removeItens(){
    inquirer
      .prompt([
        {
          name: 'remove',
          message: 'Digite uma propriedade CSS a ser removida:',
        },
      ])
      .then((answer) => {
        let removeCSS = answer['remove']

        if (array.includes(removeCSS)) {
          let findFor = removeCSS
          let index = array.indexOf(findFor);
          while(index >= 0){
            array.splice(index, 1);
            index = array.indexOf(findFor);}

          console.log(chalk.bgMagentaBright.black('Propriedade CSS removida com sucesso.'))
          console.log("lista CSS:", array.sort())
          return back()
        }
        else {
          console.log(chalk.bgMagentaBright.black('Esta propriedade já foi removida, escolha outra.'))
          console.log("lista CSS:", array.sort())
          return back()
        }
      })
   }

  //função de encerramento da lista
  function sair(){
    console.log("lista CSS:", array.sort())
    console.log(chalk.bgCyan.black('FIM'))
    process.exit()

  }
