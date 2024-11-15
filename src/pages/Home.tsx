import React from 'react'
import { formatNumber } from '../utils/formatNumber'
import Sidebar from '../components/Sidebar'
import { TThemeName } from '../styles/theme';
import Title from '../components/Title';
import Button from '../components/Button';
import InputText from '../components/InputText';
interface IProps {  
    setTheme: (theme: TThemeName) => void;
    theme: TThemeName;
}

export default function Home() {
    const count = 1234567890;
    const formattedCount = formatNumber(count);
  return (
    <>
        <Title size="lg" color="text">Hello</Title>
        <h1>{formattedCount}</h1>
        <Sidebar />
        <Button size="lg" scheme="primary" disabled>Click me</Button>
        <InputText placeholder="Enter your name" />
    </>
  )
}
