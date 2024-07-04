import { Router } from 'express'
import User from '../models/User'

const router = Router()

// Create a new user
router.post('/users', async (req, res) => {
	try {
		const user = new User(req.body)
		await user.save()
		res.status(201).send(user)
	} catch (error) {
		res.status(400).send(error)
	}
})

// Get all users
router.get('/users', async (req, res) => {
	try {
		const users = await User.find()
		res.status(200).send(users)
	} catch (error) {
		res.status(500).send(error)
	}
})

export default router
