module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.DOUBLE
    },
    { tableName: "Products", timestamps: false }
  );

  return Product;
};
