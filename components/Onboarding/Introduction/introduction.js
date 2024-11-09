"use client";
import React, { useEffect, useRef, useState } from "react";
import WheelFortune from "wheel-fortune";

const Introduction = () => {
    const robotRef = useRef(null);
    const robotRef2 = useRef(null);
    const bluePill = useRef(null);
    const redPill = useRef(null);
    const pills = useRef(null);
    const instructions = useRef(null);
    const descriptions = useRef(null);

    const [robotIsActive, setRobotIsActive] = useState(false);
    const [pill, setPill] = useState(null);
    const [animations, setAnimations] = useState([]);

    const spinStates = [
        { stopSegment: 5, callback: () => console.log("first spin end") },
        { stopSegment: 2, callback: () => console.log("second spin end") },
    ];

    useEffect(() => {
        const wheel = new WheelFortune({
            spinStates: spinStates,
            rotationCount: 4,
            segmentCount: 8,
        });
        wheel.init();
    }, []);

    const handleMouseOver = () => {
        if (!pill) {
            Array.from(animations).forEach((animation) => {
                robotRef.current?.classList.remove(animation);
            });
            robotRef.current?.classList.add("animate-wiggle");
        }
    };

    const handleMouseLeave = () => {
        if (!pill) {
            robotRef.current?.classList.remove("animate-wiggle");
            Array.from(animations).forEach((animation) => {
                robotRef.current?.classList.add(animation);
            });
        }
    };

    useEffect(() => {
        let observer;
        if (robotRef.current) {
            let animations = Array.from(robotRef.current?.classList).some(
                (cls) => {
                    return cls.includes("animate-");
                },
            );
            setAnimations(Array.from(animations));
            MutationObserver =
                window.MutationObserver || window.WebKitMutationObserver;
            observer = new MutationObserver(function (mutations, observer) {
                console.log("Observer: ", mutations[0].target.classList);
                let active = false;
                if (
                    mutations[0].target.classList.contains("animate-heartbeat")
                ) {
                    active = true;
                } else {
                    active = false;
                }
                setRobotIsActive((prev) => {
                    console.log("Previous state: ", prev);
                    if (prev !== active) {
                        return active;
                    }
                });
            });
            observer?.observe(robotRef?.current, {
                subtree: true,
                attributes: true,
            });
        }
        return () => {
            if (!!observer) observer.disconnect();
        };
    }, [robotRef.current]);

    useEffect(() => {
        if (robotRef.current) {
            console.log("Effect hook called");
            console.log(robotRef.current.classList);

            if (!!robotIsActive) {
                new Promise((resolve) => {
                    // alert('You chose the red pill. The robot is activate.')
                    resolve();
                });
            } else {
                new Promise((resolve) => {
                    // alert('You chose the blue pill. The robot is at rest.')
                    resolve();
                });
            }
        }

        return () => {
            console.log("Effect hook cleanup");
        };
    }, [robotIsActive]);

    // Sequence

    const [sequence, setSequence] = useState({ status: "idle", step: 0 });

    const prev = async (state) => {
        state.step = state.step - 1;
        setSequence(state);
    };

    const next = async ({ state }) => {
        state.step = state.step + 1;
        setSequence(state);

        instructions.current.classList.add("text-transparent");
        setTimeout(() => {
            if (state.step === 0) {
            }
        }, 1000);
    };
    const startSequence = async () => {
        pills.current.classList.toggle("opacity-0");
        pills.current.classList.toggle("opacity-100");
        const state = { status: "running", step: 0 };
        next({ state });
    };
    // TOP

    return (
        <>
            <pre className="fixed font-mono z-50 text-balanced w-[10ch] top-0 leading-10">
                Pill: {pill}
            </pre>
            <div
                ref={pills}
                className="absolute opacity-0 z-20 flex flex-row transition-all duration-1000 animate-counterspin-lower w-full justify-between max-w-2xl h-24 pointer-events-none"
            >
                <button
                    className="transition-transform duration-700 pointer-events-auto hover:scale-150 -rotate-45"
                    ref={redPill}
                    onClick={async () => {
                        if (!pill) {
                            robotRef.current.classList.add("animate-heartbeat");
                            setPill("red");
                            descriptions.current.classList.remove(
                                "text-transparent",
                            );
                            robotRef2.current.classList.add(
                                "animate-fade-away",
                            );
                            bluePill.current.classList.toggle("opacity-100");
                            bluePill.current.classList.toggle("opacity-0");
                            setTimeout(() => {
                                redPill.current.children[0]?.classList.toggle(
                                    "animate-entrance-transition",
                                );
                                bluePill.current.classList.toggle(
                                    "animate-spin-low",
                                );
                            }, 5000);
                        }
                    }}
                >
                    <div className="relative transition-transform bg-candy-apple-500 rounded-full w-24 bg-gradient-to-br from-candy-apple-400 via-candy-apple-500 to-candy-apple-700 text-5xl text-white p-6 animate-spin-low">
                        <div className="absolute pr-1 inset-0 bg-[#ffffffdd] drop-shadow-sm w-1/2 rounded-l-full text-base text-red-200 flex items-center justify-end">
                            <span
                                className="text-shadow-double unselectable font-black text-sm"
                                style={{ fontStretch: "expanded" }}
                            >
                                PHY
                            </span>
                        </div>
                    </div>
                </button>

                <button
                    className="transition-transform duration-700 pointer-events-auto hover:scale-150 rotate-45"
                    onClick={async () => {
                        if (!pill) {
                            // robotRef.current.classList.remove('animate-heartbeat')
                            robotRef.current.classList.add("animate-fade-away");
                            setPill("blue");
                            pills.current.classList.toggle("opacity-100");
                            pills.current.classList.toggle("opacity-0");

                            descriptions.current.classList.remove(
                                "text-transparent",
                            );
                        }
                    }}
                >
                    <div
                        ref={bluePill}
                        className="relative opacity-100 duration-1000 transition-all bg-blueberry-500 rounded-full w-24 bg-gradient-to-br from-blueberry-400 via-blueberry-500 via-50% to-blueberry-700 text-5xl text-white p-6 animate-spin-low"
                    >
                        <div className="absolute pr-1 inset-0 bg-[#ffffffdd] drop-shadow-sm w-1/2 rounded-l-full text-base text-blue-200 flex items-center justify-end">
                            <span
                                className="text-shadow-double unselectable font-black text-sm"
                                style={{ fontStretch: "expanded" }}
                            >
                                DIG
                            </span>
                        </div>
                    </div>
                </button>
            </div>
            <div className="relative z-[15] opacity-80 transition-transform animate-weave transform-gpu">
                {/* <SkipNavContent> */}
                <button
                    className="relative z-[15] transition-transform animate-bob transform-gpu"
                    onClick={async () => {
                        if (!pill && sequence.status === "idle") {
                            startSequence();
                        }
                    }}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                    ref={robotRef2}
                >
                    <img
                        src="/img/robot.png"
                        ref={robotRef}
                        className="max-w-[420px] unselectable"
                    />
                </button>
                {/* </SkipNavContent> */}
            </div>

            <div className="relative z-10 prose block w-full">
                <div
                    ref={instructions}
                    className="font-mono absolute z-20 w-full text-center text-2xl xl:text-3xl unselectable duration-1000 transition-opacity min-w-4xl prose container max-w-6xl mx-auto text-balance"
                >
                    {/* prettier-ignore */}
                    <p
                    
                        >
                        Choose wisely. After this, there is no turning back. 
                    </p>
                    {/* prettier-ignore */}
                    <p>
                        You take the blue pill - the story ends, 
                    </p>
                    {/* prettier-ignore */}
                    <p>
                        you wake up in your bed and believe whatever you want to
                        believe.
                    </p>
                    {/* prettier-ignore */}
                    <p>You take the red pill - you stay in Wonderland</p>
                    {/* prettier-ignore */}
                    <p>and I show you how deep the rabbit hole goes.</p>
                </div>
                <div
                    ref={descriptions}
                    className="font-mono absolute z-20 pointer-events-none w-full block text-center text-2xl xl:text-3xl min-w-max dark:drop-shadow-contrast unselectable text-transparent transition-colors duration-1000"
                >
                    {pill === "red"
                        ? "The Red Pill. Learn a new skill."
                        : pill === "blue"
                          ? "The Blue Pill. You wake up in your bed and believe whatever you want to believe."
                          : ""}
                </div>
            </div>
            <div className="wheel" />
            <div className="wheel__segments">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
            <div className="wheel__button"></div>
        </>
    );
};

export default Introduction;
