export default function NavBar(){
    return (
        <header className="flex flex-row justify-between items-center text-slate-50 my-4 py-2 w-full fixed min-h-min ">
            <h2 className="uppercase font-extrabold text-2xl mx-4">toumi</h2>
            <ul className="flex mx-4 gap-4">
                <li ><a href="#Front_end" >Front-end</a></li>
                <li >Back-end</li>
                <li >Documentation</li>
                <li >Contact</li>
            </ul>
        </header>
    );
}