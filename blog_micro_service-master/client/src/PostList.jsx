import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:4000/posts");

        setPosts(res.data);
    };

    const renderPosts = Object.values(posts).map((post) => (
        <div
            className='card'
            style={{ width: "30%", marginBottom: 20 }}
            key={post.id}
        >
            <div className='card-body'>
                {post.title}
                <CommentList postId={post.id} />
                <CommentCreate postId={post.id} />
            </div>
        </div>
    ));

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderPosts}
        </div>
    );
};

export default PostList;
