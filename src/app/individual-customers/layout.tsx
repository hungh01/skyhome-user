
import { Header } from "@/components/layout/header";
import { ReactNode } from "react";

export default function AboutLayout({ children }: {
    children: ReactNode
}) {
    return (
        <div>
            <Header currentPage="/individual-customers" />
            {children}
        </div>
    )
}