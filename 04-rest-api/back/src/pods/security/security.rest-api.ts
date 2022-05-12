import { userRepository } from 'dals';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { envConstants } from 'core/constants';
import { UserSession } from 'common-app/models';

export const securityApi = Router();

securityApi.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userRepository.getUserByEmailAndPassword(
            email,
            password
        );

        if (user) {
            const userSession: UserSession = { id: user._id.toHexString(), role: user.role };
            const secret = 'my-secret'; // TODO: Move to env variable
            const token = jwt.sign(userSession, envConstants.AUTH_SECRET, {
                expiresIn: '1h',
                algorithm: 'HS256',
            });
            res.send(`Bearer ${token}`);
        } else {
            res.sendStatus(401);
        }
    } catch (error) {
        next(error);
    }
});

