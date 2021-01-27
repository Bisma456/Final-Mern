import React, { useEffect, useState } from 'react';
import PostUI from "./Users/PostUi";
import axios from 'axios';

const Home = () => {
  const [state, setstate] = useState([]);
    const [msg, setMsg] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/api/posts')
            .then((res) => {
                console.log(res.data.data);
                setstate(res.data.data);
            })
            .catch((e) => console.log(e));
        setMsg('');
    }, []);
  return (
    <>
    <div className="bg-image">
      <h3 className="title-text pl-5">
         MERN Blog App 
      </h3>
    </div>
    <br />
    <br />
    {state.map((item, index)=>(
      <div>
      <PostUI item={item} index={index}/>
    </div>
    ))}
    
    </>
  );
};

export default Home;
