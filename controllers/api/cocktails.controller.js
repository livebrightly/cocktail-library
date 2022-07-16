const Cocktail = require('../../models/Cocktail');
const Ingredient = require('../../models/Ingredient');
const Profile = require('../../models/Profile');

// Get Full List
async function cocktailIndex(req, res) {
    try {
        console.log(req.query);
        const allCocktails = await Cocktail.find({});
        await res.render('libraryBar.ejs', {
            title: 'Cocktail Library',
            cocktails: allCocktails,
            user: req.user
        });
    } catch (error) {
        throw (error);
        //.send(HttpStatusCodes);
        // throw (HttpStatusCodes).send(error);
        // res.status('http-status-codes').send(`Something went wrong: $(error.message`)
    }
}
// Get Full List and sort? ... // TODO sort
async function glossary(req, res) {
    try {
        const allCocktails = await Cocktail.find({});
        await res.render('glossary.ejs', {
            title: 'glossary',
            cocktails: allCocktails
        });
    } catch (error) {
        throw (error);
    }
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Cocktail.find(modelQuery)
        .sort(sortKey).exec(function (err, cocktails) {
            if (err) return next(err);
            // Passing search values, name & sortKey, for use in the EJS
            res.render('cocktails/glossary', {
                cocktails,
                user: req.user, // add the profile: profile: req.user,
                name: req.query.name,
                sortKey
            });
        });
}

function addNote(req, res, next) {
    req.user.notes.push(req.body);
    req.user.save(function (err) {
        res.redirect('/details');
    });
}

// Get One using id // find the mongo Id
async function showCocktail(req, res) {
    // console.log(req.params);
    const showOne = await Cocktail.findById(req.params.cocktailId);
    await res.render('cocktails/details', {
        title: 'Details',
        oneCocktail: showOne,
        cocktailId: cocktail._id,
        user: req.user
    });
}

function newCocktailForm(req, res) {
    res.render('cocktails/newCocktail', {
        title: 'Add a new cocktail',
        user: req.user
    });
}

async function createCocktail(req, res) {
    console.log(req.body, 'create function ran');
    //  same as seeds.js
    const newCocktail = await new Cocktail(req.body);
    console.log(req.body);

    // convert private's checkbox of nothing or "on" to boolean
    req.body.hasAlcohol = !!req.body.hasAlcohol; {
        for (let key in req.body) {
            if (req.body[key] === '') delete req.body[key];
        }
        req.body.isAdded = !!req.body.isAdded;
        for (let key in req.body) {
            if (req.body[key] === '') delete req.body[key];
        }
        req.body.isFave = !!req.body.isFave;
        for (let key in req.body) {
            if (req.body[key] === '') delete req.body[key];
        }


        var cocktail = new Cocktail(req.body);
        console.log(req.body);
        cocktail.save(function (err) {
            if (err) return res.redirect('/libraryBar/new');
            res.redirect(`libraryBar/${cocktail._id}`);

            // await newCocktail.save(function (err) {
            //     if (err) return res.redirect('/libraryBar');
            //     res.redirect('/libraryBar');
        });
    }
}

async function updateCocktail(req, res) {
    // console.log(req.params);
    // console.log(req.body, 'update function ran');
    const updatedCocktail = await Cocktail.updateOne({
        _id: req.params.cocktailId
    }, {
        ...req.body
    });
    await res.json({
        updateStatus: 'updated drink'
    });
    console.log(updatedCocktail, 'this is the returned updatedCocktail var');
    return updatedCocktail;
}

async function deleteCocktail(req, res) {
    await Cocktail.delete({
        _id: req.params.id
    });
    res.redirect('libraryBar/cocktails/details');
}

module.exports = {
    index: cocktailIndex,
    show: showCocktail,
    glossary,
    addNote,
    newCocktailForm,
    create: createCocktail,
    update: updateCocktail,
    delete: deleteCocktail
};