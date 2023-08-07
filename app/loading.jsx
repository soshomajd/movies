import Image from "next/image";

const Loading = () => {

    return (
        <div className="flex justify-center items-center">
            <Image src={"/Pulse-1s-200px.svg"} alt="is loading " width={200} height={220}/>
        </div>
    );
}

export default Loading;