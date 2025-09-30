import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ReactNode } from "react";

export default function Layout({ children }: {
    children: ReactNode
}) {
    return (
        <div>
            <Header currentPage="/individual-customers" sub={["/air-conditioning-cleaning"]} />
            {children}
            <Footer />
        </div>
    )
}