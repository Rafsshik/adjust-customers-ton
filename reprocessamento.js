// função nativa do NODE - FileSystem
const fs = require('fs')

const fixTransactions = (userIds) => {
  console.log('Corrigindo transações dos usuários enviados')
}

const sendEmails = (userEmails) => {
  console.log('Enviando comunicação para os usuários impactados')
}



// função que recupera os dados do arquivo.csv'
const getData = () => {
  // fazendo a leitura do arquivo.csv
  const resultFile = fs.readFileSync("dado.csv", "utf8")

  //convertendo cada linha do arquivo.csv em um indice do array
  const dataArray = resultFile.split("\r\n")

  // definindo a variável que armazenará os IDs dos Clientes
  let id = []

  // definindo a variável que armazenará os Emails dos Clientes
  let email = []

  // Loop para armazenar os respectivos dados em suas devidas variáveis
  for (let i of dataArray) {
    // convertendo cada linha do arquivo.csv em um array de 2 indíces delimitado pela vírgula (id,email)
    // sendo newArray[0] o id e sendo newArray[1] o email
    const newArray = i.toString().split(",")

    // empurro o id para a variável de ID
    id.push(newArray[0])

    // empurro o email para a variável de EMAIL
    email.push(newArray[1])
  }

  return {id, email}
  
  // Console log para verificar o que está trazendo nos dois arrays no terminal 
  //console.log(email)
  //console.log(id)
}

const main = async () => {
  // Desestruturação dos dados recebidos da função
  const {id, email} = await getData()
  await fixTransactions(id)
  await sendEmails(email)
  
  
}

main()
  .then(() => console.log('Transações reprocessadas!'))
  .catch(err => console.error(err))



