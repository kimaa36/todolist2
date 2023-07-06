import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';

export const Header = () => {
  // 현재 날짜 가져오기
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      <h3>오늘은 📅</h3>
      <H1>{time.toDateString()}</H1>
    </div>
  )
}

const H1 = styled.h1`
  color: #de4e40;
`;
