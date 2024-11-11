import React from 'react'
import { formatNumber } from '../utils/formatNumber'
import Sidebar from '../components/Sidebar'
import { TThemeName } from '../style/theme';

interface IProps {  
    setTheme: (theme: TThemeName) => void;
    theme: TThemeName;
}

export default function Home() {
    const count = 1234567890;
    const formattedCount = formatNumber(count);
  return (
    <>
        <h1>{formattedCount}</h1>
        <Sidebar />
    </>
  )
}
