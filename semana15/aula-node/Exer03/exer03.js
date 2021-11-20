const toDoList = ["Comer bolo", "Tirar soneca"]
const newItem = process.argv[2]
toDoList.push(newItem)

console.log('\x1b[32m', "Lista de tarefas: ", toDoList)