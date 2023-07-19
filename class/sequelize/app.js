const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/animals");

const Dog = db.define("Dog", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        },
    },
    age: {
        type: Sequelize.INTEGER,
        validate: {
            min:1
        },
    },
});

// async function connectToDb() {
//     await Dog.sync({ force: true});
// }

// connectToDb();


const Owner = db.define("Owner", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        },
    },
});

Dog.hasOne(Owner);
Owner.belongsTo(Dog);

(async () => {
    await Dog.sync({ force: true});
    await Owner.sync({ force: true});
    const sammy = await Dog.create({
        name: "sammy",
        age: 1,
    })
    const panchito = await Dog.create({
        name: "panchito",
        age: 49,
    })
    const tina = Owner.create({
        name: "Tina",
        // DogId: sammy.id,
    })
    await tina.setDog(sammy);
    
    console.log("ID:", panchito.id);
    console.log("Name:", panchito.name);
    console.log("Age:", panchito.age);
})(); //auto executing function
