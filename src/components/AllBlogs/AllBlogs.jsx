import { useEffect } from "react";
import { useState } from "react";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h2>{blogs}</h2>
        </div>
    );
};

export default AllBlogs;