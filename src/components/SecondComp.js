import React from 'react'
import frame from '../assets/Frame.png'
import styled from 'styled-components'


function SecondComp() {

  const Container = styled.div`
  padding-top: 3vh;
  background-color: #F6F6F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

  const Heading = styled.div`
  font-size: 3vw;
  font-weight: 800;
  text-align: center;
  `;

  const GreenHeading = styled.div`
  font-size: 6vw;
  font-weight: 900;
  color: #5DBC39;
  text-align: center;

  `
  const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  `

  const Img = styled.img`
  height:auto;
  width:100%;
  object-fit:cover;


  @media (max-width: 1512px) {
    width: 70%; /* Adjust the width as needed for smaller screens */
  }

  @media (max-width: 1170px) {
    width: 40%; /* Adjust the width as needed for smaller screens */
  }
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
  position:relative;
  top:25px;
  font-family: 'Montserrat', sans-serif;


  @media screen and (max-width: 570px) {
    padding: 0.5vh 0;
     height: 5vh;
  }
`;

  const Spy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  position: relative;
  bottom: 490px;
  right: 220px;
  
  @media (max-width: 1512px) {
    bottom: 350px;
    right: 50px;
  }

  @media (max-width: 1170px) {
    bottom: 220px;
    left:90px;
    }
    @media (max-width: 960px) {
      bottom: 150px;
      left:-20px;
      }
      @media (max-width: 640px) {
        bottom: 120px;
        left:0px;
        }

      @media (max-width: 425px) {
          bottom: 100px;
          left:40px;
          }

  `

  const SpyText = styled.div`
  font-size: 44px;
  font-weight: 700;
  color: #25C5D9;
  @media (max-width: 1170px) {
    font-size: 22px;
    }
    @media (max-width: 960px) {
      font-size: 15px;
      }
      @media (max-width: 740px) {
        font-size: 12px;
        }`

  const Funnel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  position: relative;
  text-align:center;
  bottom: 100px;
  right: 270px;
  
  @media (max-width: 1512px) {
    bottom: 120px;
    right: 160px;
  }

  @media (max-width: 1170px) {
    bottom: 90px;
    left:-30px;
    }

    @media (max-width: 960px) {
      bottom: 50px;
      left:-60px;
      }

      @media (max-width: 740px) {
        bottom: 40px;
        left:-50px;
        }
    
        @media (max-width: 425px) {
          bottom: 20px;
          left:-10px;
          }
  `

  const FunnelText =styled.div`
  font-size: 44px;
  font-weight: 700;
  color: #FFAC1E;
  
  
  @media (max-width: 1170px) {
    font-size: 22px;
    }
    @media (max-width: 960px) {
      font-size: 15px;
      }
      
      @media (max-width: 740px) {
        font-size: 12px;
        }`;
    

  const Outsource = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 50px;
  right: 30px;

  @media (max-width: 1170px) {
    bottom: 30px;
    left:0px;
    }
  
    @media (max-width: 960px) {
      bottom: 10px;
      left:0px;
      }  

      
  `

  const OutsourceText = styled.div`
  font-size: 44px;
  font-weight: 700;
  color: #25C5D9;
  
  @media (max-width: 1170px) {
    font-size: 22px;
    }
    @media (max-width: 960px) {
      font-size: 15px;
      }
      
      @media (max-width: 740px) {
        font-size: 12px;
        }`;

const TrafficOutsource = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
position: relative;
bottom: 120px;
left: 240px;

@media (max-width: 1512px) {
  bottom: 80px;
  left: 120px;

    @media (max-width: 1170px) {
    bottom: 60px;
    left:40px;
    }
    @media (max-width: 960px) {
      bottom: 50px;
      left:60px;
      }

      @media (max-width: 740px) {
        bottom: 15px;
        left:40px;
        }  

        @media (max-width: 425px) {
          bottom: 8px;
          left:10px;
          }
    `


const TrafficOutsourceText = styled.div`
font-size: 44px;
font-weight: 700;
color: #E64857;

@media (max-width: 1170px) {
  font-size: 22px;
  }

  @media (max-width: 960px) {
    font-size: 15px;
    }

    @media (max-width: 740px) {
      font-size: 12px;
      }
`

const Rinse = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
position: relative;
bottom: 550px;
left: 220px;
right: 0;

@media (max-width: 1512px) {
  bottom: 350px;
  left: 50px;
}

@media (max-width: 1170px) {
  bottom: 200px;
  left:-90px;
  }

  @media (max-width: 960px) {
    bottom: 150px;
    left:30px;
    }

    @media (max-width: 740px) {
      bottom: 90px;
      left:0px;
      }

      @media (max-width: 425px) {
        bottom: 80px;
        left:-20px;
        }
`

const RinseText = styled.div`
font-size: 44px;
font-weight: 700;
color: #920F3B;

@media (max-width: 1170px) {
  font-size: 22px;
  }

  @media (max-width: 960px) {
    font-size: 15px;
    }

    @media (max-width: 740px) {
      font-size: 12px;
      }`

  return (
    <Container >
        <Heading>How To Become Successful </Heading>  
        <GreenHeading >IN 5 STEPS</GreenHeading>

        <Wrapper>
            <Img  src={frame} />
            <div style={{display:'flex', flexDirection:'row'}}>

            <Spy className= 'spy'>
              <SpyText className='spy-text'>Spy</SpyText>

              <div className='div'>
              <div>first we use Insider</div>
              <div>Information to find outwhat</div>
              <div>Supplement funnels are hot.</div>
              </div>
            </Spy>

            <Funnel className= 'funnel'>
              <FunnelText className='funnel-text'>Funnel Hack</FunnelText>
              <div className='div'>
              <div>first we use Insider</div>
              <div>Information to find outwhat</div>
              <div>Supplement funnels are hot.</div>
              </div>
            </Funnel>

            <Outsource className= 'outsource'>
              <OutsourceText className='outsource-text'>Outsource</OutsourceText>
              <div className='div'>
              <div>first we use Insider</div>
              <div>Information to find outwhat</div>
              <div>Supplement funnels are hot.</div>
              </div>
            </Outsource>

            <TrafficOutsource className= 'traffic-outsource'>
              <TrafficOutsourceText className='traf-outsource-text'>Traffic </TrafficOutsourceText>
              <TrafficOutsourceText className='traf-outsource-text'> Outsource</TrafficOutsourceText>

              <div className='div'>
              <div>first we use Insider</div>
              <div>Information to find outwhat</div>
              <div>Supplement funnels are hot.</div>
              </div>
            </TrafficOutsource>

            <Rinse className= 'rinse'>
              <RinseText className='rinse-text'>Rinse & </RinseText>
              <RinseText className='rinse-text'>Repeat</RinseText>

              <div className='div'>
              <div>first we use Insider</div>
              <div>Information to find outwhat</div>
              <div>Supplement funnels are hot.</div>
              </div>
            </Rinse>

            </div>
        </Wrapper>

        <RedBtn >Yes, I'm In</RedBtn>

    </Container>
  )
}

export default SecondComp