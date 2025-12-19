"use client";

import { useEffect, useState } from "react";

export function useShowModal() {
    const [modalBool, setModalBool] = useState(false);

    function changeModalBool(){
        modalBool ? setModalBool(false) : setModalBool(true);
    }

    useEffect(() => {
        console.log("modal:", modalBool);
    }, [modalBool]);

    return { modalBool, changeModalBool };
}