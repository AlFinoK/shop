import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const MONGODB_URI =
	process.env.MONGODB_URI ||
	'mongodb+srv://AlFino:nikita0705@alfino.wle3hgs.mongodb.net/?retryWrites=true&w=majority&appName=AlFino'

mongoose
	.connect(MONGODB_URI)
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('Failed to connect to MongoDB', err))

app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello, World!')
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
