import Link from "next/link";

type Linkcontent ={
    path: string,
    label: string
} 
export default function Linkto({path,label}:Linkcontent){
    return(
        <Link href={path} className="hover:text-blue-600 hover:underline font-semibold">{label}</Link>
    )
}