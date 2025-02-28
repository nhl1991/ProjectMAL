'use client'

import { ChangeEvent, useState } from "react";

export default function ClientComponent(){

    const [ year, setYear ] = useState('2025');

    function scrollToTarget() {
    const scrollBox = document.getElementById('season-select');
    const target = document.getElementById(year);
    // 스크롤 박스 안에서의 상대적 위치로 스크롤 이동
    if(scrollBox && target){
        scrollBox.scrollTo({
            top: (target.offsetTop-232), // 목표 요소의 세로 위치
            behavior: 'smooth', // 부드럽게 이동
        });
        target.animate([
            { borderColor: 'white' },
            { borderColor: 'cyan' },
            { borderColor: 'white' }],{
            duration: 3000,
            iterations: 1,})

    }
  }

  function handleOnChange(e:ChangeEvent<HTMLInputElement>){
    setYear(e.currentTarget.value)
  }

  return(
    <div className="border-2 border-transparent w-full h-full p-4 flex justify-center">
        <input type="text" className="text-center px-2 border-b-2 outline-none" onChange={handleOnChange} placeholder="Type the year you want" />
        <button className="px-2" onClick={scrollToTarget}><b>GO!</b></button>
    </div>
  )
}