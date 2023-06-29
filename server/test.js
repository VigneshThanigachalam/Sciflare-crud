// import axios from "axios";
// import asyncHandler from "express-async-handler";


// //  add user
// export const addUser = asyncHandler(async (req, res) => {
// //   const {name, age} = req.body;
// //   const data = await axios.get(`https://crudcrud.com/api/5473d1c9520c4442b49a17a760767e68/users`);
//   const {data} = await axios.get(`https://crudcrud.com/api/5473d1c9520c4442b49a17a760767e68/users`);
//   const isExist = data.filter((a)=>a.name === "vigneshT");
//   if (isExist.length === 0) {
//     // const newuser = await user.create(req.body);
    
//      const {statusText} = await axios.post("https://crudcrud.com/api/5473d1c9520c4442b49a17a760767e68/users", {name:"vignesh", age:"23"});
//      console.log(statusText);
//     res.json({
//       message: "successfully added",
//     });
//   } else {
// console.log("first")
//     // res.json({
//     //   message: "user name already exists",
//     // });
//   }
// });

// addUser();
