import { useShowModal } from "@/hooks/useShowModal";
import Modal from "./Modal";

export default function Certificate({title, desc, picture}){

    const {modalBool, changeModalBool} = useShowModal();

    return(
        <div className={`relative min-w-50 flex-1 items-center justify-center bg-neutral-50 dark:bg-neutral-800 border border-stone-300 hover:border-neutral-500 dark:border-neutral-700 flex duration-500 ease-out cursor-pointer rounded-lg `} onClick={changeModalBool}>
            <img src={picture} className="w-full h-20 md:h-24 object-cover rounded-lg"/>
            <div className={`absolute inset-0 flex flex-col justify-center items-center p-2 bg-white/85 dark:bg-black/85 rounded-lg`}>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 text-center">
                    {title}
                </p>
                <p className="text-xs text-gray-900 dark:text-gray-100 bg-neutral-300 dark:bg-neutral-900 px-2 py-1 rounded-full text-center mt-1">
                    {desc}
                </p>
            </div>
            <Modal modalBool={modalBool} changeModalBool={changeModalBool} picture={picture}/>
        </div>
    )
}