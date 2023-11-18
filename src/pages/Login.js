import React, { useState } from 'react'
import background from '../assets/signup-background.png';
import leftimg from '../assets/signup-left.png';
import rightimg from '../assets/signup-right.png';
import { app } from '../firebase';
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Img = styled.img`
width: 100%;
  height: auto;

  @media (max-width: 1400px) {
    display: none;
  }
  `;

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 70%;

  @media (max-width: 1000px) {
    width:100%;
  }
  `;

  const Space = styled.div`
  height: 10vh;
  `;

  const Wrapper = styled.div`
  background-color: #fff;
  width: 70%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width:90%;
  }

  `;

  const Title = styled.div`
  font-size: 63.15px;
  color: #43AC44;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  padding: 8vh 0;

  @media (max-width: 768px) {
    font-size: 4vh;
  }

  // @media (min-width: 1400px) {
  //   font-size: 5vh;
  // }
  `;

  const InputContainer = styled.div`
padding-bottom: 2vh;
width: 70%;

@media (min-width: 768px) {
  width: 70%;
}
`;

const Input = styled.input`
width: 100%;
height: 7vh;
background-color: #F6F6F6;
border: 1px solid #E1E1E1;
border-radius: 10px;
padding-left: 2vw;
/* padding-bottom: 2vh; */
font-size: 16px;
font-weight: 700;

&::placeholder {
  color: #000;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}
`;

  const Button = styled.div`
  background-color: #000000;
  font-family: 'Montserrat', sans-serif;

  width: 70%;
  height: 10vh;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: px;
  font-weight: 700;
  padding: 4vh 0;
  color: #fff;
  position: relative;
  bottom: -40px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 50%;
    // font-size:5vh;
  }

  @media (min-width: 1400px) {
    width: 40%;
    font-size:5vh;
  }
  `;

  const SpaceEnd = styled.div`
  height: 40vh;
  `;

  const Error = styled.div`
  color: red;`

const Text = styled.div`
color:  #121212;
font-size: 3vh;
font-weight: 800;

@media (min-width: 768px) {
  font-size: 4vh;
}

@media (min-width: 1400px) {
  font-size: 5vh;
}
`;

const BackgroundImage  = styled.div`
width: 100vw;
height: 1200px; // Adjust the height as needed
background-image: url(${background});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
`
;

function Login(props) {

    const auth = getAuth(app)
    const [user, setUser] = useState({email:'', password:''});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

  async  function handleLogin(){

        try {
            await signInWithEmailAndPassword(auth, user.email, user.password);
            console.log("User signed up successfully!");
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            props.setUserLogged(true);
            navigate('/main')

          } catch (error) {
            console.error("Error signing up:", error.message);
  // Check the error code and set a user-friendly error message
  let errorMessage = 'An error occurred during login.';
  if (error.code === 'auth/user-not-found') {
    errorMessage = 'User not found. Please check your email and try again.';
  } else if (error.code === 'auth/wrong-password') {
    errorMessage = 'Incorrect password. Please try again.';
  } else if (error.code === 'auth/invalid-email') {
    errorMessage = 'Invalid email address. Please enter a valid email.';
  } else if (error.code === 'auth/missing-password') {
    errorMessage = 'Enter a password.';
  }

  // Update the state with the user-friendly error message to display in your UI
  setError(errorMessage);
      }
    }

  return (
    <BackgroundImage>
        <div>
            <Img src={leftimg} />
        </div>

        <Container >

        <Space ></Space>

        <Wrapper >
            <Title >Log in</Title>
           
            <InputContainer>
            <Input value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}  placeholder='email'  type='email'/>
            </InputContainer>
            <InputContainer>
            <Input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}  placeholder='Password'  type='password'/>
            </InputContainer>
                {error && <Error>{error}</Error>}

                <div style={{fontSize:'15px'}}>Don't have an Account. <span onClick={()=>navigate('/signup')} style={{color:'#43AC44',cursor:'pointer'}}>Signup!</span></div>



            <Button onClick={handleLogin}>
                Login
            </Button>
        </Wrapper>

            <SpaceEnd></SpaceEnd>

        </Container>
        <div>
            <Img src={rightimg} />
        </div>

    </BackgroundImage>
  )
}

export default Login