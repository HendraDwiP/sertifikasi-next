export default function Header() {
    return (
        <>
            <div className="flex w-screen p-8 bg-slate-800 justify-between items-center">
                <div>
                    <p className="text-white font-bold text-2xl">
                        Hendra
                    </p>
                </div>
                <div>
                    <ul className="flex space-x-8">
                        <li className="text-white text-lg">Home</li>
                        <li className="text-white text-lg">Tech</li>
                        <li className="text-white text-lg">Biography</li>
                        <li className="text-white text-lg">Contacts</li>
                    </ul>
                </div>
            </div>
        </>
    )
}