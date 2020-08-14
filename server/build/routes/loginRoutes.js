"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        return next();
    }
    else {
        res.status(403).send('not permitted!');
    }
};
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" />\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'email' && password === 'password') {
        req.session = {
            loggedIn: true,
            email: req.body.email
        };
        res.redirect('/');
    }
    else {
        res.send('invalid email or password');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n    <div>\n      <div>You are not logged in</div>\n      <a href=\"/login\">Login</a>\n    </div>\n  ");
    }
});
router.get('/logout', function (req, res) {
    req.session = null;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    if (req.session && req.session.email) {
        res.send("welcome to the protected route, " + req.session.email + "-san");
    }
    else {
        res.send('couldn\'t find email on session');
    }
});
