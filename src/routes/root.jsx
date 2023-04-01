import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <div>

                    <h1>Text Highlighter</h1>
                </div>
                <nav>
                    <ul>
                        <Link to={`search1`}>Example 1 - Basic Highlighter</Link>
                        <Link to={`search2`}>Example 2 - Only JS</Link>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}