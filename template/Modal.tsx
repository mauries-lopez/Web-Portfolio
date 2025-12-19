interface ModalProps {
    modalBool: boolean;
    changeModalBool: () => void;
    picture: string;
}

export default function Modal({modalBool, changeModalBool, picture}: ModalProps) {
    return (
        <div className={`${modalBool === true ? "block" : "hidden"} fixed inset-0 flex items-center justify-center transition duration-200 ease-out bg-black/80 z-50`} onClick={changeModalBool}>
            <div className="bg-white dark:bg-neutral-900 p-2 rounded-lg md:m-52">
                <div className="h-full">
                    <img src={picture} className="w-82 h-56 md:w-240 md:h-full object-fit rounded-lg"/>
                </div>
            </div>
        </div>
    )
}