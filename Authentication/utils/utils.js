const checkSignIn = (req,res,next) => {
    if(req.session.user){
        next();
    }else{
        next(new Error('No logged In!'))
    }
}

export default checkSignIn