// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// const Admin = () => {

//   //Handle frontEnd
//   //Input
//   const [inputVal, setInputVal] = useState({
//     title: "",
//     body: "",
//     image:"",
//     posts:[]
//   })

//   const [image,setImage]=useState("");

//   const handleChange = ({target}) => {
//     const {name,value}=target;
//     setInputVal({
//       ...inputVal,
//       [name]: value
//     })
//     console.log(name + " " + value)
//   }
//   //Submit

//   const submit= async(e)=>{
//     e.preventDefault()

//     //Sending data to server
//     const payload={
//       title:inputVal.title,
//       body:inputVal.body,
//       image:image
//     }
//     try{
//       await axios.post("/api/save",payload)
//       getBlogPost(inputVal.posts);
//       console.log("send to server success")  
//     }
//     catch (error){
//       console.log("error here");
//     }
//   }

//   const getBlogPost=async ()=>{
//     try{
//       const response=await axios.get('/api');
//       const data=response.data;
//       setInputVal({
//         ...inputVal,
//         posts:data
//       })
//       console.log(data[0]);
//     }
//     catch(error)
//     {
//       console.log("error in gettong");
//     }
//   }

//   useEffect(()=>{
//     getBlogPost();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[])

//   const display=(posts)=>{
//     if(!posts.length) return null;
//     return posts.map((post, index)=>(
//       <div>
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//         <img src={post.image} alt=""/>
//       </div>
//     ))
//   }


//   //image
//   const convertToBase64=(e)=>{
//     console.log(e);
//     const reader=new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload=()=>{
//       console.log(reader.result);  //base64 String
//       setImage(reader.result);
//     }
//     reader.onerror=error=>{
//       console.log("error in image converbase64")
//     }
//   }



//   //React Admin frontEnd
//   return (
//     <div>
//       <form action="POST">
//         {/* title */}
//         <input
//           type='text'
//           name='title'
//           value={inputVal.title}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />
//         {/* body */}
//         <textarea
//           name='body'
//           onChange={handleChange}
//           value={inputVal.body}
//           cols='30'
//           rows='10'
//           placeholder="Enter Body Here"
//         />

//         <input
//           title="submit"
//           onClick={submit}
//           value="Submit"
//         />
//       </form>
      
//       <div className="blog">
//         {display(inputVal.posts)}
//       </div>


//       <form action="POST">
//         {/* title */}
//         <input accept="image/*"
//           type="file"
//           onChange={convertToBase64}
//         />

        



//         <input
//           title="submit"
//           onClick={submit}
//           value="Submit"
//         />
//       </form>

//     </div>

//   );
// };

// export default Admin;
