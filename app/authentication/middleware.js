function authenticationMiddleware () {
    return function (req, res, next) {
        if (req.isAuthenticated()) {
            res.locals.isAuthenticated = req.isAuthenticated();
            return next()
        }
        res.redirect('/')
    }
}

module.exports = authenticationMiddleware;