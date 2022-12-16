import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {

    const {pathname} = useLocation();

    const paths = pathname.split('/')
    const active = paths[2];
    console.log("active value")
    console.log(active)
    return (
        <div>
            <div className="list-group">
                <span className="list-group-item d-flex" href="/">
                    <span className="d-none d-xl-block fab fa-twitter"/>
                </span>

                <Link to="/tuiter/home" className={`list-group-item d-flex
                            ${active === "" || typeof active === "undefined" ||
                active === 'home'?'active':''}`}>
                    <i className="bi bi-house pe-2"/><span className="d-none d-xl-block">Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item d-flex 
                            ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-hash pe-2"/><span className="d-none d-xl-block">Explore</span>
                </Link>
                <Link to="/" className="list-group-item d-flex">
                    <i className="bi bi-asterisk pe-2"/><span className="d-none d-xl-block">Labs</span>
                </Link>
                <Link to="/tuiter/notifications" className={`list-group-item d-flex
                            ${active === 'notifications'?'active':''}`}>
                    <i className="bi bi-bell pe-2"/><span className="d-none d-xl-block">Notifications</span>
                </Link>
                <Link to="/tuiter/messages" className={`list-group-item d-flex
                            ${active === 'messages'?'active':''}`}>
                    <i className="bi bi-envelope pe-2"/><span className="d-none d-xl-block">Messages</span>
                </Link>
                <Link to="/tuiter/bookmarks" className={`list-group-item d-flex
                            ${active === 'bookmarks'?'active':''}`}>
                    <i className="bi bi-bookmark pe-2"/><span className="d-none d-xl-block">Bookmarks</span>
                </Link>
                <Link to="/tuiter/lists" className={`list-group-item d-flex
                            ${active === 'lists'?'active':''}`}>
                    <i className="bi bi-card-text pe-2"/><span className="d-none d-xl-block">Lists</span>
                </Link>
                <Link to="/tuiter/profile" className={`list-group-item d-flex 
                            ${active === 'profile'?'active':''}`}>
                    <i className="bi bi-person pe-2"/><span className="d-none d-xl-block">Profile</span>
                </Link>
                <Link to="/tuiter/more" className={`list-group-item d-flex
                            ${active === 'more'?'active':''}`}>
                    <i className="bi bi-three-dots pe-2"/><span className="d-none d-xl-block">More</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <a href="tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </a>
            </div>

        </div>
    );
};
export default NavigationSidebar;