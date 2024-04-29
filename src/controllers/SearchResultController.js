import userModel from '../models/usersData.js';

export const getResultBySearch = async (req, res) => {
    const { searchQuery } = req.query;
    console.log(searchQuery);

    try {
        const result_document = await userModel.find({
            $or: [
                { "Name": { "$regex": searchQuery, "$options": "i" } },
                { "Email": { "$regex": searchQuery, "$options": "i" } }
            ]
        });
        // const result_document = await userModel.find({});
        console.log("5 "+result_document);
        res.json({result_document });
    } catch (mongoError) {
        console.error('MongoDB Error:', mongoError);
        res.status(500).json({ error: 'Failed to retrieve data from MongoDB' });
    }
};
