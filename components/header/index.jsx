import Link from "next/link";
const Header = () => {
    return (
        <header className=" flex w-full items-center justify-between bg-sky-700 p-2 ">
            <div className="flex justify-around items-center">
                <button className="p-2 mx-2 bg-white rounded text-lg font-semibold transition-all duration-500 hover:bg-black hover:text-white"><Link href={'/'}>Home</Link></button>
                <button className="p-2 mx-2 bg-white rounded text-lg font-semibold transition-all duration-500 hover:bg-black hover:text-white"><Link href={'/movies'}>Searchbar</Link></button>
            </div>
            <div className="flex justify-end">
            <button className="p-2 mx-2 text-white bg-red-600 rounded text-lg font-semibold transition-all duration-500 hover:bg-white hover:text-red-600"><Link href={'/movies'}>Search</Link></button>
            </div>

        </header>
    );
}

export default Header;