const users = []

// id es socket.id y userId se refiere al id que tiene en Juntos
require('mongoose');
const Usr = require('./models/users');

const addUser = async (name,surname,email) => {
    
    try{

        let existingUser = await Usr.findOne({ email: email });

        if(existingUser){
            console.log("existe el usuario");
            console.log(existingUser);

            return { user }
        
        }else{

            
            const usr = new Usr(
                    {
                        
                        name: name,
                        surname:surname,
                        email: email
                    }
                );

                let user = await usr.save() 
                console.log("usuario nuevo");
                console.log(user);
                return { user };        

        } 

    }catch (error) {

        return { error }
    }    
}

const getUser = async (email) => {

    try{

        let user = await Usr.findOne({ email: email });

         return user;

    }catch (error) {

        console.log(error);
    }    

}

const deleteUser = async (email) => {
    
    await Usr.deleteOne({ email: email }).then(function(){
    
        console.log("User deleted"); // Success
    
    }).catch(function(error){
    
        console.log(error); // Failure
    
    });
}


const getUsers = async () => {

    try{
        
        let users = await Usr.find({})
        return users;
    
    }catch (error) {

        console.log(error);
    }  
}



//const getUsers = (room) => users.filter(user => user.room === room)


module.exports = { addUser, getUser, deleteUser, getUsers }
