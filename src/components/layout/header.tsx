import Image from "next/image";
import SearchBar from "../ui/SearchBar";

export default function Header () {
    return (
        <div className="
            flex items-center justify-between
            w-full py-2 px-5
            bg-slate-900 text-white
        ">
            <Image src="/logo-white.svg" alt="Logo" width={30} height={30} />
            <SearchBar />
            <div>Log In</div>       
        </div>
    )
}