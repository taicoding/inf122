import Item from "./item";
import style from "./itemList.module.css";
export default function ItemList(props) { 
    return (
        <div  className={style.container}>
            {props.dogs.map((dog, index) => (
                <Item key={index} image={dog} />
            ))}
        </div>
    );
}