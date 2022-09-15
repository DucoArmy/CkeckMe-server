export default (req, res, next) => {
    if(req.get("key") == "Enzkal1234") {
        next()
    }
    else {
        return res.status(401)
        .json({
            status: 401
        })
    }
}