import React from 'react'

class Courses extends React.Component{

    render()
    {
        return(
            <div id="courses">
                <h5>Courses</h5>
                <table>
                    <tr>
                        <td><img src="/images/react.png" /></td>
                        <td><img src="/images/angular.png" /></td>
                        <td><img src="/images/node.png" /></td>
                    </tr>
                    <tr>
                        <td><img src="/images/js.png" /></td>
                        <td><img src="/images/c++.png" /></td>
                        <td><img src="/images/mongo-db.png" /></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Courses;