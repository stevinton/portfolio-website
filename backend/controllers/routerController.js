const Registered = require('../dataModel');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = new Registered({ name, email, password: hashedPassword });
        const saved = await userData.save();

        res.status(201).json({ msg: 'User created successfully', saved });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};



module.exports = { register };
