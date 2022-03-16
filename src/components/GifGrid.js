import React from 'react'
// import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GifGrid = ({category}) => {

    // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);
    // useEffect(() => {
    //     getGifs(category).then(
    //             setImages
            
    //     );
      
    // }, [category])
    


    // getGifs(category);
  return (
      <>
    <h3 className='animate__animated animate__fadeIn'> {category} </h3>
    {loading && <p className=' animate__animated animate__flash '>Loading...</p>}
    <div className='card-grid animate__animated animate__fadeInUp animate__delay-2s"'>
        { images.map((img) =>  <GifGridItem key={img.id} {...img} /> )}
    </div>
      </>
  )
}
