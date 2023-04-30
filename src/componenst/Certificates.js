// import React, { useState } from "react";
import styled from "styled-components";
// import { useGlobalContext } from "../context";
import axios from 'axios';
import { useEffect, useState } from "react";


const Certificate=() =>{

    // const {certificates}=useGlobalContext();
    // console.log(services);
    // const [isReadMore, setReadMore]=useState(true);

    // const toggleOver=()=>{
    //     setReadMore(!isReadMore);
    // }

    const [getVal,setGetVal]=useState({
        posts:[]
    })
    
    const getCertificatePost=async ()=>{
        try{
          const response=await axios.get('/dataCertificate');
          const data=response.data;
          setGetVal({
            posts:data
          })
        //   console.log(getVal.posts);
        }
        catch(error)
        {
          console.log(error);
        }
      }

      useEffect(()=>{
        getCertificatePost();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);





    return (
        <>
            <Wrapper className="section">
            <div className="containerInside">
                <h2 className="heading"> Certificate  <p className="insideThought">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </p></h2>           
            </div>
                <div className="container grid grid-two-column">
                    {
                        (getVal.posts).map((curElem) => {
                            const {id,image} =curElem;
                            return(
                                <div key={id} className="card">
                                    {/* <figure > */}
                                        <img src={image} alt="" />
                                    {/* </figure> */}
                                </div>
                            );
                        })
                    }
                </div>
            </Wrapper>
        </>
    );

};

const Wrapper = styled.section`
    padding: 0 0 9rem;
    margin-top:10rem;
    background:white;

    .containerInside{
    max-width: 70rem;
    margin: 0 auto;
    ${'' /* margin-top:10rem; */}
    }

    .heading {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 6rem;
      text-transform: capitalize;
      color: black;
    }
    .insideThought{
        display:flex;
        justify-content: center;
        font-size:1.5rem;
    }

    .card{
        border: 0.1rem solid rgb(170 170 170/40%);
        background-color: ${({theme})=> theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({theme}) => theme.colors.shadowSupport};
        ${'' /* height:100%; */}
        transition: all 0.8s linear;

        &:hover{
            transform: scale(1.1,1.1);
           

            &:hover::after{
                width:100%
            }

            &:hover img{
                transform: scale(1,1);
                ${'' /* box-shadow: 1px 1px 100px black; */}
            }
        }

        .card-data{
            padding: 0 2rem;
            ${'' /* height:15rem; */}
        }
            
        }  

        img{
            width:100%;
            height:100%;
        }  
        .read-or-hide{
        color: ${({theme})=> theme.colors.helper};
        cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
        ${'' /* .grid {
            gap: 7.2rem;
        } */}

        .containerInside{
        max-width: 100%;
        margin: 0 auto;
        ${'' /* margin-top:10rem; */}
        }

        .heading {
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 5rem;
        text-transform: capitalize;
        color: black;
        }
        .insideThought{
            display:flex;
            justify-content: center;
            font-size:1.4rem;
            margin:0 4rem 0 4rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {

        .containerInside{
        max-width: 100%;
        margin: 0 auto;
        ${'' /* margin-top:10rem; */}
        }

        .heading {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 3rem;
        text-transform: capitalize;
        color: black;
        }
        .insideThought{
            display:flex;
            justify-content: center;
            font-size:1.2rem;
            margin:0 3rem 0 3rem;
        }

        
    }

`;

export default Certificate;