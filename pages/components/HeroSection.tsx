import React from 'react'
import { Container, Typography, Button} from '@mui/material'
import Image from 'next/image'
import NavBar from './NavBar'


export default function HeroSection() {
  return (
   <Container id='home' className='flex'>
    <div>
     <Image src="/images/profile-pic.png" className="w-max h-max" height={650} width={550} />
     <Image src="/images/cloud.svg" className='absolute left-1'  width={400} height={200}/>
     <Image src="/images/cloud.svg"  width={400} height={200}/>
     
    </div>
    <div>
      <NavBar />
      <Typography variant="h2">PORTFOLIO</Typography>
      <Typography variant="h1">Paulo de Assis</Typography>
      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis
        donec et odio. Ac turpis egestas integer eget aliquet nibh praesent.</Typography>
        <Button variant="contained">Entrar em contato</Button>
        <Image src="/images/linkedin-icon.svg"  width={300} height={100}/>
        <Image src="/images/github-icon.svg"  width={300} height={100}/>    
    </div>
   </Container>
  )
}
