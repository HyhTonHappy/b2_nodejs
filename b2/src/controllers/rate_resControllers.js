import connect from "../models/connect.js";
import initModels from "../models/init-models.js";
import connection from "../../db.js";

const models = initModels(connect);
const createRateRes = async (req, res) => {
    try {
        const { user_id, res_id, amount } = req.body;

        // Câu lệnh SQL để chèn dữ liệu
        const queryString = `
            INSERT INTO rate_res (user_id, res_id, amount, date_rate) 
            VALUES (?, ?, ?, ?)
        `;
        
        // Chạy câu lệnh SQL, truyền dữ liệu vào
        const result = await connection.execute(queryString, [
            user_id, res_id, amount, new Date()  // Thời gian hiện tại
        ]);

        return res.status(201).json({ message: "Rate added successfully", data: result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error API create rate res", error: error.message });
    }
};





const listRate = async(req, res) => {
    try {
        const listResRate =  await models.rate_res.findAll({
            attributes: ["user_id", "res_id", "amount", "date_rate"] 
        });
        return res.status(200).json(listResRate);
    } catch (error) {
        return res.status(500).json({message: "Error API list rate res"});
    }
}

export {
    createRateRes,
    listRate,
}