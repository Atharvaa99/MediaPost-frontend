import axios from 'axios';
import './CreatePostPage.css';
import { useNavigate } from "react-router-dom";
import { API_URL } from '../../config';

export function CreatePostPage() {

        const navigate = useNavigate();

        const uploadPost = async (event) => {
            event.preventDefault();

            const data = new FormData(event.target);

            axios.post(`${API_URL}/api/create-post`, data)
                    .then((res) => {
                        console.log(res)
                        navigate("/posts")

                    })
                    .catch((err) => {
                        console.log(err)
                        alert("Error creating post")
                    })
                    
    }

    const viewPostsPage = () => {
        navigate('/posts');
    }
    return (
        <>
        <div className='view-posts-page'>
            <button
                onClick={viewPostsPage}
            >
                Posts
            </button>
        </div>
        <section className='create-post-section'>
            <h1>
                Create Post
            </h1>

            <form onSubmit={uploadPost}>
                <div>
                    <input
                        className='file-upload'
                        type='file'
                        placeholder='image'
                        name='image'
                        accept='image/*'
                    />

                </div>
                <div>
                    <input type='text' placeholder='caption' name='caption' required />
                </div>
                <button
                    type='submit'
                >
                    Submit
                </button>
            </form>
        </section>
        </>

    )
}