const mongoose = require('mongoose');
const userSchema = require('./schema.js');
const user = mongoose.model('user',userSchema, 'user');

async function creatUser(userName){
    return new user({
        userName,
        created: Date.now()
    }).save()
}
async function findUser(userName){
    return await user.findOne({username})
}
(async ()=>{
    const connector = mongoose.connect(connectString);
    const userName = process.argv[2].split('=')[1]

    let user = await connector.then(async () => {
        return findUser(userName)
    })
     if(!user){
         user = await creatUser(userName);
     }

     console.log(user);

     process.exit(0);
})()