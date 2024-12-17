import {useBlogContext} from "./BlogContext";
import {Link} from "react-router-dom";

export default function BlogList() {

    const {posts} = useBlogContext()

    return (<>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link to={post.slug}>
                        {post.title.rendered}
                    </Link>
                </li>
            ))
            }

        </ul>
    </>)
}