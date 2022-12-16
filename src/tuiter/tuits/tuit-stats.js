import React from "react";

const TuitsStats = ( {tuit}) => {
    return(
        <>
            <div className="d-flex justify-content-between me-5 mt-2">
                <div>
                    <a href="index.js"><i className="bi bi-chat"/></a>
                    <span className="ms-2">{tuit.replies}</span>
                </div>
                <div>
                    <a href="index.js"><i className="bi bi-repeat"/></a>
                    <span className="ms-2">{tuit.retuits}</span>
                </div>
                <div>
                    <a href="index.js">{tuit.liked? <i className="bi bi-heart-fill text-danger"/>: <i className="bi bi-heart"/>}</a>
                    <span className="ms-2">{tuit.likes}</span>
                </div>
                <a href="index.js"><i className="bi bi-share"/></a>
            </div>
        </>
    )
}

export default TuitsStats;