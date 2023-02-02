import Image from "next/image";
import logo from '../assets/logo.png'

export const Keywords = [
    {category: '🖥  Tecnologia'},
    {category: '💡  Ideas Saas'},
    {category: '🎒  Case Study'},
    {category: '💼  Saas'},

]

export default function Hero(){
    return(
        <header className="flex flex-col items-center justify-center">
            <Image src={logo} alt="logo"/>
            <div className="w-72">
                <h1 className="text-3xl text-center font-bold text-zinc-700">Inovando o mundo com a tecnologia</h1>
                <ul className="flex gap-3 flex-wrap justify-center font-semibold mt-4">
                {Keywords.map(key =>(
                    <li>
                        <h3>{key.category}</h3>
                    </li>
                ))}
            </ul>
            </div>
        </header>
    )
}