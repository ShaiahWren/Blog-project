import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import  styled  from 'styled-components';

const BlogPost = styled.div`
    padding: 12px;
    width: 500px;
    height: 400px;
    background-color: white;
    border-radius: 8px;
    margin: 0 auto;

    h1 {
        font-size: 2rem;
    }
    h2 {
        
    }
    p {
        text-align: left;
        text-indent: 10%;
        padding: 8px;
    }
`;




const Post = props => {
    const {postData} = props
    const { post_id } = useParams();
    const post = postData.find((post) => {
        return post.id === parseInt(post_id) ? post : null;
    });

    return (
       <>
        <BlogPost>
        <h1>{post.first_name} {post.last_name}</h1>
        <h3>{post.handle}</h3>
        <h2>{post.title}</h2>
        <p>{'\t'}{post.content}</p>

        {/* <ReactMarkdown source={post.content} escapeHtml={false}/> */}
        </BlogPost>
       </> 
    )
};

export default Post;