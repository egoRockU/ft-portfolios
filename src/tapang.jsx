import TapangBG from './images/tapang.jpg'
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import About from './images/about.jpg'
import { FaComputer } from "react-icons/fa6";


const Tapang = () => {
    return (
        <>
            <header className='py-4 sticky top-0 bg-black'>
                <div className='container mx-auto flex justify-between py-4 bg-black'>
                    <h1 className='text-2xl font-medium text-white'>Marcus Tapang</h1>
                <div>
                    <ul className='list-none flex space-x-5 text-xl text-white'>
                        <li className='cursor-pointer hover:border-b-2'><a href="#Home">Home</a></li>
                        <li className='cursor-pointer hover:border-b-2'><a href="#About">About</a></li>
                        <li className='cursor-pointer hover:border-b-2'><a href="#Services">Services</a></li>
                        <li className='cursor-pointer hover:border-b-2'><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
                </div>
                
            </header>
            <div className='h-screen w-full bg-black'>
            
            <div id="Home" className='container mx-auto text-gray-200 h-full flex flex-col justify-center items-start pl-10'>
                <div className=' flex items-center justify-around w-full'>
                    <div className='mb-10'>
                        <p className='text-2xl mb-3'>Hello, My name is</p>
                        <p className='text-5xl font-medium mb-3'>Marcus James Tapang</p>
                        <p className='text-3xl font-semibold mb-3'>Web Developer</p>
                        <button className='bg-blue-800 px-3 py-2 rounded'>Download CV</button>
                        <div className='flex text-gray-400 space-x-10 mt-16'>
                            <FaFacebookSquare size={25} className='cursor-pointer'/>
                            <FaGithubSquare size={25} className='cursor-pointer'/>
                            <FaSquareXTwitter size={25} className='cursor-pointer'/>
                        </div>
                    </div>
                    <div>
                        <img src={TapangBG} alt="BG" className='h-[600px]' />
                    </div>
                </div>
            </div>
            </div>
            {/* About Me */}
            <div id="About" className='py-16 container mx-auto'>
                <p className='text-sm text-center'>My History</p>
                <h1 className='text-5xl text-center'>About Me</h1>
                <div className='flex pt-10 justify-between'>
                    <div className='w-[50%]'>
                        <div>
                            <p className='text-3xl'>Hello, I am</p>
                            <p className='text-xl'>Freelance frontend developer, I am passionate about creating and developing web interfaces. With years of experience in web design and development.</p>
                            <div className='text-center text-xl mt-16'>
                                <p className='text-5xl mt-4 mb-2 '>05</p>
                                <p>Years of Experience</p>

                                <p className='text-5xl mt-8 mb-2'>29+</p>
                                <p>Projects Complete</p>

                                <p className='text-5xl mt-8 mb-2'>07</p>
                                <p>Best work awards</p>
                            </div>
                        </div>
                    </div>
                    
                    <div> 
                        <img src={About} alt="" className='rounded-xl h-[600px] ' />
                    </div>
                </div>
            </div>
            {/* Services */}
            <div id="Services" className='mt-10 container mx-auto'>
                <p className='text-sm text-center'>What I Offer</p>
                <h1 className='text-5xl text-center'>Services</h1>
                <div className='flex justify-around gap-3 mt-10 mb-20'>
                    <div className=' py-10 px-5 flex flex-col justify-center items-center text-center rounded-lg shadow-2xl'>
                        <FaComputer size={50} />
                        <p className='text-3xl mb-4 font-medium'>Ui/Ux Design</p>
                        <p className='mb-4 text-xl'>Service that i offer and work, with years of experience in the work area</p>
                        <button className='bg-blue-800 text-gray-300 px-2 py-2 text-lg rounded-lg'>Know More</button>
                    </div>
                    <div className=' py-10 px-5 flex flex-col justify-center items-center text-center rounded-lg shadow-2xl'>
                        <FaComputer size={50}/>
                        <p className='mb-4 text-xl'>Service that i offer and work, with years of experience in the work area</p>
                        <button className='bg-blue-800 text-gray-300 px-2 py-2 text-lg rounded-lg'>Know More</button>
                    </div>
                    <div className=' py-10 px-5 flex flex-col justify-center items-center text-center rounded-lg shadow-2xl'>
                        <FaComputer size={50} />
                        <p className='text-3xl mb-4 font-medium'>Graphic Design</p>
                        <p className='mb-4 text-xl'>Service that i offer and work, with years of experience in the work area</p>
                        <button className='bg-blue-800 text-gray-300 px-2 py-2 text-lg rounded-lg'>Know More</button>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer id="Contact" className='bg-[#000] text-gray-400 text-center py-10'>
                <p className='text-4xl mb-4'>Marcus James Tapang</p>
                <p className='text-xl mb-6'>I am Marcus James and this is my personal website, consult me here.</p>
                <div className='flex justify-center space-x-14 mb-4'>
                            <FaFacebookSquare size={25} className='cursor-pointer'/>
                            <FaGithubSquare size={25} className='cursor-pointer'/>
                            <FaSquareXTwitter size={25} className='cursor-pointer'/>
                </div>
                <p>2024 Credits. All right reserved</p>
            </footer>
        </>
    )
}

export default Tapang