// 1A) O construtor é uma função de inicialização de uma classe. Para invocá-lo, é necessário escrever "constructor(parâmetros) {resto da lógica}".


// 1B) A mensagem "Chamando o construtor da classe User" foi impressa no terminal apenas uma vez.

type Transaction = {
    description: string,
    value: number,
    date: string
  }

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = []

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

}

const pessoa: UserAccount = new UserAccount("111.111.111-11", "Jujuba", 23)
console.log(pessoa)




// 1C) É necessário criar um método de classe público que invoque as informações privadas. 


/*

2)
class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

const transaction: Transaction = new Transaction("07-01-2022", 2, "Teste")
console.log(transaction)

*/


// 3)
class Bank {
    private accounts: UserAccount[]
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts
    }
  
  }