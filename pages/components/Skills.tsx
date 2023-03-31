import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'

const testeItem = {
  icon: <ReactLogo />,
  title: 'teste',
  description: 'afçgksjdfklçashjdlçfkjasçdkfjçasljdfklçads',
}

const GridItem = (props) => {
  return( 
    <div className='bg-white rounded-2xl'>
      <span className='bg-red-300' >{props.icon}</span>
      <span>{props.title}</span>
      <p>{props.description}</p>
    </div>
  )
}
export default function Skills() {
  return (
    <Container>
      <Typography variant='h2'>Habilidades</Typography>
        <Grid container spacing={12}>
          <GridItem icon={testeItem.icon} title={testeItem.title} description={testeItem.description}/>
        </Grid> 
    </Container>
  )
}
