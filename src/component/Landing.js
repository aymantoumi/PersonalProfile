import Web from '../BackGround/website-ui-web-svgrepo-com.svg'; 
export default function Landing(){
    return(
        <section className="landing">
            <div className="flex flex-col flex-1 items-start gap-4">
                <h1 className="text-7xl font-bold">Ayman Toumi</h1>
                <button className="bg-emerald-900 p-4 rounded-3xl hover:scale-110 transition-all font-extrabold">Veiw projects</button>
                <p>
                I am a skilled web developer building a personal website to showcase my abilities and connect with industry professionals. I am dedicated to creating a visually appealing and user-friendly website that accurately reflects my skills.
                </p>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <img src={Web} className="h-64 w-64" alt='background'/>
            </div>
        </section>
    );
}