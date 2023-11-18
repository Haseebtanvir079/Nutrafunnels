import React from 'react'
import FirstComp from '../components/FirstComp'
import SecondComp from '../components/SecondComp'
import Services from '../components/Services'
import Details from '../components/Details'

function Main({setUserLogged, userLogged}) {
  return (
    <>
      <FirstComp setUserLogged={setUserLogged} userLogged={userLogged}/>
      <SecondComp/>
      <Services/>
      <Details setUserLogged={setUserLogged} userLogged={userLogged}/>
    </>
  )
}

export default Main