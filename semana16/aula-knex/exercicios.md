### Exercício 01

A) 
`````
const getActorById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = ${id};
    `)

    console.log(result[0][0])
    return result[0][0]
}
`````

Quando se usa o raw, o resultado aparece em um grande objeto com todos os dados contidos nele.


B)
````
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"`)
  return result
}
````

C) 
`````
const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"`)
  const count = result[0][0].count
  return count
}
`````


### Exercício 02

A) 
`````
const updateActorSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id)
}
`````

B)
`````
const deleteActor = async (id: number): Promise<void> => {
  await connection("Actor")
    .where("id", id)
    .delete()
    console.log("Removido com sucesso")
}
`````

C)
`````
const salaryByGender = async (gender: string): Promise<any> => {
      try {
        const result = await connection("Actor")
            .avg("salary")
            .where("gender", gender)
            console.log(result[0].average)
    } catch (error: any) {
        console.log("Erro!")
    }
}
`````


### Exercício 03

A) 
`````
app
    .get("/actor/:id", async (req: Request, res: Response) => {
        try {
        const id = req.params.id
        const getActor = await getActorById(id)
    
        res
            .status(200)
            .send(getActor)
            
        } catch (err) {
        res
            .status(400)
            .send("Erro!")
        }
  })
`````

B)
`````
app
    .get("/actor", async (req: Request, res: Response) => {
    try {
        const countingActors = await countActorsByGender(req.query.gender as string)
        
        res
            .status(200)
            .send({
                quantity: countingActors,
        })
    } catch (err) {
        res
            .status(400)
            .send("Erro!")
    }
})
`````


### Exercício 04

A)

````
app
    .put("/actor", async (req: Request, res: Response) => {
    try {
        await updateActorSalary(req.body.id, req.body.salary)
        res
            .status(200)
            .send("Atualizado!")
    } catch (err) {
        res
            .status(400)
            .send("Erro!")
    }
})
````

B) 
`````
app
    .delete("/actor/:id", async (req: Request, res: Response) => {
        try {
            await deleteActor(req.params.id)
        res
            .status(200)
            .send("Deletado!")

        } catch (err) {
            res
                .status(400)
                .send("Erro!")
        }
})
`````

