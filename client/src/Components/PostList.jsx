import React from 'react'

class PostList extends React.Component {
    state = {
        postStatus: "",
        postId: 0 ,
        editedPostStatus : ""        
    }


    handleChange = (e) => {
        this.setState({
            editedPostStatus : e.target.value
        })
    }

    selectPostToDelete = (postId) => {
        this.state.postId = postId;
    }

    selectPostToEdit = (post) => {
        this.state.postToEdit = post;
        const editedPostStatus = post.postStatus;
        this.setState({ editedPostStatus })
    }

    editPost = () => {
        const { postToEdit , editedPostStatus } = this.state ;
        postToEdit.postStatus = editedPostStatus;
        this.props.onEdit(postToEdit)

    }

    render() {
        console.log(this.state.postStatus);
        return (
            <React.Fragment>
                <div id="postList">
                    {this.props.posts.map((post) => {
                        return (
                            <div id="postDiv" key={post._id}>
                                {post.postStatus}
                                <i class="fas fa-trash-alt float-right" onClick={() => this.selectPostToDelete(post._id)} data-toggle="modal" data-target="#deletePost"></i>
                                <i class="fas fa-edit mr-2 float-right" onClick={() => this.selectPostToEdit(post)} data-toggle="modal" data-target="#editPost"></i>
                            </div>
                        )
                    })}
                </div>


                <div class="modal fade" id="deletePost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Delete Post</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to delete this post ?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger" onClick={() => this.props.onDelete(this.state.postId)} data-dismiss="modal">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="editPost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Post</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <textarea name="postStatus" value={this.state.editedPostStatus} onChange={this.handleChange}></textarea>

                            </div>
                            <div class="modal-footer">
                                <button id="post" type="button" onClick={this.editPost} data-dismiss="modal">Edit Post</button>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}

export default PostList;