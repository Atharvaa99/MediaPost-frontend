import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import './PostsPage.css';

export function PostsPage() {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    const fetchPosts = async () => {
        const response = await axios.get(`${API_URL}/api/posts`);

        setPosts(response.data.posts);
    }

    useEffect(() => { fetchPosts() }, [])

    const backToCreatePage = () => {
        navigate('/');
    }

    return (
        <>
            <div className='back-to-create-page'>
                <button
                    onClick={backToCreatePage}
                >
                    Back
                </button>
            </div>
            <section className='feed-section'>
                {posts.length > 0 &&
                    posts.map((post) => {

                        const id = post._id;

                        async function deletePost() {
                            await axios.delete(`${API_URL}/api/posts/${id}`);

                            fetchPosts();
                        }

                        return (
                            <div key={id} className='post-card'>
                                <img
                                    src={post.image}
                                    alt='post-image'
                                />
                                <div className='caption-delete-section'>
                                    <p>
                                        {post.caption}
                                    </p>
                                    <button
                                        onClick={deletePost}
                                    >Delete</button>
                                </div>
                            </div>
                        )
                    })}
            </section>
        </>
    )
}