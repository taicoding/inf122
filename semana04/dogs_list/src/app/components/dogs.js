"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./dogs.module.css";
import Button  from "./button";
function Dog(props) {
    const [dog, setDog] = useState("/vercel.svg")

    const url = "https://dog.ceo/api/breeds/image/random"
    const newDog = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDog(data.message);
                props.addDogList(data.message);
            })
    }
    useEffect(() => {
        newDog()
    }, [])

    return (
        <div className={style.box}>
            <h1>Dogs</h1>
            <Button label="New Dog" onClick={newDog} />
            <Image src={dog} alt="dog" width={500} height={500}  />
        </div>
    );
}
export default Dog;