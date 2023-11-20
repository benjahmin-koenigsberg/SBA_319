const mongoose = require('mongoose');
const Contact = require('./models/contact')


const docs = [
    { name: "Basil B", email: "infographics@aol.com", phone: 4443332233, preferredMethod: 'email'  },
    { name: "Larry", email: "buutterfly@aol.com", phone: 4443332233, preferredMethod: 'email' },
    { name: "Sally ", email: "dragontattoo@aol.com", phone: 4443242233, preferredMethod: 'phone' },
    { name: "Susan", email: "info@gmail.com", phone: 4443334533, preferredMethod: 'email' },
    { name: "Dawn", email: "stor7486@yahoo.com", phone: 4467832233, preferredMethod: 'phone' },
    { name: "Sean", email: "info@hotmail.com", phone: 44437899233, preferredMethod: 'email' },
    { name: "Krystal", email: "info@bkroni.com", phone: 4449992233, preferredMethod: 'email' },
    { name: "Howie", email: "info@wondermail.com", phone: 4888332233, preferredMethod: 'phone' },
    { name: "Brenna", email: "info@gov.com", phone: 98743332233, preferredMethod: 'phone' },
    { name: "Bob", email: "info@sizzle.com", phone: 89043332233, preferredMethod: 'email' },

];


async function seedDb() {

    const result = await Contact.insertMany(docs);
    console.log(`${docs.length -1 } documents were inserted`);
   // mongoose.connection.close()
}

module.exports = seedDb
