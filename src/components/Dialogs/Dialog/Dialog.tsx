import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    img: string,
    id: number,
    name: string
}

const Dialog: React.FC<PropsType> = (props) => {
    return(
        <div className={s.dialog}>
            <img src={props.img}/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}



export default Dialog;