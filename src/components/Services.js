import React from 'react'
import mlm from '../assets/multi-level-marketing (1) 1.png'
import facebook from '../assets/digital-marketing 1.png';
import seo from '../assets/pay-per-click 1.png';
import buying from '../assets/acceleration (1) 1.png';
import market from '../assets/bullhorn 1.png';
import wordpress from '../assets/server 1.png'
import styled from 'styled-components';

function Services() {

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Join = styled.div`
font-size: 18px;
  font-weight: 800;
  color: #121212;
  padding-top:5vh;


  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 26px;
  }
`
const Heading = styled.div`
font-size: 24px;
  font-weight: 900;
  color: #0B9443;
  line-height: 34px;
  padding: 2vh 10vw;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`
const Conatiner = styled.div`
display: flex;
flex-direction: row;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
  `

const PictureContainer = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 29px;
  font-weight: 700;
  padding-bottom: 10vh;
  
  
  `
const Img = styled.img`

  max-width:100%;
  height:auto;

  @media screen and (max-width: 570px) {
   width:50%;
  }
`

  
const Text = styled.div`
padding: 2vh 5vw;
text-align: center;
font-size: 16px; 

@media (min-width: 320px) {
  font-size: 12px; 
}

@media (min-width: 768px) {
  font-size: 16px; 
}

@media (min-width: 1440px) {
  font-size: 22px; 
}

@media (min-width: 1441px) {
  font-size: 29px; 
}
`;


  const BigText = styled.div`
  font-size: 10vw;
  font-weight: 900;
  color: #0B9443;
  `;
  return (
    <Wrapper >
        <Join >Join For Free - No Charge!</Join>

        <Heading>THE BEST PART IS THAT THERE'S</Heading>
    
        <Conatiner >
            <Column >


                <PictureContainer  style={{paddingTop:"7vh"}}>
                    <Img src={mlm} />
                    <Text >MLM RECRUITING</Text>
                    
                    <div className='line'></div>
                </PictureContainer>

                <PictureContainer >
                    <Img src={facebook} />
                    <Text > FACEBOOK ADS</Text>

                    
                </PictureContainer>

            </Column>
                
            <Column>
                <PictureContainer style={{paddingBottom:"0"}}>
                    <Img src={seo} />
                    <Text >SEO/PPC/YOUTUBE</Text>
                    <div className='line'></div>

                </PictureContainer>
                <div style={{display:'flex', alignItems:'center', justifyContent:"space-around"}}>
                    <div style={{border:"1px solid #D4D3D3", maxHeight:"30%",height:"8vh"}}></div>
                    <BigText>NO</BigText>
                    <div style={{border:"1px solid #D4D3D3", maxHeight:"30%",height:"8vh"}}></div>
                </div>

                <PictureContainer >
                    <div className='line'></div>
                    <Img src={buying} />
                    <Text>NO BUYING INVENTORY</Text>
                </PictureContainer>

            </Column>

            <Column>
                 <PictureContainer style={{paddingTop:"7vh"}}>
                    <Img src={market} />
                    <Text >AFFILIATE MARKETING</Text>
                    <div className='line'></div>

                </PictureContainer>

                <PictureContainer>
                    <Img src={wordpress} />
                    <Text >WORDPRESS OR BLOGGING</Text>
                </PictureContainer>

            </Column>
        </Conatiner>
    
    </Wrapper>
    
  )
}

export default Services