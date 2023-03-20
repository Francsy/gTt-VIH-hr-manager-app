

const userAuthChecker = async (req, res) => {
    try {
        return res.status(200).json({
            message: "isAuth"
        })
    } catch (e) {
        console.log(e.message)
    }

}

module.exports = {
    userAuthChecker
}