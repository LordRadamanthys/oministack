const Booking = require('../models/Booking')

module.exports = {
    async store(req, res) {
        const { userid } = req.headers
        const { spot_id } = req.params
        const { date } = req.body


        const booking = await Booking.create({
            user: userid,
            spot: spot_id,
            date,
        })

        await booking.populate('Spot').populate('user').execPopulate()

        return res.json(booking)
    }
}