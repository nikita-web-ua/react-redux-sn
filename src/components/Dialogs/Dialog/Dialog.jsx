import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return(
        <div className={s.dialog}>
            <img src={props.img}/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}



export default Dialog;