export default class ErrorController{
    static async showErrorPage(req, res){
        const err = {message: "Oops! The page you're looking for doesn't exist.", statusCode: 400}
        res.status(404).render('error/index', {err});
    }

    static ErrorHandler(err, req, res, next){
        const {message = 'Oh Boy! Somthing went wrong!', statusCode = 500} = err

        console.log(message, statusCode);
        res.status(statusCode).render('error/index', {err});
        // res.send(message).status(statusCode);
    }
}