"use client"

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";

interface ModalProps {
    modalBool: boolean;
    changeModalBool: () => void;
    picture: string;
}

export default function Modal({modalBool, changeModalBool, picture}: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<Element | null>(null);

    const close = useCallback(() => {
        if (triggerRef.current instanceof HTMLElement) {
            triggerRef.current.focus();
        }
        changeModalBool();
    }, [changeModalBool]);

    useEffect(() => {
        if (modalBool) {
            triggerRef.current = document.activeElement;
            setTimeout(() => modalRef.current?.focus(), 10);
        }
    }, [modalBool]);

    useEffect(() => {
        if (!modalBool) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "Tab") {
                const el = modalRef.current;
                if (!el) return;
                const focusable = el.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (!first || !last) return;
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [modalBool, close]);

    return (
        <div
            className={`${modalBool ? "flex" : "hidden"} fixed inset-0 z-50 items-center justify-center`}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate image"
        >
            <div className="absolute inset-0 bg-black/80 animate-in fade-in duration-200" onClick={close} />
            <div
                ref={modalRef}
                tabIndex={-1}
                className="relative bg-white dark:bg-neutral-900 p-2 rounded-lg mx-4 md:mx-0 max-w-4xl outline-none animate-in zoom-in-95 duration-200"
            >
                <button
                    onClick={close}
                    className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 flex items-center justify-center hover:bg-stone-100 dark:hover:bg-neutral-700 active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                    aria-label="Close"
                >
                    <X size={14} />
                </button>
                <Image 
                    src={`/${picture}`} 
                    alt="Certificate"
                    className="w-full max-w-3xl h-auto object-contain rounded"
                    width={1200}
                    height={800}
                />
            </div>
        </div>
    )
}
