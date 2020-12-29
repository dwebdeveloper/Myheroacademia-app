import React, { Component } from 'react';
import jsonApi from '../../jsonApi';
//import heroAcademiaApi from '../../HeroAcademiaApi';
import MyHeroes from '../MyHeroes/MyHeroes';


import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        jsonApi.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                //console.log(this.state.posts);
            })
            .catch(error => {
                this.setState({ error: true })
                //console.log(error);
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render() {

        let posts = <img style={{ textAlign: 'center' }} src='https://newsimg.nitrado.net/2017/10/doctor_house_wrong.gif' alt='Dr House ' />

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                )
            })
        }


        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
                <MyHeroes />
            </div>
        );
    }
}

export default Blog;