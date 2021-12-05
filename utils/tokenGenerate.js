const jwt = require('jsonwebtoken');


const generateJWT = (username) => {
    const token = jwt.sign({
        username: username
    }, 'thisissecret', { expiresIn: '1h' });
    return token;
};

module.exports= generateJWT;