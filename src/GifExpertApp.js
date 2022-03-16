import React ,{ useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['unos']);

  return (
    <>
      <h2> GifExpertApp</h2>
      <AddCategory setCategories= {setCategories}/>
      <hr></hr>
    
          {
                categories.map(category => {
                    return <GifGrid category={category} key={category}/>
                })
          }
    </>
  );
};
