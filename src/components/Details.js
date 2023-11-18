import React, { useState } from 'react'
import detailpic1 from '../assets/Detail11.png';
import detailpic2 from '../assets/Detail2.png';
import detailpic3 from '../assets/detail3.png';
import detailpic4 from '../assets/detail4.png';
import detailpic5 from '../assets/detail5.png';
import detailpic6 from '../assets/detail6.png';
import detailpic7 from '../assets/detail7.png';
import detailpic8 from '../assets/detail8.png';
import styled from 'styled-components';

import { app } from '../firebase';
import {getAuth,signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom';

function Details({ setUserLogged, userLogged }) {

    const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
    const Heading = styled.div`
// line-height: vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2vh;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  `

  const BlackTxt1 = styled.div`
  color: #282828;
  font-size: 2.5vw;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;

  `
const GreenTxt1 = styled.div`
color: #43AC44;
font-size: 4.5vw;
font-weight: 900;
font-family: 'Montserrat', sans-serif;
`


const Img = styled.div`
padding-bottom: 2vh;
img {
    width: 100%; 
    height: auto;
  }
`;

const BlackTxt2 = styled.div`
color: #282828;
font-size: 2vw;
font-weight: 800;
text-transform: uppercase;
`;

const GreenTxt2 = styled.div`
color: #43AC44;
  font-size: 3vw;
  font-weight: 900;
  text-transform: uppercase;`

  const Text = styled.div`
  text-align: center;
  padding: 0 24vw 4vw;
  color: #232323;
  font-size: 1.5vw;
  font-weight: 600;
  `;

  const RedBtn = styled.div`
  background-color: #D20000;
  width: 25vw;
  height: 10vh;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  font-weight: 700;
  padding: 1.5vh 0;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  cursor:pointer;


  @media screen and (max-width: 570px) {
    padding: 0.5vh 0;
     height: 5vh;
  }
`;

  const Text2 = styled.div`
  color:  #121212;
  font-size: 1.5vw;
  font-weight: 800;
  `
  const Text3 = styled.div`
  text-align: center;
  padding: 0 24vw 4vw;
  color: #232323;
  font-size: 2.5vw;
  font-weight: 600;
  text-transform: capitalize;
  `;

  const GreenTxt3 = styled.div`
  color: #0B9443;
  font-size: 2vw;
  /* line-height: 23.08px; */
  font-weight: 800;
  text-transform: uppercase; 
  `;

  const Text4 = styled.div`
  text-align: center;
  font-size: 2vw;
  padding: 0 24vw 4vw;
  color: #232323;
  font-weight: 600;
  text-transform: capitalize;
  `;

  const ImgTxtContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row ;
  align-items: center;
  justify-content: center;
  padding-bottom: 8vh; 

  @media screen and (max-width: 570px) {
    flex-direction:column;
  }
  `;

  const Container = styled.div`
  padding-left: 2vw;
  flex: 0.4;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content:center ;`

  const Text5 = styled.div`
  font-size: 3vw;
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  `;

  const Text6 = styled.div`
  font-size: 1.5vw;
  font-weight: 600;
  color: #232323  ;
  text-transform: capitalize;
  `;

  const TxtContainer = styled.div`
  text-align: center;
  `;

    const BlackTxt3 = styled.div`
    font-size: 2vw;
  font-weight: 800;
  color: #232323  ;
  text-transform: capitalize;
  `;

  const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 13vw;` 

const BlackTxt4 = styled.div`
font-size: 2.5vw ;
color: #121212;
font-weight: 800;
text-transform: uppercase;
text-align: center;
`;

const GreenTxt4 = styled.div`
text-transform: uppercase;
  font-size: 3vw ;
  color: #43AC44;
  font-weight: 900;
  text-align: center;`

const Footer = styled.div`
font-size: 1.5;
color: #2D2D2D;
padding-bottom: 4vh;`


const auth = getAuth(app)
const [error, setError] = useState(null);
const navigate = useNavigate();

async function handleSignOut(){
 await signOut(auth);
 localStorage.removeItem('isLoggedIn');
  setUserLogged(false);
  navigate('/');
}

  return (
    <Wrapper >
        <Heading>
            <BlackTxt1>The 6 Day Accelerator</BlackTxt1>
            <GreenTxt1 >IS COMPLIMENTARY!</GreenTxt1>
        </Heading>
        
        <Img >
        <img src={detailpic1}/>
        </Img>

        <Heading >
            <BlackTxt2>In the 6-day</BlackTxt2>
            <GreenTxt2 >ACCELERATOR</GreenTxt2>

        </Heading>
            <Text>You'll get the support of hundreds of other people just like you that are looking to build profitable passive income streams online! These people will help encourage you every step of your online business journey.</Text>

        <Img >
        <img src={detailpic2} style={{objectFit:'cover'}}/>
        </Img>

        <RedBtn >Yes, I'm In</RedBtn>

        <Text2>Join For Free - No Charge!</Text2>

        <Heading >
            <BlackTxt2 >This is for</BlackTxt2>
            <GreenTxt2 > YOU IF YOU</GreenTxt2>
        </Heading>

        <Text3>Have already tried to build an online business before and<span style={{color:'#0B9443', fontWeight:800}}> failed.</span></Text3>

        <Img>
        <img src={detailpic3} style={{objectFit:'cover'}}/>
        </Img>

        <Text3>Are looking to transition away from a J-O-B and <span style={{color:'#0B9443', fontWeight:800}}>replace</span> your primary income source</Text3>

        <Img>
        <img src={detailpic4} style={{objectFit:'cover'}}/>
        </Img>

        <Heading >
            <GreenTxt3 >if you currently</GreenTxt3>
            <GreenTxt3> are interested</GreenTxt3>
        </Heading>

        <Text4>in starting a 6 figure online supplement<span style={{color:'#0B9443', fontWeight:800}}> drop-shipping business</span>, automating it and working from the comfort of your own home part-time.</Text4>

        <Img>
        <img src={detailpic5} style={{objectFit:'cover'}}/>
        </Img>

        <ImgTxtContainer>
            <Img>
            <img src={detailpic6} style={{objectFit:'cover'}}/>
            </Img>

            <Container>
                <Text5>if you</Text5>
                <Text6>Want expert, credible sound <span style={{color:'#00A342'}}> guidance</span> to filter all the other<span style={{color:'#3DA55C', fontWeight:'800'}}> "noisy marketers".</span></Text6>
                <Text6>telling you what to do</Text6>
            </Container>
        </ImgTxtContainer>

        <TxtContainer>
        <Text5 >if you</Text5>
        <Text6 >Are ready to make real life-changing <span style={{color:'#3DA55C',fontWeight:'800'}}>Progress</span> </Text6>
        <BlackTxt3>in just 6-Days!</BlackTxt3>
        </TxtContainer>

        <Img >
            <img src={detailpic7} style={{objectFit:'cover'}}/>
            </Img>


        <ImgTxtContainer>
            <TextContainer >
                <BlackTxt4 >ready to jump into the</BlackTxt4>
                <GreenTxt4 >Nutrafunnels</GreenTxt4>
                <GreenTxt4>Accelerator?</GreenTxt4>
                <RedBtn onClick={()=>handleSignOut()}> Sign Out</RedBtn>
                <Text2 >Join For Free - No Charge!</Text2>


            </TextContainer>

            <div>
                <Img>
                <img src={detailpic8} style={{objectFit:'contain'}}/>
                </Img> 
            </div>
        </ImgTxtContainer>

        <Footer>
            Copyrights © 2022 NutraFunnels. All Rights Reserved
        </Footer>

    </Wrapper>
  )
}

export default Details