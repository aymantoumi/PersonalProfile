export default function NavBar(){
    return (
        <header className="flex flex-row justify-between items-center text-slate-50 my-4 w-full fixed h-14 ">
            <h2 className="uppercase font-extrabold text-2xl mx-4">toumi</h2>
            <ul className="flex mx-4 gap-4">
                <li >Front-end</li>
                <li >Back-end</li>
                <li >Documentation</li>
                <li >Contact</li>
            </ul>
        </header>
    );
}