const path = require('path');


// home page controller
const showHomepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
}

// home page controller
const showAboutpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/about.html'))
}



module.exports = {
    showHomepage,
    showAboutpage
}