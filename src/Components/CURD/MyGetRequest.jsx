import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MyGetRequest = () => {
    const [getPhotodata, setGetPhotodata] = useState()

    const handlegetdata =  async () => {
        try {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos")
            setGetPhotodata(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handlegetdata()

    }, [])
    

  return <>
  {JSON.stringify(getPhotodata)}
  {/* {

  } */}
  </>
}

export default MyGetRequest

