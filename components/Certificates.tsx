import Certificate from "@/template/Certificate";

export default function Certificates(){
    return (
        <div>
            <div className="flex flex-row gap-4 overflow-x-auto pb-2">
                <Certificate title={"Certificate of Publication"} desc={"De La Salle Research Congress 2025"} picture={"CertificateOfPublication.png"}/>
                <Certificate title={"Certificate of Recognition"} desc={"De La Salle Research Congress 2025"} picture={"CertificateOfRecognition.png"}/>
            </div>
        </div>
    )
}
