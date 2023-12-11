import { useState } from "react";
import "./App.css";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  const inputHanler = (event) => {
    setNewCourse(event.target.value);
  };


  const addCourse = () => {
    const course = {
      id: courseList.length === 0 ? 1 : courseList.length+1,
      courseName: newCourse
    }
    setCourseList([...courseList, course]);
    console.log(course);
  };

  const deleteCourse = (courseId)=>{
    setCourseList(courseList.filter((course)=> courseId !== course.id)
    )
  }

  return (
    <div className="App">
      <div className="add-course">
        <input type="text" onChange={inputHanler} />
        <button onClick={addCourse}>Add Course</button>
      </div>

      <div className="list">
        {courseList.map((course, index) => {
          return (
            <div key={index} className="courseList">
              <div className="courseList-btn">
              <button className="" onClick={()=> deleteCourse(course.id)}>×</button>
              {/* <button className="" onClick={()=> deleteCourse(course.id)}>✓</button> */}
              </div>
              <h4>{course.courseName}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
