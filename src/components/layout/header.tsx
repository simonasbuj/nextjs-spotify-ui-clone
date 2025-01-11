import Image from "next/image";

export default function Header () {
    return (
        <div className="
            flex items-center justify-between
            w-full py-2 px-5
            bg-slate-900 text-white
        ">
            <Image src="/logo-white.svg" alt="Logo" width={30} height={30} />
            <input 
                type="text" 
                placeholder="Search" 
                className="bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
            />
            <div>Log In</div>       
        </div>
    )
}