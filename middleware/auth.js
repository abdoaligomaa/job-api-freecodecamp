const jwt = require('jsonwebtoken')
const customError = require('../error/customError')
function isAuth(req, res, next) {
    // console.log(req.headers.authorization)
    let token = req.headers.authorization
    if (!token || !token.startsWith('Bearer ')) {
        throw new customError('You should Provide The JWT token', 401)
    }

    token = token.split(' ')[1]

    try {
        const decoded = jwt.verify(token, 'jwt secret')
        req.user = { userId: decoded.id, name: decoded.name }
        next()
    } catch (error) {
        throw new customError(
            'Token Is not True , You should Enter the valid Token',
            401
        )
    }
}

module.exports = isAuth
