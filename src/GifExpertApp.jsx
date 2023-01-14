import { useState } from "react";
import {AddCategory, GifGrid, NothingToShow} from "./components";

const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories ])
  }

  return (
    <div
    className="bg-gradient-to-b from-slate-900 to-slate-500 min-h-screen flex items-center flex-col"
    >
    <h1 
      className="font-extrabold text-9xl text-center text-transparent py-4 uppercase bg-clip-text bg-gradient-to-l from-purple-400 to-violet-600 font-paytone"
    >Gifeate</h1>
    <div className="container flex flex-col justify-center items-center ">
      <AddCategory 
        onNewCategory={onAddCategory}
      />
        <div className="container">
          {
            categories.length === 0 ? (<NothingToShow />) : (
              categories.map(category => (
                <GifGrid key={category} category={category} />
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default GifExpertApp