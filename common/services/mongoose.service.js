const mongoose = require('mongoose');

console.log('MongoDB connecting...')
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-oo1rq.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, useNewUrlParser: true,  useUnifiedTopology: true}).then(() => {
    console.log('MongoDB is connected')
}).catch(err => {
    console.log('MongoDB connection unsuccessful');
})

exports.mongoose = mongoose;