import React, { useState } from "react";
import axios from 'axios';
import Resizer from "react-image-file-resizer";

// width: 601px;
// height: 355px;


const CertificateAdd=()=>{

    const [image,setImage]=useState("");

    const resizeFile = (file) =>
        new Promise((resolve) => {
        Resizer.imageFileResizer(
        file,
        601,
        355,
        "JPEG",
        1200,
        0,
        (uri) => {
            resolve(uri);
        },
        "base64"
        );
    });
    

    const convertToBase64=async (e)=>{

        try {
            const file = e.target.files[0];
            const image = await resizeFile(file);
            setImage(image);
            // console.log(image);
          } catch (err) {
            console.log(err);
          }
        
        // const uploadImage=e.target.files[0]

        // const reader=new FileReader();
        // reader.readAsDataURL(uploadImage);
        // reader.onload=()=>{
        //     console.log(reader.result);
        //     setImage(reader.result);
        // }
        // reader.onerror=error=>{
        //     console.log("error at Image ConvertBase64")
        // }
    }

    const add=async(e)=>{
        e.preventDefault();

        //Sending data to server
        const payload={
            image:image
        }
        try{
            await axios.post('/save',payload)
            // if(!alert('Uploaded succesfully')){window.location.reload();}
            // setImage("");
            console.log("Image Data send to server")
        }
        catch(error)
        {
            console.log('Image add send error');
        }

    }
    return(
        <div>
            <form action="POST">
                <div>
                    <input 
                        accept="image/*"
                        type="file"
                        onChange={convertToBase64}
                    />
                    <button type="submit" onClick={add}>Add Certificate</button>
                    <br/>
                    <img src={image} alt=""/>

                </div>
            </form>
        </div>
        
    )

}

export default CertificateAdd;