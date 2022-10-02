const express = require("express");
const app = express();

const userRouter = require("./Routes/users.route");
const PORT = 8001;

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

// // *******  without MVC architecture *******

// // this'll go to Model folder
// const users = [
//   {
//     name: "name 1",
//     age: 1,
//   },
// ];

// // this'll got to Route folder
// app.get(
//   "/",
//   // this'll go to Controller folder, all locgic will be there.
//   (req, res) => {
//     res.status(200).json({
//       message: "All OK, go to users route 😀 ",
//     });
//   }
// );

// // this'll got to Route folder
// app.get(
//   "/users",

//   // this'll go to Controller folder, all locgic will be there
//   (req, res) => {
//     res.status(200).send(`
//   <form action="" method="post"  >
//   <input type="text" name="clientName" placeholder="enter name"  />
//   <input type="number" name="clientAge" placeholder="enter age"   />
//   <button type="submit"   > User</button>
//   </form>`);
//   }
// );

// // this'll got to Route folder
// app.post(
//   "/users",

//   // this'll go to Controller folder, all locgic will be there
//   (req, res) => {
//     const name = req.body.clientName;
//     const age = req.body.clientAge;

//     users.push({ name: name, age: age });
//     res.status(200).json({
//       success: true,
//       users,
//     });
//   }
// );

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
