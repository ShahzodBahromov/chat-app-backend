import jwt from '../lib/jwt.js'
import fs from 'fs'
import path from 'path'

const GET = (req, res) => {
	try {
		let todos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'message.json'), 'UTF-8')
		todos = todos ? JSON.parse(todos) : []

		let userTodos = todos.filter( (todo) => todo.todo_text )

		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.write(
			JSON.stringify({
				status: 200,
				message: 'Success!',
				data: userTodos
			})
		)
		return res.end()

	} catch(error) {
		res.writeHead(500, { 'Content-Type': 'application/json' })
		res.write(
			JSON.stringify({
				status: 500,
				message: error
			})
		)
		return res.end()
	}
}

export {
	GET
}