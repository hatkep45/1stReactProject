//import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import usefetch from "./usefetch";

const Home =() =>{
  const{error,isPending,data: blogs} =usefetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs}title='All Blogs!'/>}
    </div>
  );
}
 
export default Home;