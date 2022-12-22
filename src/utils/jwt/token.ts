import * as jwt from 'jsonwebtoken'

export const generateToken = (data: any) => {
    try {
        const tokenData = {
            id: data.id,
            name: data.name,
            email: data.email,
            roles: [data.role],
            password: data.password
        }
        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: process.env.EXPIRY_TIME });
        return token;
    } catch (error) {
        throw new Error(error)
    }
}

export const decodeToken = (bearerToken: string) => {
    try {
        const token = bearerToken.substring(7, bearerToken.length)
        console.log({ token })
        const decodeToken = jwt.decode(token, { complete: true })
        if (decodeToken && decodeToken.payload) {
            return decodeToken.payload;
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const verifyToken = (bearerToken: string) => {
    try {
        const token = bearerToken.substring(7, bearerToken.length)
        const isValid = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (isValid) {
            return true
        }
        else {
            return false
        }
    } catch (error) {
        return false
    }
}