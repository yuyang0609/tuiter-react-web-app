import PostSummaryItem from "./post-summary-item";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const {tuits} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])
    return (
        <div className="list-group wd-list-group">
            {
                tuits.map(post => {
                    return (
                        <PostSummaryItem
                            key={post._id}
                            post={post}
                        />
                    );
                })
            }
        </div>
    );
}

export default PostSummaryList;