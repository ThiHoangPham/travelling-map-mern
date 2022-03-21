const router = require("express").Router();
const Pin = require("../models/User");
const bcrypt = require('bcrypt');

// resgister

router.post("/register", async (req, res) => {
    try {
        // generate new password
        const salt = await bcrypt.genSalt(10);
        const 
        // create new user

        // save user and send response

    } catch (err) {
        res.status(500).json(err)
    }
})

// login



module.exports = router;