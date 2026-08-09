import type { Metadata } from "next";
import Main from "@/components/Main";
import JsonLd from "./json-ld";

export const metadata: Metadata = {
  title: "Mauries Lopez — Software Engineer & Full Stack Developer | Portfolio",
  description:
    "Mauries Lopez is a software engineer and full stack developer from De La Salle University specializing in React, Next.js, TypeScript, Python, and machine learning. Explore projects, experience, and tech stack.",
};

export default function Page() {
  return (
    <>
      <JsonLd />
      <Main />
    </>
  );
}
