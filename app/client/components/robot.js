'use client'
import React from 'react'

const Robot = () => {
    return (
        <div className="w-full flex flex-row items-center justify-around">
            <button
                className="bg-red-500 rounded-full bg-gradient-to-br from-red-400 via-[red] to-red-700 text-5xl text-white p-6 -rotate-45"
                onClick={() => {
                    alert('You chose the Red pill.')
                }}
            >
                Physical
            </button>
            <button
                className="relative"
                onMouseOver={() => {
                    console.log('Hello, World!')
                }}
            >
                <div className="absolute -z-10 inset-0 container mx-auto w-full h-full text-center flex flex-col items-center justify-center">
                    <img
                        src="/img/robot.png"
                        className="max-w-[310px] p-10 cursor-pointer"
                    />
                </div>
                <img
                    src="/img/robot.png"
                    className="max-w-[310px] p-10 hover:animate-ping cursor-pointer"
                />
            </button>
            <button
                className="bg-blue-500 rounded-full bg-gradient-to-br from-blue-400 via-[blue] to-blue-700 text-5xl text-white p-6 rotate-45"
                onClick={() => {
                    alert('You chose the Blue pill.')
                }}
            >
                Digital
            </button>
        </div>
    )
}

export default Robot
//
