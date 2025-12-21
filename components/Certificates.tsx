import { useShowModal } from "@/hooks/useShowModal";
import Certificate from "@/template/Certificate";

export default function Certificates(){
    return (
        <div className="flex flex-col border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900 ">
            {/* Certificates Title */}
            <div className="w-full flex flex-row mb-5">
                <h1 className="w-full text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 "> Certificates </h1>
            </div>
            {/* Certificates */}
            <div className="w-full flex flex-col flex-wrap gap-3 justify-center items-center ">
                <Certificate title={"Certificate of Publication"} desc={"De La Salle Research Congress 2025"} picture={"CertificateOfPublication.png"}/>
            </div>
        </div>
    )
}