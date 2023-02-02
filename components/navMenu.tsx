import Linkto from "./link";

export default function Menu(){
    return(
        <div className="flex justify-center py-7">
            <nav>
                <ul className="flex gap-6">
                    <Linkto path="/" label="Home"/>
                    <Linkto path="/Blog" label="Blog"/>
                    <Linkto path="/contact" label="Contact"/>
                </ul>
            </nav>
        </div>
    )
}