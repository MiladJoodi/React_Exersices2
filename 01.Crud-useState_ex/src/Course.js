import React from 'react'

function Course(props) {
  return (
    <div className="courseList" style={{backgroundColor: props.course.isCompleted ? "green" : "white" }}>
              <div className="courseList-btn">
              <button className="" onClick={()=>props.deleteCourse(props.course.id)}>×</button>
              <button className="" onClick={()=>props.confirmCourse(props.course.id)}>✓</button>
              </div>
              <h4>{props.course.courseName}</h4>
            </div>
  )
}

export default Course