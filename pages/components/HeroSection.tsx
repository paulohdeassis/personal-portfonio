import React from 'react'
import { Container, Typography, Button} from '@mui/material'
import Image from 'next/image'


export default function HeroSection() {
  return (
   <Container className='bg-red-500'>
    <div >
     <Image src="/images/profile-pic.png"  height={600} width={500} />
     <Image src="/images/cloud.svg"  width={200} height={100}/>
     <Image src="/images/cloud.svg"  width={200} height={100}/>    
    </div>
    <div>
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
