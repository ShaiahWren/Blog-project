import React, { useEffect, useState} from 'react';
import {Route, Link } from 'react-router-dom';

import Post from './Post';
import { Title, Media } from "bloomer";
import "bulma/css/bulma.css";


const PostList = props => {
    const [postData, setPosts] = useState([]);

    useEffect(() => {
        (async function() {
            const response = await fetch("http://127.0.0.1:3000/all");
            const postData = await response.json();
            console.log("the data is, ", postData);
            setPosts(postData);
        })();
       }, [setPosts])

       return (
        <>
        {!!postData.length ? (
            <>
                <Title isSize={2} tag="h1">BLOG</Title>
                <Route exact path ="/">
                    <ul>
                        {postData.map((post) => {
                            return (
                                <li key={post.id}>
                                    {post.title}
                                    <Link to={`/all/${post.id}`}>View Details</Link>
                                </li>);
                        })}
                    </ul>
                </Route>
                <Route path={`/all/:post_id`}>
                    <Link to="/">Return to Issue List</Link>
                    <Post postData={postData} />
                </Route>
            </>
            ) : (
                <p>Fetching posts ...</p>
            )}
        </>
       
    );
}

export default PostList;