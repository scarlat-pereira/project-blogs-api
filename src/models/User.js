const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
     { foreignKey: 'userId', as: 'blog_posts' });
 };

  return User;
};

module.exports = UserModel; 