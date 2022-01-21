 ---- HERANÇA ----

 1A) Não, a password é do tipo private. Porém se ela for chamada por uma função get pública, aí sim.
 1B) Uma vez apenas ao iniciar o servidor.

 2A) Uma vez apenas ao iniciar o servidor.
 2B) Duas vezes. A primeira vez iniciou com referência à Customer e depois mais uma vez pois Customer herdou informações da User.

 3A) Não, porque não foi criada a função get pública de password.

 4 e 5) 
 ````
 	public introduceYourself(): string {
			return `Olá, sou ${this.name}. Bom dia!`
	}
}

    const customer = new Customer("0001", "jujuba@gmail.com", "Jujuba", "123456")
     console.log(customer.introduceYourself())
 ````


 ---- POLIMORFISMO ----

1A) Todas foram exibidas pois nenhuma é do tipo private.

2A) Apareceu que não é possível criar uma instância de uma classe abstrata. 
2B) Criar uma classe nova que não seja abstrata e aí sim criar uma instância.