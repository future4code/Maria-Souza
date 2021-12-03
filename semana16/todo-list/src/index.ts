import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import knex from "knex"
import dotenv from "dotenv"

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Servidor ativo em http://localhost:${address.port}`)
  } else {
    console.error("Ocorreu um erro!")
  }
})

dotenv.config()

const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      multipleStatements: true
   }
})

// 1) Criar usuário

const id = Date.now()
const idToString = id.toString()

const criarUsuario = async (
    id: any,
    nome: string,
    apelido: string,
    email: string
  ) : Promise<void> => {
    try {
        await connection.raw(`
           INSERT INTO ToDoListUser (id, nome, apelido, email)
           VALUES (
               '${idToString}',
               '${nome}',
               '${apelido}',
               '${email}'
           );
       `)
    } catch (error: any) {
        error
        .status(400)
        .send("Ocorreu um erro!")
    }
}

  app
    .post("/user", async (req: Request, res: Response) => {
        let errorCode = 400
        try {

            const { nome, apelido, email } = req.body

            if (!nome|| !apelido || !email) {
                errorCode = 422
                throw new Error("Ocorreu um erro pois você não preencheu todos os campos corretamente.")
            }

        await criarUsuario(
            req.body.id,
            req.body.nome,
            req.body.apelido,
            req.body.email
        )
    
        res
            .status(200)
            .send("Usuário criado com sucesso!")

        } catch (err) {
        res
            .status(errorCode)
            .send("Ocorreu um erro!")
        }
  })


// 2) Pegar usuário pelo ID

const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM ToDoListUser WHERE id = '${id}';
    `)
    return result[0][0]
}

app
    .get("/user/:id", async (req: Request, res: Response) => {
        let errorCode = 400
        try {
        const id = req.params.id as string
        const getUser = await getUserById(id)

        if (!getUser) {
            errorCode = 404
            throw new Error ("Usuário não encontrado!")
        }
    
        res
            .status(200)
            .send({
                id: id,
                apelido: getUser.apelido
                })
            
        } catch (err) {
        res
            .status(400)
            .send("Erro!")
        }
  })


// 3) Editar usuário

const editUser = async (
    id: string,
    nome: string,
    apelido: string
): Promise<void> => {
    await connection("ToDoListUser")
        .update({ 
            nome: nome, 
            apelido: apelido 
        })
        .where("id", id)
}

app
    .put("/user/edit/:id", async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const id = req.params.id as string
            const { nome, apelido } = req.body
            const getUser = await getUserById(id)

        if (!nome && !apelido) {
            errorCode = 422
            throw new Error ("Ocorreu um erro pois você não preencheu todos os campos corretamente.")
        }

        if (!getUser) {
            errorCode = 404
            throw new Error ("Usuário não encontrado.")
        }
    
        await editUser(id, nome || getUser.nome, apelido || getUser.apelido)

        res
            .status(200)
            .send({
                alerta: "Usuário editado com sucesso!",
                nome: nome,
                apelido: apelido
                })
            
        } catch (err) {
        res
            .status(400)
            .send("Erro!")
        }
  })


// 4) Criar tarefa

const idTask = Date.now()
const idToStringTask = idTask.toString()

const criarTarefa = async (
        id: any,
        titulo: string,
        descricao: string,
        data_limite: string,
        usuario_id: string
    ) : Promise<void> => {
        try {
            await connection.raw(`
               INSERT INTO ToDoList (id, titulo, descricao, data_limite, usuario_id)
               VALUES (
                   '${id}',
                   '${titulo}',
                   '${descricao}',
                   '${data_limite}',
                   '${idToStringTask}'
               );
           `)
        } catch (error: any) {
            console.log("Erro!")
        }
    }

app
    .post("/task", async (req: Request, res: Response) => {
        let errorCode: number = 400

        try {
            const { titulo, descricao, data_limite, usuario_id } = req.body

            if (!titulo || !descricao || !data_limite) {
                errorCode = 422
                throw new Error("Ocorreu um erro pois você não preencheu todos os campos corretamente.")
            }

            const sender = await getUserById(usuario_id)

            if (!sender) {
                errorCode = 404
                throw new Error("Informe uma ID correta!")
            }

            await criarTarefa(id, titulo, descricao, data_limite, usuario_id)

            res
                .status(200)
                .send("Tarefa criada com sucesso!")

        } catch (error: any) {
            res
                .status(errorCode)
                .send("Ocorreu um erro!")
        }
})


// 5) Pegar tarefa pelo ID

const getTaskById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM ToDoList WHERE id = '${id}';
    `)
    return result[0][0]
}

app
    .get("/task/:id", async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const id = req.params.id as string
            const getTask = await getTaskById(id)

        if (!getTask) {
            errorCode = 404
            throw new Error ("Essa tarefa não existe!")
        }
    
        res
            .status(200)
            .send({
                id: id,
                titulo: getTask.titulo,
                descricao: getTask.descricao,
                data_limite: getTask.data_limite,
                usuario_id: getTask.usuario_id,
                })
            
        } catch (err) {
        res
            .status(400)
            .send("Erro!")
        }
  })


export default app