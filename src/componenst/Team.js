import styled from "styled-components";
import Slider from "./Slider";
// import { useGlobalContext } from "../context";

const Team=()=>{
    const slides=[
        {url: "https://agumentiktask2023.netlify.app/Team/img1.svg", title: 'Person1'},
        {url: "https://agumentiktask2023.netlify.app/Team/img2.jpg", title: 'Person2'},
        {url: "https://agumentiktask2023.netlify.app/Team/img3.jpg", title: 'Person3'},
        {url: "https://agumentiktask2023.netlify.app/Team/img4.jpg", title: 'Person4'},
        {url: "https://agumentiktask2023.netlify.app/Team/img5.jpg", title: 'Person5'},

    ]
    return (
        <Wrapper>
        <div className="mainTeam">
            <div className="containerInside">
                <h2 className="heading">Our Team</h2>
                <p className="insideThought">Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platoneom eos</p>         
            </div>
            <div className="container grid grid-two-column">
                    <div className="containeStyles">
                        <Slider slides ={slides}/>
                    </div>

                    <div className="c2">
                        <h1>Sebastian Bennett</h1>
                        <h2>Founder,Lead Photographer,CEO</h2>
                        <p>Lorem ipsum dolor sir amet, ut dicat euismod invidunt pro,ne his dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera integre suavitate per an, alienum phaedrum te sea. Ex sea causae dolores, nam et doming dicunt feugait. Ea mel scripta aperiri postulant. Ut sed affert audire</p>
                        <img src="./icon/social.svg" alt="" />
                    </div> 
            </div>
        </div>

        </Wrapper>
    )
};


const Wrapper=styled.section`

    .containerInside{
    max-width: 70rem;
    margin: 0 auto 5rem;
    ${'' /* margin-top:10rem; */}
    }
    .containerInside p{
        display:flex;
        justify-content: center;
        font-size:1.5rem;
        width:100%;
        padding:0 15rem;
        text-align:center;
    }

    .heading {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 6rem;
      text-transform: capitalize;
      color: black;
    }

    .containeStyles{
        width:598px;
        height:420px;
        margin:0 0 0 10rem;        
    }

    .c2{
        height:100%;
        position:relative;
        h1{
            font-size:2.5rem;
            color:#3282AD;
            margin-bottom:2.5rem;
        }
        h2{
            text-align:left;
            font-size:2rem;
            margin-bottom:2.5rem;
        }
        p{
            margin-right:14rem;

        }
        img{
            position:absolute;
            bottom:0px;           
        }
    }
    @media (max-width: ${({ theme }) => theme.media.tab}) {
        .grid {
            gap: 3rem;
        }

        ${'' /* .containerInside p{
        display:flex;
        justify-content: center;
        font-size:1.5rem;
        width:100%;
        padding:0 15rem;
        text-align:center; */}

        .containeStyles{
            width:350px;
            height:270px;
            margin:0 0 0 10rem;
        }
        .c2{
        height:100%;
        position:relative;
        h1{
            font-size:2rem;
            color:#3282AD;
            margin-bottom:1rem;
        }
        h2{
            text-align:left;
            font-size:1.7rem;
            margin-bottom:1rem;
        }
        p{
            margin-right:1rem;
            font-size:1rem;

        }
        img{
            position:absolute;
            bottom:0px;           
        }
    }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
            gap: 4rem;

        }

        ${'' /* .containerInside p{
        display:flex;
        justify-content: center;
        font-size:1.5rem;
        width:100%;
        padding:0 15rem;
        text-align:center; */}
        ${'' /* .mainTeam{
            height:500px;
        } */}
        .containeStyles{
            width:250px;
            height:300px;
            margin:0 0 0 10rem;
        }
        .c2{
        height:190px;
        position:relative;
        h1{
            font-size:2rem;
            color:#3282AD;
            margin-bottom:1rem;
        }
        h2{
            text-align:left;
            font-size:1.7rem;
            margin-bottom:1rem;
        }
        p{
            margin-right:3rem;
            font-size:1rem;

        }
        img{
            position:absolute;
            bottom:0px;           
        }
    }
    }
    
`;

export default Team;

