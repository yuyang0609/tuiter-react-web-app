import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
                    <div class="input-group border rounded-pill wd-rounded-border">
                        <div class="input-group-text wd-rounded-search-bar border-0 bg-white">
                            <span><i class="fa fa-search"
                                     style="color: darkgrey"></i></span>
                        </div>
                        <input type="text"
                               id="Search bar"
                               class="form-control wd-rounded-search-bar border-0"
                               placeholder="Search Twitter" >
                    </div>
                </div>
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <a href="explore-settings.html">
                        <i class="fas fa-cog fa-2x"></i>
                    </a>
                </div>
                
            </div>
            
            
           <ul class="nav mt-2 mb-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block d-lg-block d-xl-block d-xxl-block" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           
           <!-- image with overlaid text -->
           <div class="position-relative mb-2">
                <img src="../../images/starship.jpg" class="w-100"/>
                <h2 class="position-absolute px-1 bottom-0 left-0 text-white">SpaceX's Starship</h2>
            </div>
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;