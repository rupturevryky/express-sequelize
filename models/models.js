const { sequelize } = require('../DB');
const { DataTypes } = require('sequelize');

// sequelize.authenticate().then(() => {
//     console.log('Connected!');
//     sequelize.close().then(() => {
//         console.log('Disconnected!');
//     });
// });

const Students = sequelize.define('Students', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    NAME: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    UNIVERSITY: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    BIRTHDAY: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    COUNTRY: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    tableName: 'Students',
    timestamps: false,
    // force: true,
    // alter: true,
});

const students_Characteristic = sequelize.define('students_Characteristic', {
    characteristic_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    course: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    scholarship: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
}, {
    tableName: 'students_Characteristic',
    timestamps: false,
    // force: true,
    // alter: true,
});

module.exports = { Students }
module.exports = { students_Characteristic }

// ; (async () => {
//     try {
//         await Students.sync({});
//         await students_Characteristic.sync({});

//         // create elements for `Students` table
//         const Student1 = await Students.create({ NAME: 'Витя', UNIVERSITY: 'МГУ', BIRTHDAY: "2000-01-01", COUNTRY: 'РФ' });
//         const Student2 = await Students.create({ NAME: 'Игорь', UNIVERSITY: 'ВШЭ', BIRTHDAY: "2001-02-02", COUNTRY: 'РФ' });
//         const Student3 = await Students.create({ NAME: 'Alex', UNIVERSITY: 'ETH', BIRTHDAY: "2002-03-03", COUNTRY: 'Switzerland' });
//         console.log('create elements for `Students` table');

//         // findAll elements
//         const allStudents = await Students.findAll({});
//         allStudents.forEach(student => console.log("findAll elements: ", student.id, student.UNIVERSITY));

//         // findByPk
//         const usersByPk1 = await Students.findByPk(1);
//         console.log("findByPk: ", usersByPk1.id, usersByPk1.NAME, usersByPk1.BIRTHDAY, usersByPk1.COUNTRY);

//         // findAll({where:{}});
//         const RFstudents = await Students.findAll({
//             where: {
//                 COUNTRY: 'РФ'
//             }
//         });
//         RFstudents.forEach(RFstudent => console.log("findAll({where:{}}); : ", RFstudent.id, RFstudent.UNIVERSITY, RFstudent.COUNTRY));

        // delate element by `COUNTRY` attribute
        // await Students.destroy({
        //     where: {
        //         COUNTRY: 'Switzerland'
        //     }
        // });
        // console.log(`destroy Switzerland student`);

        // // redact element
        // let Vitya = await Students.findOne({
        //     where: {
        //         NAME: 'Витя'
        //     }
        // });
        // Vitya.NAME = 'VitayRename';
        // Vitya.save();
        // allStudents.forEach(student => console.log("Check VitayRename: ", student.id, student.NAME));

        // Students.save();

//     } catch (error) {
//         console.error(error);
//     }
// })();