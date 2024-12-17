import {useMainMenuContext} from "./MainMenuContext";
import {Link} from "react-router-dom";

export default function MainMenu() {

    const {pages} = useMainMenuContext();

    return(
        <nav>
            <h1>My Vite325 site </h1>
            <ul>
                {pages.map(page => (
                  <li key={page.id}>
                      <Link to={page.slug}>
                      {page.title.rendered}
                      </Link>
                  </li>
                ))
                }
                <Link to="posts">
                    All Posts
                </Link>
            </ul>
        </nav>
    )
}