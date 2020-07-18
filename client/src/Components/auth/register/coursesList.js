import React from 'react'
import coursesStyle from './coursesList.css'

class CoursesList extends React.Component {

    render() {
        return (
            <div class="row">
                <div >
                    <label class="mb-3 lead">Courses</label>
                    <select multiple data-style="bg-white rounded-pill px-4 py-3 shadow-sm " class="selectpicker w-100">
                        <option>JavaScript</option>
                        <option>React.js</option>
                        <option>Angular</option>
                        <option>Node.js</option>
                        <option>MongoDB</option>
                    </select>
                </div>

            </div>
        )
    }
}

export default CoursesList;