

export default function NavBar() {
    return (
        <div className="fixed w-full z-50">
            <div className="flex justify-between h-full border-b-[1.5px] border-b-neutral-300 p-2">
                <div className="w-[20%] text-2xl font-bold text-[#5A67BA] flex  items-center"> A&S for MCI GAME</div>
                <div className="w-[50%] px-[10%] text-2xl text-[#8a99fb] flex justify-center items-center font-bold">
                    <div className="bg-[#5A67BA] text-white rounded-full h-10 w-10 flex items-center justify-center mr-3"> B </div>
                    <div className=" text-[#5A67BA] text-xl flex items-center justify-center"> BXOK </div>
                </div>
            </div>
        </div>
    )
}