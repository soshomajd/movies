import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const getdata= async()=>{
    const data= await fetch("https://moviesapi.ir/api/v1/movies?page={page}",{cache:"no-store"})
    return data.json();
}


const Home = async() => {
    const data= await getdata()
    return (
        <main className="flex flex-col gap-8 container mx-auto">
            <>
            <title>sosho movies1</title>
            <metadata name="description" content="the best movies"/>
            </>
            <div className="text-center text-2xl text-gray-700 font-extrabold">MAIN PAGE</div>
            <div className="flex justify-between items-center flex-wrap mx-4">
            {data.data.map((item,index)=>{
                return(
                    <Link href={`/movies/${item.id}`} className="shadow-md shadow-gray-400 relative w-72 h-[500px] bg-white rounded-lg my-3 p-4 flex-col justify-center items-center" key={index}>
                        <div className="flex justify-center items-center"><Image src={item.poster} alt={item.title} width={200} height={200}/></div>
                        <div className=" flex justify-center items-center"><h3 className="bg-slate-200 shadow-sm rounded p-1 my-1">{item.title}</h3></div>
                        <div className="flex justify-between">
                        <div className=" bg-slate-200 shadow-sm rounded p-1 my-1 absolute bottom-0 left-1 ">{item.year}</div>
                        <div className=" bg-slate-200 shadow-sm rounded p-1 my-1 absolute bottom-0 right-1 ">{item.country}</div>

                        </div>
                    </Link>
                )
            })}
            </div>
     </main>
    );
}

export default Home