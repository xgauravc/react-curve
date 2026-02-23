import { useEffect, useState } from "react";

export function NavbarComponent() {
  const [currentPost, setCurrentPost] = useState(1);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState({})

  useEffect(function(){
    setLoading(true);
    console.log("useEffect is calld")
    fetch("https://jsonplaceholder.typicode.com/posts/"+ currentPost)
    .then(async res => 
        {
            const json = await res.json();
            setPosts(json);
            setLoading(false);
        });

    console.log("posts",posts.title)
  },[currentPost])

  return (
    <div>
      <button onClick={function () {
        setCurrentPost(1)
      }} style={{color: currentPost == 1 ? "red" :"black"}}>Post #1</button>
      <button onClick={function () {
        setCurrentPost(2)
      }} style={{color: currentPost == 2 ? "red" :"black"}}>Post #2</button>
      <button onClick={function () {
        setCurrentPost(3)
      }} style={{color: currentPost == 3 ? "red" :"black"}}>Post #3</button>
      <button onClick={function () {
        setCurrentPost(4)
      }} style={{color: currentPost == 4 ? "red" :"black"}}>Post #4</button>

      <br />
      {loading ? "Loading ... " :posts.title}
    </div>
    
  );
}
