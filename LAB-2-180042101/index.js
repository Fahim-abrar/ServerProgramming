const app = require('./app');

require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

})
.then(()=> {
    console.log('Database connected');
})
.catch((err)=> {
    if(err){
        console.log('Database connection failed');
    }
})

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));