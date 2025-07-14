export const flashHandler = (req, res, next) => {
    res.locals.currentUser = req.user // user object is put there by passport.
    // console.log(req?.user);
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
}