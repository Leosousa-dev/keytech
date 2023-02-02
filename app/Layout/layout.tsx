import Menu from "@/components/navMenu"
import { ReactNode } from "react"

type Layoutprops ={
    children: ReactNode
}
export default function Layout({children}:Layoutprops){
    return(
        <>
            <Menu/>
            <main>{children}</main>
        </>
    )
}