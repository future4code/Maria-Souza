import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { country } from './types'
import { countries } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor ativo em http://localhost:3003")
   })


// 1)

app
    .get("/countries", (req: Request, res: Response) => {
        const getAllCountries = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res
        .status(200)
        .send(getAllCountries)
  })


// 3)

app
  .get("/countries/search", (req: Request, res: Response) => {

    let result: country[] = countries

    if (req.query.name) {
       result = result.filter(
          country => country.name.includes(req.query.name as string)
       )
    }

    if (req.query.capital) {
       result = result.filter(
          country => country.capital.includes(req.query.capital as string)
       )
    }

    if (req.query.continent) {
       result = result.filter(
          country => country.continent.includes(req.query.continent as string)
       )
    }

    if (result.length) {
        res
          .status(200)
          .send(result)
    } else {
        res
          .status(401)
          .send("País não encontrado!")
    }

})


// 2)

app
    .get("/countries/:id", (req: Request, res: Response) => {
        const id = req.params.id    
        const countryById = countries.find((country) => {
        return country.id === Number(id)
    })
  
    if (countryById) {
      res
        .send(countryById)
    } else {
      res
        .status(404)
        .send("País não encontrado!")
    }
  })


// 4) 

app
  .post("/countries/:id", (req: Request, res: Response) => {

    let errorCode: number = 400

    try {
      const countryIndex: number = countries.findIndex(
        (country) => country.id === Number(req.params.id)
      )

      if (countryIndex === -1) {
        errorCode = 404
        throw new Error()
      }

      if (!req.body.name && !req.body.capital) {
        throw new Error("Invalid Parameters")
      }

      if (req.body.name) {
        countries[countryIndex].name = req.body.name
      }

      if (req.query.capital) {
        countries[countryIndex].capital = req.body.capital
      }

      res
        .status(200)
        .send("País atualizado!")
        
    } catch (error) {
      res
        .status(errorCode)
        .send("Ocorreu um erro!")
    }
})