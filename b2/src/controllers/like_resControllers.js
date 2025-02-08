import connect from "../models/connect.js";
import initModels from "../models/init-models.js";

const models = initModels(connect);

const likeRestaurant = async(req, res) => {
    try {
        const listRes = await models.like_res.findAll({
            attributes: ['user_id', 'res_id', 'date_like']
        });
                return res.status(200).json(listRes);
    } catch (error) {
        console.error("Database Query Error:", error);  
        return res.status(500).json({message: "Error API list like Restaurant"});
    }
}



export {
    likeRestaurant,

}