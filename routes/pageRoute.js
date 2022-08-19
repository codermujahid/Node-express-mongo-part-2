
const express = require('express'); 
const { showHomepage, showAboutpage } = router('../controllers/pageController');



// //init router
const router = express.Router();


// // routes 
router.get('/' , showHomepage);

router.get('/about' , showAboutpage);

router.get('/contact' , (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'));
});

router.post('/age-check' , (req, res) => {



    // get form data
    const {name, age } = req.body;


    if (age >= 21 ) {
        
     res.status(200).send( `Hi ${name}, Tomar beya okay`);

    }else{
     res.status(400).send( `Hi ${name}, Tomar beya is note okay okay`);
        
    }
      

});

router.get('/currency/:dollar:euro' , (req, res) => {
    const { dollar } = req.params

    res.status(200).send(req.params)
      

});


 


// // export router
module.exports = router;
 


