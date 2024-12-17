import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useBlogContext} from "./BlogContext";

export default function BlogItem() {

    const {post_slug } = useParams();

    const {getPostBySlug} =useBlogContext();

    const [currentPost, setCurrentPost] = useState(null)

    useEffect(() => {
        setCurrentPost(getPostBySlug(post_slug))
    }, [post_slug]);


    if(!currentPost) {
        return (<>Loading: {post_slug}</>)
    }

    return (<>
        <h1>{currentPost.title.rendered}
        </h1>
    </>)
}