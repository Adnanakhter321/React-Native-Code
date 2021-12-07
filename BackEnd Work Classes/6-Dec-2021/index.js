// for (let i = 0; i <= 100; i++) {
//    console.log(i);
// }

// var http = require('http')
// http.createServer((req , res)=>{
//         if(req.url === '/login'){
//             res.end('Login Route')
//         }
//         else if(req.url === '/signup'){
//             res.end('SignUp Route')
//         }
//         else{
//             res.end('Home')
//         }
// }).listen(4000)

// import express from "express";
// const app = express();
// app.use((req, res, next) => {
//   console.log(req.url);
//   next();
// });
// app.use((req, res) => {
//     console.log('Starting Second middleware');
//   res.end("Hello2");
// });
// app.listen(4000, () => {
//   console.log("------------------Server Started------------------");
// });

import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import Student from "./schema/student.js";

const app = express();
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect(
  "mongodb+srv://adnan:Adnan123@cluster0.zlows.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

mongoose.connection.once("open", (req, res) => {
  console.log("Data Base Connected");
});

mongoose.connection.on("error", () => {
  console.log("Data base connection Failed");
});
app.use(morgan("tiny"));
app.post("/get-student-pagination/:pageNumber", async (req, res) => {
  let { pageNumber } = req.params;
  let skipCount 
  if (Number(pageNumber) === 1) {
    skipCount = 0
    console.log(skipCount);
    let allStudents = await Student.find()
      .limit(2)
      .skip(skipCount); // returns array
    res.json(allStudents);
  }
  else {
    console.log(skipCount);
    skipCount = pageNumber + 1;
    let allStudents = await Student.find()
      .limit(2)
      .skip(skipCount); // returns array
    res.json(allStudents);
  }
}
);
// app.post("/get-student-pagination/:pageNumber/:studentPerPage", async (req, res) => {
//     let { pageNumber, studentPerPage } = req.params;
//     console.log(pageNumber, studentPerPage);
//     let skipCount = (pageNumber - 1) * studentPerPage;
//     let allStudents = await Student.find()
//       .limit(Number(studentPerPage))
//       .skip(skipCount); // returns array
//     res.json(allStudents);
//   }
// );
app.get("/get-student/:name", async (req, res) => {
  let { name } = req.params;
  let data = await Student.find({ studentName: name });
  res.json(data);
});
app.post("/add-student", async (req, res) => {
  console.log(req.body);
  let student = new Student({
    studentName: req.body.stName,
    email: req.body.emailAddress,
    rollNumber: req.body.rollNum,
  });

  let savedData = await student.save();

  res.json(savedData);
});
app.listen(2000, () => {
  console.log("Server Starte`d`");
});
