import Notfaound from "@/app/not-found";
import Image from "next/image";

const getdata= async ()=>{
    const data= await fetch("https://moviesapi.ir/api/v1/movies?page={page}",{cache:"no-store"});
    return data.json();
}
const Singlemovie = async ({params}) => {
    const data= await getdata();
    const SingleData= data.data.find((item)=>{
        return item.id.toString()===params.id
    })
    if(!SingleData){
        return Notfaound();
    }
    console.log(SingleData)
    return (
        <main className="  flex justify-start items-center shadow-md shadow-slate-600 my-2 mx-5">
            <>
            <title>sosho movies</title>
            </>
            <div className="m-1 rounded flex"><Image className="rounded" src={SingleData.poster} alt={SingleData.title} width={200} height={220}/></div>
           <div className=" text-xl font-extrabold ml-5 flex-col justify-start items-start flex-wrap ">
                <div className="p-5 bg-slate-300 shadow-md shadow-slate-400 m-2 rounded"><span className="text-xl font-extrabold text-red-600">Name:</span>{SingleData.title}</div>
                <div className="p-5 bg-slate-300 shadow-md shadow-slate-400 m-2 rounded"> <span className="text-xl font-extrabold text-red-600">Year:</span>{SingleData.year}</div>
                <div className="p-5 bg-slate-300 shadow-sm shadow-slate-400 m-2 rounded"><span className="text-xl font-extrabold text-red-600">Country:</span>{SingleData.country}</div>
                <div className="p-5 bg-slate-300 shadow-md shadow-slate-400 m-2 rounded"> <span className="text-xl font-extrabold text-red-600">IMDB:</span>{SingleData.imdb_rating}</div>
           </div>
           <div className="p-5 bg-slate-300 shadow-md shadow-slate-400  m-1 rounded">{SingleData.genres.map((item,index)=>{
             return <span className=" flex-row mx-1 text-xl font-extrabold   shadow-slate-400 rounded" key={index}>{item}</span>
           })}</div>
            <div className="flex justify-between">{SingleData.images.map((pic,index)=>{
                return <div className="m-4"  key={index}> <Image className="rounded" src={pic} alt={SingleData.title} width={250} height={240}/></div>
            })}</div>

        </main>
    );
}

export default Singlemovie;