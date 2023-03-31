import React from "react";
import { Typography, Container, Avatar  } from "@mui/material";
import { Timeline } from 'react-material-timeline';

import { WorkOutlineRounded } from "@mui/icons-material";

export default function Experience() {
  const experiences = [
    {
      title: 'Web/UI Designer - Freelancer',
      subheader: 'Jun 2019 - Atualmente',
      description: [ 'Criação de interfaces e desenvolvimento de sites usando wordpress, HTML, CSS e JavaScript' ],
      icon: <Avatar> <WorkOutlineRounded /> </Avatar>
    },
    {
      title: 'Web Designer - Meraki Analytics',
      subheader: 'Nov 2021 - Fev 2021',
      description: [ 'Criação de interfaces para sites institucionais e lojas virtuais e desenvolvimento de sites usando wordpress, HTML, CSS e JavaScript' ],
      icon: <Avatar> <WorkOutlineRounded /> </Avatar>
    },
    {
      title: 'Web Designer - Interattivo Brasil Publicidade',
      subheader: ' Out 2021 - Nov 2022',
      description: [ 'Criação de interfaces para sites institucionais e lojas virtuais e desenvolvimento de sites usando wordpress, HTML, CSS e JavaScript' ],
      icon:  <Avatar> <WorkOutlineRounded /> </Avatar>
    }
  ]
  return (
    <Container id='experiences'>
      <Typography variant="h2">Experiência Profissional</Typography>
      <Timeline events={experiences}/>
    </Container>
  )
}
