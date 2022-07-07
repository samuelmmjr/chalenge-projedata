module.exports = (sequelize, DataTypes) => {
  const Manufacturing = sequelize.define(
    "Manufacturing",
    {
      quantity: DataTypes.INTEGER
    },
    { tableName: "Manufacturings", timestamps: false }
  );
  Manufacturing.associate = ({ Product, Feedstock }) => {
    Product.belongsToMany(Feedstock, {
      as: "Feedstocks",
      through: Manufacturing,
      foreignKey: "product_id",
      otherKey: "feedstock_id",
    });
    Feedstock.belongsToMany(Product, {
      as: "Products",
      through: Manufacturing,
      foreignKey: "feedstock_id",
      otherKey: "product_id",  
    });
  }
  
  return Manufacturing;
};