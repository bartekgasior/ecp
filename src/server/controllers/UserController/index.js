import express from 'express';
import UserService from '../../services/UserService/index.js';

const router = express.Router();

router.post('/users', async (req, res) => {
    const { email, password } = req.body;
    const [status, response] = await UserService.registerUser(email, password);

    res.status(status);
    return res.send(response);

})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const [status, response] = await UserService.signInUser(email, password);

    res.status(status);
    return res.send(response);
})

export default router;
