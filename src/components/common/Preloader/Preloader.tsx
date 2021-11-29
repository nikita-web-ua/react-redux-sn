import preloader from '../../../assets/images/preloader.gif'
import style from './Preloader.module.css'

let Preloader: React.FC = () => {
    return (
        <div className={style.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader