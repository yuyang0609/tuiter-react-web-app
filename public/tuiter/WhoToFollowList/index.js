import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
           <li class="list-group-item fw-bold">Who To Follow</li>
           ${who.map(whoItem => {
        return(WhoToFollowListItem(whoItem));
    }).join('')}
    </ul>  
`); }

export default WhoToFollowList;