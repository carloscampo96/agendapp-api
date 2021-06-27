import usersServices from '../services/usersServices';

const signin = async (req, res) => {
    try {
       const credentials = req.body;
       const response = await usersServices.validate(credentials);
       res.json(response);
    } catch (error) {
        console.log(error.message, error.stackTrace);
        res.status(error.errorStatus).send(error.message);
    }
}

const signup = async (req, res) => {
    try {
        const userData = req.body;
        const user = await usersServices.create(userData);
        res.json(user);
    } catch (error) {
        res.status(error.errorStatus).send(error.message)
    }
}

const check = async (req, res) => {
    res.json({'auth': true});
}

export default {
    signin,
    signup,
    check
}