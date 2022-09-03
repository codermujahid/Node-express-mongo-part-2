


const beyaSadi = (req, res, next) => {


    const { name, age } = req.body;


    if (age >= 70 ) {
        res.send('Daad apni valo korsen amamder site ascen');
    }else{
        next();
    }

}



module.exports = {
    beyaSadi
}