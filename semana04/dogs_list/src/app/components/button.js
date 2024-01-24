import style from './button.module.css'
function Button(props) {
    return <button className={style.button} onClick={props.onClick}>{props.label}</button>
}
export default Button;