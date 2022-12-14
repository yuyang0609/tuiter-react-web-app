const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item list-group-item-action" href="home.html">
        <i class="fas fa-home"></i>
            <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Home</span>
     </a>    
     <a class="list-group-item list-group-item-action active" href="#">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Explore</span>
                </a>
                <a class="list-group-item list-group-item-action" href="notifications.html">
                    <i class="fas fa-bell"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Notifications</span>
                </a>
                <a class="list-group-item list-group-item-action" href="messages.html">
                    <i class="fas fa-envelope"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Messages</span>
                </a>
                <a class="list-group-item list-group-item-action" href="bookmarks.html">
                    <i class="fas fa-bookmark"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Bookmarks</span>
                </a>
                <a class="list-group-item list-group-item-action" href="lists.html">
                    <i class="fas fa-list"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Lists</span>
                </a>
                <a class="list-group-item list-group-item-action" href="profile.html">
                    <i class="fas fa-user"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Profile</span>
                </a>
                <a class="list-group-item list-group-item-action" href="../navigation.html">
                    <i class="fas fa-circle"></i>
<!--                        <span class="fa-stack fa-1x">-->
<!--                            <i class="fas fa-circle fa-stack-1x"></i>-->
<!--                            <i class="fas fa-ellipsis-h fa-stack-1x fa-xs fa-inverse"></i>-->
<!--                        </span>-->
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;More</span>
                </a>
       
     
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;