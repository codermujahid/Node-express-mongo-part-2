 

const {readFile, readFileSync}= require('fs');
const { join } = require('path');
const path= require('path');


 // home page
 const showHomePage = (req, res) => {

   const slider = readFileSync(path.join(__dirname, '../db/slider.json'));
    const posts = readFileSync(path.join(__dirname, '../db/blog.json'));

    res.render('index', { 
      slider : JSON.parse(slider.toString()),
      posts : JSON.parse(posts.toString())
    });

   

 }
  

//  show Single BlogPage  
 const showSingleBlogPage = (req, res) => {

  const posts = JSON.parse(readFileSync(path.join(__dirname, '../db/blog.json')));

  const single_post = posts.find( data => data.id == req.params.id );

  res.render('single', { 
    post :  single_post
  });

 }


 

 //  shop-3col page
 const showShopPage = (req, res) => {

  const shops =  readFileSync(path.join(__dirname, '../db/shop.json'));

    res.render('shop-3col', {  

      shops : JSON.parse(shops.toString())

    });
 }

 //  shop-3col page
 const showCameraPage = (req, res) => {

  const camera =  readFileSync(path.join(__dirname, '../db/camera.json'));

    res.render('camera', {  

      camera : JSON.parse(camera.toString())

    });
 }




 //  show Portfolio Page
 const showPortfolioPage = (req, res) => {

    res.render('portfolio-boxed-3col');
 }


 // export 
 module.exports = {
   showHomePage,
   showSingleBlogPage,
   showShopPage,
   showPortfolioPage,
   showCameraPage

   
 }

 

 