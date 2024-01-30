import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost", // Corrige la palabra "locahost" aquí
  port: 5432,
  username: "postgres",
  password: "123qweasd",
  database: "Shover",
});

const FormEntry = sequelize.define("FormEntry", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  age: DataTypes.STRING,
  gender: DataTypes.STRING,
  talent: DataTypes.STRING,
  pet: DataTypes.STRING,
  file: DataTypes.STRING,
  video: DataTypes.STRING,
});

export { sequelize, FormEntry };
