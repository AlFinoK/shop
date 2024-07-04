import express from 'express'
import dotenv from 'dotenv'
import './db'
import userRoutes from './routes/userRoutes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

// Use user routes
app.use('/api', userRoutes)

app.get('/', (req, res) => {
	res.send('Hello, World!')
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
