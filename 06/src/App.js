import { useState } from "react";
import "./App.css";
import Course from "./Course";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  const inputHanler = (event) => {
    setNewCourse(event.target.value);
  };


  const addCourse = () => {
    const course = {
      id: courseList.length === 0 ? 1 : courseList.length+1,
      courseName: newCourse,
      isCompleted: false
    }
    setCourseList([...courseList, course]);
    // console.log(course);
  };

  const deleteCourse = (courseId)=>{
    setCourseList(courseList.filter((course)=> courseId !== course.id)
    )
  }

  const confirmCourse = (courseId)=>{
    const newCourseList = courseList.map((course)=>{
      if(course.id === courseId) return {...course, isCompleted: !course.isCompleted}
      else
      return course
    })
    setCourseList(newCourseList)
  }

  console.log(courseList)

  return (
    <div className="App">
      <div className="add-course">
        <button onClick={addCourse}>Add Course</button>
        <input type="text" onChange={inputHanler} />
      </div>

      <div className="list">
        {courseList.map((course, index) => {
          return  <Course
          key={index}
          course={course}
          deleteCourse={deleteCourse}
          confirmCourse={confirmCourse} 
          />
        })}
      </div>
    </div>
  );
}

export default App;
