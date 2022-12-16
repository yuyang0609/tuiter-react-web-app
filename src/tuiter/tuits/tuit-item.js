import React from "react";
import TuitsStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={50} className="float-end rounded-circle" src={`../${tuit.image}`} alt={""}/>
                </div>
                <div className="col-10">
                    <div className="fw-bold">{tuit.userName}
                        <span > </span>
                        <span className="bi bi-patch-check-fill text-primary "/>
                        <span className="text-secondary fw-normal">  {tuit.handle} </span>
                        <span className="text-secondary fw-normal"> · {tuit.time} </span>
                        <span className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}/>
                    </div>

                    <div className="text-secondary">{tuit.tuit}</div>
                    <TuitsStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;