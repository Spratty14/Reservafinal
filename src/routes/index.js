const express = require('express');
const router = express.Router();

//routes

//index
router.get('/', (req,res) =>{
    res.render('index', {
        title: "Reserva Natural de Pilar",
        sliderText: "Ubicada a orillas del río Luján, esta área protegida te permite acercarte a la naturaleza local, en un espacio destinado a desarrollar sensibilidad, compromiso y respeto hacia el patrimonio natural."
    });
});
router.get('/index', (req,res) =>{
    res.render('index', {
        title: "Reserva Natural de Pilar",
        sliderText: "Ubicada a orillas del río Luján, esta área protegida te permite acercarte a la naturaleza local, en un espacio destinado a desarrollar sensibilidad, compromiso y respeto hacia el patrimonio natural."
    });
});
//ecosistemas
router.get('/ecosistemas', (req,res) =>{
    res.render('ecosistemas', {
        title: "Reserva Natural de Pilar-Ecosistemas",
    });
});
//problematicas
router.get('/problematicas', (req,res) =>{
    res.render('problematicas', {
        title: "Reserva Natural de Pilar-Problematicas",

    });
});
//fauna
router.get('/fauna', (req,res) =>{
    res.render('fauna', {
        title: "Reserva Natural de Pilar-Fauna",
        
    });
});
//flora
router.get('/flora', (req,res) =>{
    res.render('flora', {
        title: "Reserva Natural de Pilar-Flora",

    });
});

module.exports = router;
