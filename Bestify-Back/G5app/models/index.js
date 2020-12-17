
//Including dependency
const dbConfig = require("../dbConfig/dbconfig");
const Sequelize = require("sequelize");


//Setting up the config
const connection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

 //Checking connection status
 connection.sync().then(function(err) {
    if (err) console.log('Unable to connect to the PostgreSQL database:', err);
    console.log('Connection has been established successfully.');
});

//creating db as json object
const db = {};

//adding reference to db so we can refer that in another js file
db.Sequelize = Sequelize;
db.connection = connection;


// db.user = require("./user.model.js")(sequelize, Sequelize);
db.quiz = require("./quiz.model.js")(connection, Sequelize);
db.quiz_score = require("./quizscore.model.js")(connection, Sequelize);
// db.questions = require("./questions.model.js")(sequelize, Sequelize);
db.game = require("./game.model.js")(connection, Sequelize);
db.registration=require("./registration.model.js")(connection,Sequelize);
db.admin = require("./admin.model.js")(connection, Sequelize);

db.approval = require("./approval.model.js")(connection, Sequelize);




db.registration.hasOne(db.admin);
db.admin.belongsTo(db.registration);

db.registration.hasMany(db.quiz);
db.quiz.belongsTo(db.registration);

db.registration.hasMany(db.quiz_score);
db.quiz_score.belongsTo(db.registration);

db.registration.hasMany(db.game);
db.quiz_score.belongsTo(db.registration);

module.exports = db;