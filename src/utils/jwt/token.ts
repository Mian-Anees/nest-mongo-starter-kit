import * as jwt from 'jsonwebtoken'

export const generateToken = (data: any) => {
    try {
        const tokenData = {
            id: data.id,
            name: data.name,
            email: data.email,
        }
        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '10h' });
        return token;
    } catch (error) {
        throw new Error(error)
    }
}