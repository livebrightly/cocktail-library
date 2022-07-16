const profilesDB = [

    {
        num: 00,
        name: 'Test Profile',
        email: "testprofile@email.com",
        avatar: "/public/images/robotmonkey.jpg",
        notes: "These are all Test Profile referenced notes (comments)",
        googleId: "TRUE to be replaced by oAuth"
    },
    {
        num: 01,
        name: 'Jane Hays',
        email: "jh@gmail.com",
        avatar: "/public/images/janehays.jpg",
        notes: "These are all Jane's referenced notes (comments)",
        googleId: "TRUE to be replaced by oAuth"
    },
    {
        num: 02,
        name: 'John Martins',
        email: "lj_martins@subspace.uk",
        avatar: "/public/images/johnmartins.jpg",
        notes: "These are all John's referenced notes (comments)",
        googleId: "TRUE to be replaced by oAuth"
    }

];


function getAllProfiles() {
    return profilesDB;
}

function createProfile() {
    const profiles = profilesDB.create({});
    profiles.save();
}

module.exports = {
    getAllProfiles,
    createProfile
};