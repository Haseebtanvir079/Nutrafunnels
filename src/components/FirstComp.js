import React,{useState} from 'react'
import box from '../assets/green-background.png'
import left from '../assets/main-left.png'
import right from '../assets/main-right.png'
import logo from '../assets/Logo 1.png'
import mechanics from '../assets/mechanics.png'
import check from '../assets/Check.png'
import green from '../assets/green.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import {getAuth,signOut} from "firebase/auth"

function FirstComp({ setUserLogged, userLogged}) {

    const Wrapper = styled.div`
    `;

    const Logo= styled.img`
    
        align-items: center;
        height: 12vh;
        width: 45vw;
        object-fit: contain;
      `;

    const Medicine = styled.div`
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
      `;

    const Img = styled.img`
    height: auto;
     max-width: 60%;
    `;

    const HeadingContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      `;

      const Heading = styled.div`
        font-size: 6vw;
        color: white;
        font-weight: 900;
        font-family: 'Montserrat', sans-serif;

        padding-top: 18vh;
        padding-bottom: 2vh ;

        @media (max-width: 768px) {
            padding-top: 5vh;
          }
      `

      const Title = styled.div`  
        font-size: 2.5vw;
        color: white;
        font-weight: 500;
        padding-bottom: 20px ;
      `;

      const SubTitle = styled.div`
      font-size: 2vw;
      color: white;
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;
      line-height: 3.5vw;
      padding-bottom: 4vh ;
    `;

    const Days = styled.div`
    font-size: 5vw;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: white;
    padding-bottom: 15vh;

    @media (max-width: 768px) {
        padding-bottom: 5vh;
      }
`;

    const MechanicsImg = styled.img`
    height: auto;
    width: 100%;
    padding-bottom: 10vh;

    @media (max-width: 768px) {
        padding-bottom: 5vh;
      }
  `;

    const RegisterBtn = styled.div`
    width: 25vw;
  height: 9vh;
  background-color: #fff;
  color: #5DBC39;
  border-radius: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  font-weight: 700;
   font-family: 'Montserrat', sans-serif;
  padding: 4vh 0;
  cursor:pointer;

  @media screen and (max-width: 570px) {
    padding: 0.5vh 0;
     height: 5vh;
    `;

    const Space = styled.div`
    padding-bottom:28vh;

    @media (max-width: 600px) {
        padding-bottom: 5vh;
      }

      @media (min-width: 1381px) {
        padding-bottom: 35vh;
      }
    `;

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const GreenTxt = styled.div`
  font-size: 4vw;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  color: #5DBC39;
  `;

  const BlackTxt1 = styled.div`
  font-size: 1.5vw;
  font-weight: 600;
  color: #232323; 
  text-align: center;
  padding:4vh 20vw;


  @media (max-width: 600px) {
    padding-bottom: 1vh 5vw;
  }
  `;

  const BlackTxt2 = styled.div`
  font-size: 2vw;
  font-weight: 600;
  color: #232323; 
  text-align: center;
  padding:4vh 15vw;

  @media (max-width: 600px) {
    padding-bottom: 1vh 5vw;
  }
  `;

  const BulletPoints = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 3vw;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 8vh;
  `;

  const Points = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `;

  const Bullet = styled.img`
  height: auto
  width: 100%;
  padding-right: 1vw;
  `;

  const LeftImg = styled(Img)`
  @media (max-width: 1380px) {
    display: none;
  }
`;

const RightImg = styled(Img)`
  @media (max-width: 1380px) {
    display: none;
  }
`;

const BackgroundImage  = styled.div`
width: 100vw;
height:100%;
// height: 1700px, // Adjust the height as needed
background-image: url(${green});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;

    const auth = getAuth(app)
    const [user, setUser] = useState({email:'', password:''});
    const [error, setError] = useState(null);
    const navigate = useNavigate();


  async function handleRegister(){
    await signOut(auth);
    localStorage.removeItem('isLoggedIn');
     setUserLogged(false);
     navigate('/signup');
   }


  return (
    <>
    <BackgroundImage>
        <Wrapper>
        <Logo src={logo} />
        </Wrapper>

        <Medicine >
            {/* <Img className='left-med' src={left}/>  */}
            <LeftImg className='left-med' src={left} alt="Left Image" />

            <HeadingContainer >
                <Heading >Join Our</Heading>

               <Title >6-Day Health-Supplement Drop-Shipping Business Accelerator</Title>
                  <SubTitle>Discover how to build a 6 figure Supplement Drop-shipping Business In 6 Days WITHOUT Paying for Facebook Ads Or Traffic!</SubTitle>
           
                  <Days >6 Days!</Days>
                
                  <MechanicsImg  src={mechanics} />
            
                 <RegisterBtn onClick={handleRegister}>
                    Register Now!
                </RegisterBtn>

                <Space >
                </Space>

            </HeadingContainer>
            {/* <Img className='left-med' src={right}/> */}
            <RightImg className='left-med' src={right} alt="Right Image" />

        </Medicine>

    </BackgroundImage>

    <Container >
        
        <GreenTxt> In Only 6 Days</GreenTxt>
        <BlackTxt1>we're going to show you exactly how you can copy our success step-by-step and build your own NutraFunnel that auto-dropships your own private label supplement for you</BlackTxt1>
        <GreenTxt>In Just 6 Days</GreenTxt>
        <BlackTxt2 >We are going to guide you through this simple, 6 step program, that will help you to</BlackTxt2>  
    
        <BulletPoints>
            <Points className='point'>
                <Bullet src={check} className='bullet'/>
                <div>Quit Your Job</div>
            </Points>

            <Points className='point'>
                <Bullet src={check} className='bullet'/>
                <div>Retire</div>
            </Points>

            <Points className='point'>
                <Bullet src={check} className='bullet'/>
                <div>Get the life and Bank Account That You Want</div>
            </Points>


        </BulletPoints>
   
    </Container>
    </>
  )
}

export default FirstComp
