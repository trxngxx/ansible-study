const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    // Thực hiện các thao tác lưu dữ liệu vào cơ sở dữ liệu ở đây
    res.json({ message: 'User registered successfully' });
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
