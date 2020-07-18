import React from 'react'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import CoverPhoto from './CoverPhoto'
import ProfilePhoto from './ProfilePhoto'
import NewPost from './NewPost'
import PostList from './PostList.jsx'
import Courses from './Courses'
import AppStyle from './App.css'
import Intro from './Intro'
import axios from 'axios';



class App extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() { 

        axios.get('http://localhost:8030/students/postList')
            .then(res => {
                let posts = Array.from(res.data).reverse();
                this.setState({ posts });
                console.log(res.data)
                console.log(this.state.posts);  
            })
    }

    addPost = (post) => {

        axios.post('http://localhost:8030/students/addPost', {
            postStatus: post.postStatus
        })
            .then((response) => {
/*                 console.log(response.data);
                let newPosts = [post , ...this.state.posts]; 
                console.log(newPosts);

                this.setState({
                    posts: newPosts
                }) */
                axios.get('http://localhost:8030/students/postList')
                .then(res => {
                    let posts = Array.from(res.data).reverse();
                    this.setState({ posts });
                    console.log(res.data)
                    console.log(this.state.posts);  
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    };

    handleDelete = (postId) => {
        console.log("from axios "+postId);
        axios.post('http://localhost:8030/students/deletePost/',{postId})
        .then((response) =>{
            console.log(response.data);  
            const posts = this.state.posts.filter(post => post._id != postId); 
            console.log('newPosts  '+ posts); 
            this.setState({posts})
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    handleEdit = (post) => {
        console.log("from axios edit "+post._id+"    "+post.postStatus); 
        axios.put('http://localhost:8030/students/editPost',{ id: post._id , postStatus: post.postStatus})
        .then((response) =>{
            console.log(response.data);  

            axios.get('http://localhost:8030/students/postList')
            .then(res => {
                let posts = Array.from(res.data).reverse();
                this.setState({ posts });
                console.log(res.data)
                console.log(this.state.posts);  
            })
    
        })
        .catch(function (error) {
            console.log(error);
        });

    }



    render() {
        return (
            <div>
                <Header></Header>
                <CoverPhoto></CoverPhoto>
                <ProfilePhoto></ProfilePhoto>
                <div class="container" id="content">
                    <div id="left">
                        <Intro></Intro>
                        <Courses></Courses>
                    </div>
                    <div id="right">
                        <div id="timeline">
                            <NewPost addPost={this.addPost}></NewPost>
                            <h5>Posts</h5>
                            <PostList posts={this.state.posts} onDelete={this.handleDelete} 
                            onEdit={this.handleEdit}>

                            </PostList>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default App