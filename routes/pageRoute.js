
const express = require('express'); 
const { showHomePage, showShopPage, showSingleBlogPage, showPortfolioPage, showCameraPage } = require('../controllers/pageController');
 


 


// //init router
const router = express.Router();


//  // routes
 router.get('/', showHomePage);
 router.get('/shop-3col', showShopPage);  
 router.get('/camera', showCameraPage);  
 router.get('/portfolio-boxed-3col', showPortfolioPage);  
 router.get('/:id', showSingleBlogPage);

  


// // export router
module.exports = router;
 


