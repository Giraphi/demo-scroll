import React from "react";
import { ReactComponent as Eye } from "./eye.svg";

export default function ScrollCoverFront() {
    return (
        <div className={`flex h-full flex-col items-center justify-center bg-black text-white`}>
            <div className={"h-16 md:h-24 lg:h-28"}>
                <Eye className={"h-full"} />
            </div>

            <h1 className={`text-center font-bungee text-4xl font-bold md:text-6xl lg:text-7xl `}>Scroll</h1>
            <div className={"h-16 md:h-24 lg:h-28"}></div>
        </div>
    );
}
