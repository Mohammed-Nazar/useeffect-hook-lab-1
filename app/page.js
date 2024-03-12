'use client'
import { useEffect, useState } from 'react'
import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
  const [dogsData, setDogsData] = useState();
  const [inputText, setInputText] = useState("");

  async function getDogs() {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random/${inputText? inputText: "1"}`);
    const data = await res.json()
    setDogsData(data.message);
  }

  useEffect(()=>{
    getDogs();
  }, [])



   return (
    <div className="card">
    <Form setNumberOfDogs={setInputText} inputText={inputText} getDogs={getDogs}/>
      <DogList dogsList={dogsData} />
    </div>
  );
}

