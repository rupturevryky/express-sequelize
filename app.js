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


app.post('/students', async (req, res) => {
    try {
        const student = await Students.create(req.body);
        await student.reload();
        return res.status(201).json(student);
    } catch (e) {
        return res.json(e);
    }
});


app.patch('/students/:id', async (req, res) => {
    try {
        const student = await Students.findByPk(req.params.id);
        if (student) {
            student.COUNTRY = req.body.COUNTRY;
        }
        await student.save();
        return res.status(200).json(student);
    } catch (e) {
        return res.json(e);
    }
});


app.delete('/students/:id', async (req, res) => {
    try {
        const student = await Students.findByPk(req.params.id);
        await student.destroy();
        return res.status(204).json();
    } catch (e) {
        return res.json(e);
    }
});


app.listen(port, async () => {
    try {
        await Students.sync({
            alter: true,
            force: false
        });
        // const Student3 = await Students.create({ NAME: 'Alex', UNIVERSITY: 'ETH', BIRTHDAY: "2002-03-03", COUNTRY: 'Switzerland' });
    } catch (error) {
        console.error(error);
    }
})