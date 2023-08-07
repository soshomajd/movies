import Image from "next/image";
const Notfaound = () => {
    return (
        <div className="bg-black flex justify-center items-center w-full h-full">
            <Image src={'/notfoundimg.jpg'} alt="Not found" width={4000} height={3500}/>
        </div>
    );
}

export default Notfaound;