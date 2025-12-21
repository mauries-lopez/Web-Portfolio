import { useShowModal } from "@/hooks/useShowModal";
import Modal from "./Modal";

interface CertificateProps {
    title: string;
    desc: string;
    picture: string;
}

export default function Certificate({title, desc, picture}: CertificateProps){

    const {modalBool, changeModalBool} = useShowModal();

    return(
        <div className={`w-full flex-1 flex-item items-center justify-center border border-stone-300 hover:border-neutral-500 dark:border-neutral-700 flex duration-500 ease-out cursor-pointer rounded-lg `} onClick={changeModalBool}>
            <div className={`w-full flex flex-col justify-center items-center p-2`}>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 text-center">
                    {title}
                </p>
                <p className="text-xs text-gray-900 dark:text-gray-100 px-2 py-1 rounded-full text-center">
                    {desc}
                </p>
            </div>
            <Modal modalBool={modalBool} changeModalBool={changeModalBool} picture={picture}/>
        </div>
    )
}