const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/test-mcp', async (req, res) => {
  const { serverUrl } = req.body;

  if (!serverUrl) {
    return res.status(400).json({ success: false, error: 'Server URL is required' });
  }

  try {
    const response = await axios.post(serverUrl, {
      input: "Test from MCP Client and give short response"
    });

    res.json({
      success: true,
      data: {
        message: response.data?.message || response.data || "Response received",
        server: serverUrl
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      details: err.response?.data?.error || null
    });
  }
});

app.listen(PORT, () => {
  console.log(` MCP Test Server running at http://localhost:${PORT}`);
});
