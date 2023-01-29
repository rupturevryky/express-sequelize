const { sequelize } = require('../DB');
const { DataTypes } = require('sequelize');

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
});

module.exports = { Students }