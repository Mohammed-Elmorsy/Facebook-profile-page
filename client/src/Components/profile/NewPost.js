import React from 'react'
import axios from 'axios';

class NewPost extends React.Component {
    state = {
        postStatus :""
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state.postStatus);
    }

    handleAdd = ()=>{
        this.props.addPost(this.state);
    //    axios.post('http://localhost:8030/students/addPost', {
    //     content: this.state.postStatus
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // axios({
    //     method: 'post',
    //     url: 'http://localhost:8030/students/addPost',
    //     data: {
    //         content:this.state.postStatus
    //     }
    //   });

    //   let postObject = {
    //     content:this.state.postStatus
    //  };
    // fetch("http://localhost:8030/students/addPost", {
    //     method: "POST",
    //     headers: {
    //         'content-type': 'application/json'
    //     },
        
    //     body: JSON.stringify(postObject)
    // }).then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));

     }
    render()
    {
        return(
            <div>
                <form method="post">
                    <textarea name="postStatus" placeholder="what's on your mind ?" onChange={this.handleChange}></textarea>
                    <button id="post" type="button" onClick={this.handleAdd}>Post</button>
                </form>
            </div>
        )
    }

}

export default NewPost;