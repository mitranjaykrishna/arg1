import styled from "styled-components";
import ImageCard from "./ImageCard";

const CustomerReview=()=>{
    return (
      <Wrapper>
        <div className="main container">
            <div className="containerInside">
                <h2 className="heading">What customer's are saying?</h2>
                <p >Take a look at what our customer's are saying. At Nature we not only provide you with services but also we provide you with valuable experiences for your valuable time.</p>
                
                    <div className="gridMain grid grid-four-column" > {/*grid main*/}

                        <div className="c1">
                            <ImageCard imgUrl='./imageCard/img1.svg'/>
                        </div>

                        <div className="c1 c2">
                        <ImageCard imgUrl='./imageCard/img2.svg'/>
                        </div>

                        <div className="c3">
                        <ImageCard imgUrl='./imageCard/img3.svg'/>
                        </div>

                        <div className="c4">
                        <ImageCard imgUrl='./imageCard/img4.svg'/>
                        </div>

                    </div>

                    <div className="message">
                        <div className="messageImg">
                            <img src="./message/user.jpg" alt="" />
                        </div>
                        <div className="showMessage">
                            <p>"Great place  to spend your vacation while exploring different experiences."</p>
                        </div>
                    </div>
                 
            
            </div>

            
        </div>

      </Wrapper>  
    );
};

const Wrapper=styled.section`

    padding: 9rem 0 0 0;

    

    .containerInside{
        background-color:#F7FDFF;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 11rem 0 12rem;
    }
    
    .containerInside p{
        font-size:1.5rem;
        width:100%;
        padding: 0 60rem 0 0rem;
        ${'' /* padding:0 0; */}
        
    }

    .heading {
      font-size: 2.9rem;
      font-weight: 700;
      margin-bottom: 2.5rem;
      text-transform: capitalize;
      color: black;
    }

    .gridMain{
        height:650px;
        width:100%;
        gap:5rem;
    }

    .c1{
        display:flex;
        flex-direction:column;
        justify-content:end;
    }
    .c2{
        margin-top:10rem;
        justify-content:center;
    }
    .c3{
        margin-top:10rem;
        justify-content:center;

    }
    .c4{
        display:flex;
        flex-direction:column;
        justify-content:start;
    }

    .message{
        background-color:white;
        box-shadow: 1px 1px 500px black;
        width:512.67px;
        height:110px;
        display:grid;
        grid-template-columns:.5fr 2fr;
        gap:2rem;
        border-radius:10px;
        position:relative;
        left:40rem;
        transform: translateY(-50%);
        ${'' /* border-bottom: 10px solid blue */}

        .messageImg{
            margin:0 1.5rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
            

        }

        .messageImg img{
            height:6rem;
            weight:6rem;
            border-radius:100%;

            
        }

        .showMessage{
            margin:0 1.5rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
        }
        .showMessage p{
            margin:0;
            padding:0;
            font-size:2rem;
            text-align:center;
        }
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
        ${'' /* .grid {
            gap: 7.2rem;
        } */}

        .gridMain{
            height:500px;
            width:100%;
            gap:5rem;
        }

        .message{
        background-color:white;
        box-shadow: 1px 1px 500px black;
        width:350.67px;
        height:70px;
        display:grid;
        grid-template-columns:.5fr 2fr;
        gap:.5rem;
        border-radius:10px;
        position:relative;
        left:30rem;
        transform: translateY(-50%);
        ${'' /* border-bottom: 10px solid blue */}

        .messageImg{
            margin:0 1rem;
            display:flex;
            
            flex-direction:column;
            justify-content:center;
            

        }

        .messageImg img{
            height:3rem;
            weight:3rem;
            border-radius:100%;

            
        }

        .showMessage{
            margin:0 1rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
        }
        .showMessage p{
            margin:0;
            padding:0;
            font-size:1rem;
            text-align:center;
        }
    }

        .containerInside{
        background-color:#F7FDFF;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 6rem 0 5rem;
    }

        .containerInside p{
        display:flex;
        justify-content: center;
        font-size:1.5rem;
        width:100%;
        padding:0 7rem 0 0;
    }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
            gap: 7.2rem;
        }

        .message{
        background-color:white;
        box-shadow: 1px 1px 500px black;
        width:100%;
        height:70px;
        display:grid;
        grid-template-columns:.5fr 2fr;
        gap:1rem;
        border-radius:10px;
        position:relative;
        left:0rem;
        transform: translateY(10%);
        ${'' /* border-bottom: 10px solid blue */}

        .messageImg{
            margin:0 1rem;
            display:flex;
            
            flex-direction:column;
            justify-content:center;
            

        }

        .messageImg img{
            height:8rem;
            weight:8rem;
            border-radius:100%;

            
        }

        .showMessage{
            margin:0 1rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
        }
        .showMessage p{
            margin:0;
            padding:0;
            font-size:1.4rem;
            text-align:center;
        }
    }

        .gridMain{
            height:100%;
            width:100%;
            gap:5rem;
        }
    }

`

export default CustomerReview;