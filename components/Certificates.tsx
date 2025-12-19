import { useShowModal } from "@/hooks/useShowModal";
import Certificate from "@/template/Certificate";

export default function Certificates(){
    return (
        <div className="h-full flex flex-col border border-solid border-stone-300 dark:border-neutral-700 rounded-md p-5 dark:bg-neutral-900 ">
            {/* Certificates Title */}
            <div className="w-full flex flex-row mb-5">
                <h1 className="w-full text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 "> Certificates </h1>
            </div>
            {/* Certificates */}
            <div className="w-full h-full flex flex-col md:flex-row flex-wrap gap-3">
                <Certificate title={"Certificate of Publication"} desc={"De La Salle Research Congress 2025"} picture={"CertificateOfPublication.png"}/>
            </div>
        </div>
    )
}