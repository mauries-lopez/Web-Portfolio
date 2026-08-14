import { C, Canva, CPlusPlus, Discord, Figma, GoogleCloud, HuggingFace, Java, MongoDB, MySQL, NextJs, NPM, Photoshop, Python, PyTorch, React, TailwindCSS, Tensorflow, TypeScript, VisualStudioCode } from "developer-icons";
import { Trello } from "lucide-react";

export interface TechStackItem {
    element: React.ComponentType<{ size?: number }> | null;
    label: string;
}

export interface TechStackSection {
    number: string;
    title: string;
    items: TechStackItem[];
}

export const techSections: TechStackSection[] = [
    {
        number: "01",
        title: "Frontend",
        items: [
            { element: React, label: "React" },
            { element: TailwindCSS, label: "TailwindCSS" },
            { element: TypeScript, label: "TypeScript" },
            { element: NextJs, label: "Next.js" },
        ],
    },
    {
        number: "02",
        title: "Backend",
        items: [
            { element: MySQL, label: "MySQL" },
            { element: MongoDB, label: "MongoDB" },
            { element: Python, label: "Python" },
            { element: Java, label: "Java" },
        ],
    },
    {
        number: "03",
        title: "AI & Machine Learning",
        items: [
            { element: HuggingFace, label: "Hugging Face" },
            { element: HuggingFace, label: "Transformers (BERT Models)" },
            { element: GoogleCloud, label: "Colab" },
            { element: GoogleCloud, label: "DialogFlow CX" },
            { element: NPM, label: "NPM" },
            { element: PyTorch, label: "PyTorch" },
            { element: Tensorflow, label: "Tensorflow" },
        ],
    },
    {
        number: "04",
        title: "Other Languages",
        items: [
            { element: C, label: "C" },
            { element: CPlusPlus, label: "C++" },
        ],
    },
    {
        number: "05",
        title: "Tools",
        items: [
            { element: VisualStudioCode, label: "Visual Studio Code" },
            { element: Trello, label: "Trello" },
            { element: Canva, label: "Canva" },
            { element: Discord, label: "Discord" },
            { element: Photoshop, label: "Photoshop" },
            { element: Figma, label: "Figma" },
            { element: null, label: "Capcut" },
        ],
    },
];
