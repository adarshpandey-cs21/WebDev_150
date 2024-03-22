const mongoose=require('mongoose');
const Quote=require('./models/Quote');

let dummyQuotes=[
    {
        author:"jethalal",
        text:"babita jii"
    },
    {
        author:"bapujii",
        text:"ae jethiyaaaa"
    },
    {
        author:"madhvi",
        text:"chachaa jiii.."
    },
    {
        author:"abdul",
        text:"maksad (soda pilana) .."
    },
    {
        author:"popatlal",
        text:"shadi cancel ...."
    },
]

async function seedDB(){
    await Quote.insertMany(dummyQuotes);
    console.log("Db Seeded successfully");
}

module.exports=seedDB;
