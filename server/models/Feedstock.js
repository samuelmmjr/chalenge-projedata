module.exports = (sequelize, DataTypes) => {
  const Feedstock = sequelize.define(
    "Feedstock",
    {
      name: DataTypes.STRING,
      qtd: DataTypes.INTEGER
    },
    { tableName: "Feedstocks" }
  );

  return Feedstock;
};