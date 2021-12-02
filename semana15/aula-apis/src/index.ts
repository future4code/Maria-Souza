import express, { Express, Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log('Servidor funcionando na porta 3003!')
})

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]


// 1)

// A) Um GET.
// B) /users, que fica logo após o GET.

app
  .get("/users", (req: Request, res: Response) => {

    const getAllUsers = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type,
      age: user.age
    }))
    res
      .status(200)
      .send(getAllUsers)
  })


// 03)

// A) Query parameters. (mas a busca só retorna quando o nome for escrito totalmente em lowercase)
// B) Feito.

app
  .get('/users/search', (req: Request, res: Response) => {

    try {

      if (!req.query.name) {
        throw new Error ("Tipo inválido")
      }

      const getByName = users.filter((user) => 
        user.name.toLowerCase().includes(req.query.name as string))

      if (getByName) {
        res
          .status(200)
          .send(getByName)

      } else {
        throw new Error ("Usuário não encontrado!")
      }

    } catch (error: any) {
      res
        .status(400)
        .send(error.message)
    }
})



// 2)

// NOTA: Não consegui fazer esse exercício muito bem. Ele não retorna só o "normal" ou "admin", mas sim todos os usuários independente do filtro.

app
    .get("/users/:type", (req: Request, res: Response) => {
      
      let errorCode: number = 400
      
      try {
        const type: string = req.params.type
    
        const userByType = users.filter((user) => {
          return user.type === type
        })
    
        if (!userByType) {
          errorCode = 404
          throw new Error("Parâmetros inválidos")
        }
    
        res
          .status(200)
          .send(userByType)

      } catch (error: any) {
        res
          .status(errorCode)
          .send("Ocorreu um erro!")
      }
    }
  )



// 4)

// A) Criou o usuário do mesmo jeito.
// B) Não, porque o PUT serve para atualizar todos os dados de um recurso já existente. Para criar um recurso do zero, o melhor método é o POST.

app
  .post("/users", (req: Request, res: Response) => {

    let errorCode: number = 400

    try {
      const { id, name, email, type, age } = req.body
    
      if (!id || !name || !email || !type || !age) {
        errorCode = 422
        throw new Error ("Ocorreu um erro! Verifique se você preencheu tudo")
      }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    }
    
      users.push(newUser)
    
      res
        .status(201)
        .send("Usuário criado com sucesso!")

      } catch (error: any) {

        res
        .status(errorCode)
        .send("Ocorreu um erro!")
      }
    }
  )