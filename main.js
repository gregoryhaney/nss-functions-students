
const createStudent = (kidName, year) => {
    const studentObj =
    {
        name: kidName,
        grade: year
    }
    return studentObj
}

const addMathGrade = (studentObj) => {
    studentObj.math = "B"
    return studentObj
}

const addHistoryGrade = (studentObj) => {
    studentObj.history = "C"
    return studentObj
}

const addScienceGrade = (studentObj) => {
    studentObj.science = "A"
    return studentObj
}


const newStudent = createStudent("Johnny", 4)
console.log(newStudent)

const maths = addMathGrade(newStudent)
console.log(maths)

const hist = addHistoryGrade(newStudent)
console.log(hist)

const sci = addScienceGrade(newStudent)
console.log(sci)
