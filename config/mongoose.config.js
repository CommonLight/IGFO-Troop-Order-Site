const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/notes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
        .then(() => console.log(`Hooray! Connected to the database!`))
        .catch(error => console.log(`Uh-oh. Can't connect to the database.`, error));