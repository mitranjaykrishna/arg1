import React from "react";
import styled from "styled-components";

const ImageCard=(props)=>{
    return (
        <Wrapper>
        <div>
            <img src={props.imgUrl} alt="" />
        </div>
        </Wrapper>
    )
}

const Wrapper=styled.section`
    div{
        ${'' /* border-radius:50rem; */}
        transition: all 0.8s linear;
        img{
            width:100%;
            height:100%;
            border-radius:1rem;
        }

        &:hover{
            transform: scale(1.1,1.1);
           

            &:hover::after{
                width:100%
            }

            &:hover img{
                transform: scale(1,1);
                box-shadow: 1px 1px 100px black;
            }
        }
    }
`

export default ImageCard;