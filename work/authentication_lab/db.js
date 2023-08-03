const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { STRING } = Sequelize;
const config = {
  logging: false,
};

const SALT_ROUNDS = 5;

if (process.env.LOGGING) {
  delete config.logging;
}
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/auth_lab",
  config
);

const User = conn.define("user", {
  username: STRING,
  password: STRING,
});

const Note = conn.define("note", {
  text: STRING
})

User.hasMany(Note);
Note.belongsTo(User);

User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
})

User.getNotes = async (id) => {
  const notes = await Note.findAll({where: {userId: id}});
  if (notes) {
    return notes;
  }
}

User.byToken = async (token) => {
  try {
    const { userId } = jwt.verify(token, process.env.JWT)
    if (userId) {
      const user = await User.findByPk(userId);
      if (user) {
        return user;
      }
    }
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  } catch (ex) {
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  }
};

User.authenticate = async ({ username, password }) => {
  const user = await User.findOne({
    where: {
      username,
    },
  });
  if (user) {
    const comparison = await bcrypt.compare(password, user.password);
    if (comparison) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT);
      return token;
    }
  }
  const error = Error("bad credentials");
  error.status = 401;
  throw error;
};

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const credentials = [
    { username: "lucy", password: "lucy_pw" },
    { username: "moe", password: "moe_pw" },
    { username: "larry", password: "larry_pw" },
  ];
  const [lucy, moe, larry] = await Promise.all(
    credentials.map((credential) => User.create(credential))
  );
  const notes = [
    {text: "good morning"},
    {text: "have a good day"},
    {text: "good night"}
  ];
  const [note1, note2, note3] = await Promise.all(
    notes.map((note) => Note.create(note))
  );
  await lucy.setNotes([note2, note3]);
  await moe.setNotes(note1);
  return {
    users: {
      lucy,
      moe,
      larry,
    },
    notes: {
      note1,
      note2,
      note3,
    }
  };
};

module.exports = {
  syncAndSeed,
  models: {
    User,
  },
};
