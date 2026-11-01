import type { Metadata } from "next";
import YabongPrivacyPage from "@/components/page/YabongPrivacyPage";

export const metadata: Metadata = {
  title: "Yabong Privacy Policy | Mauries Lopez",
  description:
    "Privacy policy for Yabong, an iOS job application tracker. Yabong collects nothing and keeps all data on your iPhone.",
  alternates: { canonical: "/yabong/privacy-policy" },
};

export default function Page() {
  return <YabongPrivacyPage />;
}
