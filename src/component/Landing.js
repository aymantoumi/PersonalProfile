import Web from '../BackGround/website-ui-web-svgrepo-com.svg'; 
export default function Landing(){
    return(
        <section className="landing">
            <div className="flex flex-col flex-1 items-start gap-4">
                <h1 className="text-7xl font-bold">Ayman Toumi</h1>
                <button className="bg-emerald-900 p-4 rounded-3xl hover:scale-110 transition-all font-extrabold">Veiw projects</button>
                <p>
                As a new web developer, you have decided to create a personal website to showcase your skills and connect with others in the industry. You possess a strong understanding of front-end and back-end development as well as the latest web technologies and design trends. Your attention to detail and ability to create visually appealing and user-friendly websites sets you apart and makes you well-suited for the task of building your personal site. You are dedicated to creating a website that accurately reflects your abilities and you are constantly working to improve your skills and stay up-to-date with the latest developments in the field. Your personal website will be a great platform for you to showcase your talents and connect with potential clients and collaborators.
                </p>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <img src={Web} className="h-64 w-64" alt='background'/>
            </div>
        </section>
    );
}