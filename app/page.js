import React from 'react'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import Robot from '@/app/client/components/robot'
import '@reach/skip-nav/styles.css'

const MarketplaceOfTheMind = () => {
    return (
        <>
            <div
                className={`fixed z-10 inset-0 w-full h-full outline-8 outline-dashed outline-gray-600 ${
                    process.env.NODE_ENV === 'development'
                        ? '-outline-offset-8'
                        : 'outline-offset-0'
                }`}
            ></div>
            <div className="min-h-[100vh] outline-green-500 flex flex-col justify-center bg-white">
                <div className="relative bg-[url('/img/freemart-bkgd.jpeg')] bg-cover bg-no-repeat bg-center aspect-[16/9] outline-blue-400 max-h-[100vh]">
                    <SkipNavLink />

                    <div className="absolute inset-0 container mx-auto w-full h-full text-center flex flex-col items-center justify-center">
                        <img
                            src="/img/logo-transparent.png"
                            className="max-h-[100vh] p-10"
                        />
                    </div>
                    <div className="absolute z-20 inset-0 container mx-auto w-full h-full text-center flex flex-col items-center justify-center outline-yellow-400">
                        <Robot />
                    </div>
                </div>
            </div>

            <div className="text-center w-full text-8xl container mx-auto bg-white">
                <h2 className="text-7xl flex items-end justify-center pb-5 stack z-10">
                    <span className="mix-blend-normal text-black">
                        <span className="text-8xl tracking-tighter text-[#f20000] font-[900]">
                            Free
                        </span>
                        <i>
                            <span className="tracking-tighter text-black text-6xl">
                                Online
                            </span>
                        </i>
                        <br />
                        <span className="text-[5rem] tracking-tighter text-[#f20000] font-[900]">
                            Market
                        </span>
                        <span className="text-[5rem] tracking-tighter text-black font-[600]">
                            place
                        </span>
                    </span>
                </h2>
            </div>
            <div className="text-center w-full text-8xl container mx-auto bg-white">
                [<b className="text-[red]">Free</b>
                <sub>
                    (<em>Online</em>)
                    <sub>
                        <b className="text-[red]">Market</b>
                    </sub>
                    place]
                </sub>
            </div>
        </>
    )
}

export default MarketplaceOfTheMind
