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

// 3) e 4) não consegui fazer porque sempre dá "país não encontrado" =(