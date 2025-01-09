import Image from "next/image";


export default function Introduction() {
    return (
        <>
                <div className="flex w-screen h-[500px] bg-slate-800">
                    <div className="">
                        <p className="text-white">
                            Teknik Informatika
                        </p>
                        <h2 className="text-7xl text-white ">Hello my friend</h2>
                        <h2 className="text-7xl text-[#F5ECD5] ">Hendra Dwi Prastia</h2>
                    
                        <div className="my-8">
                            <p className="text-white text-xl"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eveniet architecto ut nisi maxime est quis, vero nemo consequatur minus minima perferendis, harum eos quas deleniti hic amet beatae ea?</p>
                        </div>
                    </div>
                    <div className="relative w-96 h-96">
                        <Image 
                            src={"/img/port-profile.jpg"}
                            alt="Hendra Dwi Prastia"
                            fill={true}
                            priority={true}
                            className="rounded-3xl object-cover"
                        />
                        <Image
                            src={"/img/gambar.png"}
                            alt="Vincent"
                            fill={true}
                            priority={true}
                            className="rounded-3xl object-cover"
                        />
                    </div>
                </div>
        </>
    )
}