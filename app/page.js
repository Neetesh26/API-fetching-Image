// import React from 'react'

// const page = () => {
//   const marks = 98;
//   return(
//     <div>hello kaise hoo neetesh!! your marks is : {marks}</div>
//   )
// }

// export default page





// "use client"
// import React, {useState} from "react"

// const page = ()=>{
//   const [marks , setmarks] = useState(50)
//   return(
//     <>
//     <h1>your marks is: {marks}</h1>
//     <button onClick={()=>{
//       setmarks(80)
//     }} >update</button>
//     </>
//   )
// }
// export default page





// "use client"

// import React , {useState} from "react";
// import Header from "@/Components/Header"

// const page =() =>{
//  const [user , setUser] = useState("neetesh")
//   return(
//     <>
//     <Header user ={user} />
//     <h1>{user}</h1>
//     </>
//  )
// }
// export default page






//  API FETCHING-------IMAGES
"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";

const page = () => {
  const [images, setimages] = useState([]);
  const getimages = async () => {
    try {
      const res = await axios.get("https://picsum.photos/v2/list");
      const data = res.data;
      setimages(data);
      // console.log(images)
    } catch (error) {
      console.error("error fetching not found images");
    }
  };

  return (
    <div>
      <button onClick={getimages} className="px-4 py-2 bg-green-400 rounded-xl">
        Get images
      </button>
      <div className="p-10 flex flex-wrap">
        {images.map((elem, i) => {
          return (
            <img
              key={i}
              src={elem.download_url}
              width={250}
              height={300}
              className="m-10 flex-wrap rounded-md object-cover  inline-block"
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;

//Two way binding------->
// "use client"
// import React , {useState} from "react";

// const page =()=>{
//   const [username , setusername] =  useState("");

//   return(
//     <>
//        <h2>
//         enter your name :
//       </h2>
//       <form>
//         <input type="text" className="border-2 border-zinc-600 px-4 py-2 text-black" value={username} onChange={(e)=>{
//           // console.log(e.target.value)
//           setusername(e.target.value)
//           }}
//         />
//       </form>
//   </>
//   )
// }
// export default page





// import React from "react";

// const about = () => {
//   return (
//     <div>
//       <h1>hello</h1>
//       <a href="About">About</a>
//     </div>
//   );
// };

// export default about;
