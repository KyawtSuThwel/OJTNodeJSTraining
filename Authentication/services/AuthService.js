const users = [];

const signupService = (req,res) => {
    res.render('signup');
}

const signupUserService = (req,res) => {
    if(!req.body.id || !req.body.password){
        res.status(400).send('Invalid Details');
    }else{
        const isUser = users.find(user => user.id === req.body.id);
        if(isUser){
            res.render('signup',{message : 'User Already Exists! Login or choose another user id'})
        }
    }
    const newUser = {
        id : req.body.id,
        password : req.body.password
    };
    users.push(newUser);
    req.session.user = newUser;
    res.redirect('/protected_page');
}

const protectedService = (req,res) => {
    res.render('protected_page',{id : req.session.user.id})
}

const logoutService = (req,res) => {
    req.session.destroy(() => console.log('User logged out'));
    res.redirect('/login');
}

const loginService = (req,res) => {
    res.render('login');
}

const loginUserService = (req,res) => {
    if(!req.body.id || !req.body.password){
        res.render('login',{message : 'Please Enter both id and Password'});
    }else{
        const user = users.find(user => user.id === req.body.id && user.password === req.body.password);
        if(user){
            req.session.user = user;
            res.redirect('/protected_page');
        }
    }
    res.render('login',{message : 'Invalid Credentials'})
}

export {signupService,signupUserService,protectedService,logoutService,loginService,loginUserService}