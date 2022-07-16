require('./config/database');
var mongoose = require('mongoose');

// models
const Cocktails = require('./models/Cocktail');
const Profiles = require('./models/Profile');

// hardcoded test data
const cocktailData = require('./data/testdrinkdata');
const profileData = require('./data/testprofiledata');


async function seedData() {
    try {
        // await Profile.deleteMany(profileData);
        // console.log(profileData);
        await Profiles.insertMany(profileData.getAllProfiles());
        console.log(profileData);

        // await Cocktail.deleteMany(cocktailData);
        // console.log(cocktailData);
        await Cocktails.insertMany(cocktailData.getAllDrinks());
        console.log(cocktailData);
    } catch (err) {
        throw err;
    }
}

seedData();



// const seedCocktailData = async () => {
//     try {
//         await createDrink(cocktailData);
//         await getAllDrinks(cocktailData);
//     } catch (err) {
//         throw err;
//     }
// };

// const seedProfileData = async () => {
//     try {
//         await createProfile(profileData);
//         await getAllProfiles(profileData);
//     } catch (err) {
//         throw err;
//     }
// };


// const seedDb = async () => {
//     try {
//         await Cocktails.deleteMany({});
//         await Cocktails.insertMany(seedCocktailData);
//         await Profiles.deleteMany({});
//         await Profiles.insertMany(seedProfileData);
//     } catch (err) {}
// };


// seedDb();





// handle with Promises = data loads synchronously


console.log('seeds file has been called');