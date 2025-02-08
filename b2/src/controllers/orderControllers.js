import connect from "../models/connect.js";
import initModels from "../models/init-models.js";
import connection from "../../db.js";

const models = initModels(connect);
const createOrder = async (req, res) => {
    try {
        const { user_id, food_id, amount, code, arr_sub_id } = req.body;

        // Câu lệnh SQL để chèn dữ liệu
        const queryString = `
            INSERT INTO rate_res (user_id, food_id, amount, code, arr_sub_id) 
            VALUES (?, ?, ?, ?, ?)
        `;
        
        // Chạy câu lệnh SQL, truyền dữ liệu vào
        const result = await connection.execute(queryString, [
            user_id, food_id, amount, code, arr_sub_id  
        ]);

        return res.status(201).json({ message: "Order added successfully", data: result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error API create order", error: error.message });
    }
};

export {
    createOrder
}
