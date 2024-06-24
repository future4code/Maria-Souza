import { app } from "./controller/app"
import { PostController } from "./controller/PostController"
import { UserController } from "./controller/UserController"

const postController = new PostController()
const userController = new UserController()

app.post("/users", userController.createUser) // Criar usuário
app.get("/posts/:id", postController.getPostById) // Busca um post por ID