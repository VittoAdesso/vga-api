const db = require('../models');
const Article = db.article;

exports.findAll = async (req, res) => {

    const articles = await Article.findAll();

    res.send(articles);
}

// exports.findOne = async (req, res) => {

//     const { id } = req.params;
    
//     const articles = await Article.findOne({
//         where: {
//             id : id,
//         },
//     });

//     res.send(articles);
// }


exports.findOne = async (req, res) => {

    const { id } = req.params;

    try {
     
        const articles = await Article.findOne({
            where: {
                id : id,
            },
        });
        
        res.send(articles);

    } catch (error) {
        res.status(500).send({
            message: "Error retrieving Article with id=" + id
        });
    
    }
}




