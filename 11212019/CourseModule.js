function CourseModule(name, creditHours) {
    let _name = name;
    let _creditHours = creditHours;

    const showCourseInfo = () => {
        console.log(`Name: ${_name}  Credit Hours: ${_creditHours}`)
    }

    const setName = (name) => {
        _name = name;
    }

    const getName = () => {
        return _name;
    }

    return {
        showCourseInfo,
        setName,
        getName
    }

}


module.exports = CourseModule
