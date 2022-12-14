const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-9">
                <div class="text-secondary">${post.topic}</div>
                <div class="fw-bold d-inline">${post.userName}
                    <i class="fa fa-check-circle"></i>
                    <span class="text-secondary fw-normal">- ${post.time}</span>
                </div>
                <div class="fw-bold">${post.title}</div>
            </div>
            <div class="col-3">
                <img src="${post.image}" class="float-end rounded" height="80px">
            </div>
        </div>
    </li>
             
`); }

export default PostSummaryItem;