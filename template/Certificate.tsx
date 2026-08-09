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
        <div
            className="min-w-[220px] flex-shrink-0 border border-stone-200 dark:border-neutral-800 hover:border-stone-400 dark:hover:border-neutral-600 transition-colors duration-300 cursor-pointer p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            onClick={changeModalBool}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") changeModalBool(); }}
        >
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {title}
            </p>
            <p className="text-xs text-gray-500 dark:text-neutral-500 mt-1">
                {desc}
            </p>
            <Modal modalBool={modalBool} changeModalBool={changeModalBool} picture={picture}/>
        </div>
    )
}
