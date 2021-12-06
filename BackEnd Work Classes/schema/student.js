import mongoose from 'mongoose'

// field details
let studentSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rollNumber: {
        type: Number,
        unique:true
    },
    createdAt: {
        type: Number,
        default: new Date(),
    }
})
                        // collection Name 
let Student = mongoose.model("student", studentSchema);

// to use this model in our code
export default Student;




// console.log(req.body);
//     let student = new studentData({
//         studentName: req.body.stName,
//         studentRoll: req.body.stEmail,
//         insertDate: req.body.stRoll
//     });

//     let savedStuentData = await student.save();
//     res.json(savedStuentData);
// })