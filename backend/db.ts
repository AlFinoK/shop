import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI =
	process.env.MONGODB_URI ||
	'mongodb+srv://AlFino:nikita0705@alfino.wle3hgs.mongodb.net/?retryWrites=true&w=majority&appName=AlFino'

mongoose
	.connect(MONGODB_URI)
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('Failed to connect to MongoDB', err))

export default mongoose
