const User = require('../models/User');

// index(lista de sessões), show(mostrar uma unica sessão), store(criar), updade(alterar), destroy

module.exports = {
    async store(req, res) {
        const { email } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ email });
        }
        return res.json(user);
    }
}