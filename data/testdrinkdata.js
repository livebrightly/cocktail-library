const drinksDB = [

    {
        num: 01,
        name: 'Citrus Fizz',
        season: "Summer",
        description: "longtext for Citrus Fizz",
        ingredients: "Seedlip Grove 42, organic marmalade cordial, Sparkling water",
        method: "Combine Seedlip and cordial in a champagne flute and top with chilled sparkling water. *organic marmalade cordial: Mix 300g organic marmalade with 150 mL hot water, Fine strain and store in the fridge  ",
        image: "/public/images/testDrinkImg.jpg",
        rating: 0,
        hasAlcohol: false,
        isAdded: true,
        isFave: true
    },
    {
        num: 02,
        name: 'Classic Margarita',
        description: "longtext for Margarita",
        ingredients: "Tequila, Orange liqueur, and Lime juice",
        method: "Rub the rim of the glass with the lime slice to make the salt stick to it. Shake the other ingredients with ice, then carefully pour into the glass (taking care not to dislodge any salt). Garnish and serve over ice.",
        image: "/public/images/testDrinkImg.jpg",
        rating: 0,
        hasAlcohol: true,
        isAdded: true,
        isFave: false
    },
    {
        num: 03,
        name: 'Classic Martini',
        description: "longtext for Classic Martini",
        ingredients: "Gin, Dry Vermouth, ice, Orange Bitters -optional",
        method: "Fully chill martini glass. Half fill a mixing glass with ice and add in the vermouth, stirring a few times. Add gin and orange bitters. Stir 30 seconds then strain into chilled martini glass",
        image: "/public/images/testDrinkImg.jpg",
        rating: 0,
        hasAlcohol: true,
        isAdded: true,
        isFave: false
    },
    {
        num: 04,
        name: 'Classic Mojito',
        description: "longtext for Mojito",
        ingredients: "sugar, fresh mint, white rum, lime juice, club soda, ice ",
        method: "Muddle the mint with the sugar until fragrant. Add rum and lime juice, stirring to dissolve sugar, Fill glass with club soda, and drag some of the mint up. Garnish with lime round and gently clapped fresh mint leaves.",
        image: "/public/images/testDrinkImg.jpg",
        rating: 0,
        hasAlcohol: true,
        isAdded: true,
        isFave: true
    },
    {
        num: 05,
        name: 'Espresso Martini',
        description: "longtext for Espresso Martini",
        ingredients: "Espresso, Coffee Vodka, Applewood Espressocello, salted caramel, crushed honeycomb",
        method: "Combine all (except for the honeycomb) into a cocktail shaker. Shake vigorously until foamy top appears. Double strain into a martini glass. Garnish with crushed honeycomb.",
        image: "/public/images/testDrinkImg.jpg",
        rating: 0,
        hasAlcohol: true,
        isAdded: false,
        isFave: true
    }, {
        num: 06,
        name: 'Negroni',
        description: "longtext for Negroni",
        ingredients: "Campari, gin, sweet vermouth, orange slice, soda water",
        method: "Place the Campari, gin and vermouth in a high-ball glass, add the orange slice, a handful of ice and top up with the soda. Swirl with a swizzle stick before serving.",
        image: "/public/images/testDrinkImg.jpg",
        rating: 0,
        hasAlcohol: true,
        isAdded: true,
        isFave: false
    },
    {
        num: 07,
        name: 'Prohibition Cocktail',
        description: "longtext for Prohibition Cocktail",
        ingredients: "Apple Pie Melbourne Moonshine, Amaro Montenegro, shiraz, lemon juice, egg white",
        method: "Place all ingredients in a large cocktail shaker with 3 ice cubes. Shake for 1 minute to combine. Pour into glass and garnish with a sprinkle of cinnamon.",
        image: "/public/images/testDrinkImg.jpg",
        rating: 0,
        hasAlcohol: true,
        isAdded: false,
        isFave: false
    },
    {
        num: 08,
        name: 'Rosemary Blueberry Smash',
        description: "longtext for Rosemary Blueberry Smash",
        ingredients: "blueberries, stripped rosemary sprig, honey syrup, lemon juice, sparkling mineral water",
        method: "Muddle blueberries, rosemary leaves, and honey syrup in a cocktail shaker. Add lemon juice and ice. Shake vigorously. Strain into tall glass with fresh ice. Top with sparkling water.",
        image: "/public/images/testDrinkImg.jpg",
        rating: 0,
        hasAlcohol: false,
        isAdded: false,
        isFave: false
    }, {
        num: 09,
        name: 'The Buck',
        description: "longtext for The Buck",
        ingredients: "gin, ginger ale, lemon",
        method: "Chill glass. Add ice and vermouth to a cocktail shaker.",
        image: "/public/images/testDrinkImg.jpg",
        rating: 0,
        hasAlcohol: true,
        isAdded: true,
        isFave: true
    },
    {
        num: 10,
        name: 'Vesper Martini',
        description: "longtext for James Bond's Vesper Martini",
        ingredients: "somethings",
        method: "Combine gin, vodka, and Lillet Blanc or dry vermouth to a cocktail shaker. Shake well; strain into a chilled cocktail glass, Garnish with Lemon peel.",
        image: "/public/images/testDrinkImg.jpg",
        rating: 0,
        hasAlcohol: true,
        isAdded: true,
        isFave: true
    }

];


function getAllDrinks() {
    return drinksDB;
}

function createDrink() {
    const drinks = drinksDB.create({});
    drinks.save();
}


module.exports = {
    getAllDrinks,
    createDrink
};


// example data entry:
// testPhoto by <a href="https://unsplash.com/@roger3010?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roger Bradshaw</a> on <a href="https://unsplash.com/s/photos/empty-glass?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// {num: 00 , name: 'Drink',description: "longtext for Drink", ingredients: "somethings", method: "prep", image: "/public/images/testDrinkImg.jpg",rating: 0,hasAlcohol: true,isAdded: true,isFave: true},

// ToDO lookup: views medial modules for audio files

// * instructions to move this data to mongoose:
// 1. create a seeds file in the parent folder
// run the file in terminal: // node seeds.js  


// * instructions to get data from an online API: