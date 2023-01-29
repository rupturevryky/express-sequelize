// npm i express

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const { Students } = require('./models/Students');

app.get('/students', async (req, res) => {
    const students = await Students.findAll({});
    return res.status(200).json({
        data: students
    });
});

app.listen(port, async () => {
    try {
        await Students.sync({
            alter: true,
            force: false
        });
        const Student3 = await Students.create({ NAME: 'Alex', UNIVERSITY: 'ETH', BIRTHDAY: "2002-03-03", COUNTRY: 'Switzerland' });
    } catch (error) {
        console.error(error);
    }
});

//

// app.get('/', async (req, res) => {
//     return res.send('удача')
// });
// app.listen(port, () => {
//     console.log(`Сервер запущен на порту ${port}`);
// });