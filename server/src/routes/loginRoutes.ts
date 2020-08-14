import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if(req.session && req.session.loggedIn) {
    return next();
  } else {
    res.status(403).send('not permitted!')
  }
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" />
      </div>
      <button>Submit</button>
    </form>
  `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if(email && password && email === 'email' && password === 'password'){

    req.session = { 
      loggedIn: true, 
      email: req.body.email 
    };

    res.redirect('/');

  } else {
    res.send('invalid email or password');
  }
})

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn){
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `)
  } else {
    res.send(`
    <div>
      <div>You are not logged in</div>
      <a href="/login">Login</a>
    </div>
  `);
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = null;
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: RequestWithBody, res: Response) => {
  if(req.session && req.session.email){
    res.send(`welcome to the protected route, ${req.session.email}-san`)
  } else {
    res.send('couldn\'t find email on session')
  }
})

export { router };
