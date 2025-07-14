export const isLoggedIn = async (req, res, next) => {
    if (!req.isAuthenticated()){
        // console.log(req.originalUrl, req?.url)
        // res.locals.returnTo = req.originalUrl;
        req.session.returnTo = req.originalUrl;
        req.flash('error','Please kindly log in first!');
        return res.redirect('/login');
    }
    next();

}

export const storeReturnRoute = async (req, res, next) => {
    if (req.session.returnTo){
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}