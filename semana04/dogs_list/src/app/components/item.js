import Image from "next/image";
import style from "./item.module.css";
export default function Item(props) {
    return ( 
        <Image className={style.item} src={props.image} width={100} height={100}></Image>
    );

}