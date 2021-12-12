module.exports = app => {
  
    const controller = require("../controllers/controller.js");
    
    var router = require("express").Router()
    
    router.get("/", controller.findall)
    router.get("/bbc", controller.findbbc)
    router.get("/theguardian", controller.findtheguardian)
    router.get("/thetimes", controller.findthetimes)
    router.post("/registar", controller.registar);
    router.post("/login", controller.login);  
    router.get("/auth/confirm/:confirmationCode", controller.verificaUtilizador);  

    app.use('/news', router);
    
    };

