'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Dog from "./components/dogs";
import { useState } from "react";
import ItemList from "./components/itemList";

export default function Home() {
  const [dogs, setDogs] = useState([])

  const addDogList = (dog) => {
    setDogs([...dogs, dog])
  }

  return (
    <main className={styles.main}>
    <Dog addDogList={addDogList}/>
    <ItemList dogs={dogs} />
    </main>
  );
}
