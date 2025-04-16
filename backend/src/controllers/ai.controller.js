const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    // Check if 'code' is provided
    if (!code) {
        return res.status(400).json({ error: "Code is required" });
    }

    try {
        // Calling the aiService with the provided code
        const response = await aiService(code);

        // Sending the response back to the client
        res.status(200).json({ success: true, data: response });
    } catch (error) {
        // Handling errors from aiService or any other unforeseen errors
        console.error('Error while processing the review:', error);
        res.status(500).json({ error: 'An error occurred while processing the review.' });
    }
};
