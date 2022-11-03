
const mongoose = require('mongoose');
const { findOne } = require('./user');

const user = require('./user')

mongoose.connect("mongodb://localhost/testdb").then(() => {
    console.log("Successfully COnnected");
}).catch(err => {
    console.log("Errrrrrrrrrrrrrr", err);
})

// async function save()
// {
//     //create user and save it in db -----m1
//      const obj =new user({name:"kyle",age:43})
//      await obj.save();
//      console.log(obj);

//     //create user and save it in db-----m2
//     const obj2 = await user.create({name:"nicole",age:23}) 
//     console.log(obj2)

//     // upadte user
//      obj2.name="sally"
//      await obj2.save()

//     console.log(obj2)

// }
// save()





async function createAndUpdate() {
    try {

        const obj = await user.create({
            name: "veronica",
            age: "30",
            email: "VERONICA@yUp.com",
            hobbies: ["singing", "running", "coading"],
            address: {
                street: "main st",
            },
        })

        //obj.createdAt=89
        //for update
        // obj.save()
        console.log(obj)
    } catch (e) {
        console.log(e.message)
    }

}

async function search() {
    try {

        //    const obj= await user.findById(id);
        //    const list= await user.find()
        //    console.log(list.length)
        //    console.log(obj)

        // findone item by property

        //const veronica=await user.findOne({name:"veronica"})
        //console.log(veronica)

        // find all item by property
        //const veronica=await user.find({name:"veronica"})
        //console.log(veronica)

        //check if exists or not
        //const kyle=await user.exists({name: "kyle"})
        //console.log(kyle!==null)

        // delete user one 
        //  const del=   await user.deleteOne({name:"veronica"})
        //  console.log(del)

        //delete all by property
        //     await user.deleteMany("veronia")




        //age gretaer than -----------gt
        //const kyles=await user.where("name").equals("kyle")
        //console.log(kyles.length)

        //age less than ----------lt
        //const users=await user.where("age").lt(10);
        //console.log(users)


        // greater than and name equal to
        //  const users=await user.where("age").gt(26).where("name").equals("kyle")
        //  console.log(users)


        //use limit
        // const users = await user.where("age")
        //     .gt(26)
        //     .where("name")
        //     .equals("kyle")
        //     .limit(2)
        // console.log(users)


        // //use select to get  only desired field 

        // const users = await user.where("age")
        //             .gt(26)
        //             .where("name")
        //             .equals("kyle")
        //             .limit(2)
        //             .select("age").select("name").select("email").select("bestfriends")
        //         console.log(users)


        // // populate method
        //        const users = await user.where("age")
        //        .gt(26)
        //        .where("name")
        //        .equals("kyle")
        //        .limit(1).populate("bestfriends")
        //    console.log(users)



        // //use usersschema method  define by us
        // const users = await user.where("age")
        // .gt(26)
        // .where("name")
        // .equals("kyle")
        // .limit(1).populate("bestfriends")
        // console.log(users[0].getName())


        // use static method of user schema
        //console.log(await user.findByName("kyle"))

        //use query method of schema
        //        console.log(await user.find().byName("kyle"))
        //or 
        // console.log(await user.where().byName("kyle"))


        //virtual property
        // const kyle=await user.findOne({name:"kyle"})
        // console.log(kyle)
        // console.log("----------------------------")
        // console.log(await kyle.namedEmail)


    } catch (e) {
        console.log("error.... : ", e.message)
    }
}
search()
//search("635f5b5eebe65e7cf935a78e")

// async function findAndUpdate()
// {
//  try{
//     const kyles=await user.where("name").equals("kyle").limit(0);
//     kyles[0].bestfriends="635f5a1e00b2e86348f6e5b4";
//     kyles[0].age=44
//     kyles[0].email="kyles@west.com"
//  const kyle=await   kyles[0].save();
//  console.log(kyle)
//  }catch(e){
//     console.log(e.message)
//  }


// }
// findAndUpdate()


//---------------------------------------------------------middleware in mongoose