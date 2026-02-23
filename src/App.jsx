import { useState } from "react";
import "./App.css";
import { PostComponent } from "./Post";
import { NotificationComponent } from "./Notification";
import { NavbarComponent } from "./Navbar";

function App() {

  // const [posts, setPosts] = useState([]);


  // const postComponents = posts.map(post => <PostComponent
  //   name={post.name}
  //   subtitle={post.name}
  //   time={post.time}
  //   image={post.image}
  //   description={post.description}
  // />)

  // function addPost() {
  //   setPosts([...posts, {
  //     name: "Gaurav",
  //     subtitle: "1000 followers",
  //     time: " 2m ago",
  //     image:
  //       "https://images.pexels.com/photos/29182989/pexels-photo-29182989.jpeg",
  //     description:
  //       "Is your infrastructure keeping pace with your AI ambitions?",
  //   }])

  // }

  // return (
  //   <div style={{ background: "#dfe6e9", height: "100vh" }}>
  //     <button onClick={addPost}>Add Post</button>
  //     <div style={{ display: "flex", justifyContent: "center" }}>
  //       <div>
  //         <div>
  //           {postComponents}
  //         </div>
  //         <br />
  //       </div>
  //     </div>
  //   </div>
  // );

 return <div>
  <div>
    {/* <NotificationComponent /> */}
    <NavbarComponent />
  </div>
 </div>

 
}

export default App;
