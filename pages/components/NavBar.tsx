import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Link from 'next/link'
export default function NavBar() {
  return (
    <AppBar className='bg-transparent shadow-none' position='static'>
      <Toolbar className='bg-transparent shadow-none'>
        <Link href="/Experience">Início</Link>
        <Link href="#experiences">Experiência</Link>
        <Link href="#skills">Habilidades</Link>
        <Link href="#skills">Projetos</Link>
        <Link href="#skills">Contato</Link>
      </Toolbar>
    </AppBar>
  )
}
