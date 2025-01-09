import Image from "next/image";
import TechCard from "./Techcard";

export default function Tech() {
    return (
        <>
        <div className="bg-slate-800 w-screen h-[300px] p-8">
            <h1 className="text-white text-4xl font-bold mb-4">
                Tech
            </h1>
            <div className="w-32 border-2 mb-1"/>
            <div className="flex h-[100px] justify-center items-center w-full">
                <TechCard imageURL="/img/jetpack.jpg" alt="Hendra Dwi" techStack="Jetpack Compose"/>
                <TechCard imageURL="/img/flutter.png" alt="Hendra Dwi" techStack="Flutter"/>
                <TechCard imageURL="/img/react.png" alt="Hendra Dwi" techStack="React JS"/>
            </div>
        </div>
        </>
    )
}