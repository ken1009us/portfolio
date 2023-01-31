import Head from 'next/head'
import { BsMoonFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import ken from "../public/ken.png";
import python from "../public/python.png";
import javascript from "../public/javascript.png";
import java from "../public/java.png";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>Ken Wu Portfolio</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className= "min-h-screen">
          <nav className="py-10 mb-3 flex justify-between"> 
            <h1 className="text-xl font-burtons dark:text-white">DEVELOPED BY KEN WU</h1>
            <ul className='flex items-center'>
              <li>
                <BsMoonFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li>
                {/* <a className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                   download href="../public/resume.pdf">   
                   Resume
                </a> */}
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                   href="/resume.pdf"
                   target="_blank" rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-gray-600 font-medium md:text-6xl dark:text-white">
              Ken Wu
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white ">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              A software engineering intern at PhysIQ 
              while pursuing the master's degree at UIUC.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-1 text-gray-700 dark:text-white">
            <a href="https://github.com/ken1009us" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/shwu02/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a href="https://www.youtube.com/channel/UC7oQEyY_YekhD6M1CuzDXDw" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-orange-400 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={ken} alt="" layout="fill" objectFit="cover"/>
          </div>
        </section>
        

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">My work experience:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              - Replaced makefile with noxfile by using <span className="text-orange-700 dark:text-teal-500">Python</span><br />
              - Programmed <span className="text-orange-700 dark:text-teal-500">YAML</span> file to integrate CI jobs with nox; Improved shell-based testing and reduced CI runtime by 25%<br />
              - Constructed Python functions to query some data through <span className="text-orange-700 dark:text-teal-500">JSON</span> pipeline; Generated test files to check the output<br />
              - Solved validation issue and created test function in <span className="text-orange-700 dark:text-teal-500">rest-api</span> repository by programming <span className="text-orange-700 dark:text-teal-500">Kotlin</span> function<br />
              - Created a <span className="text-orange-700 dark:text-teal-500">Slack bot</span> using <span className="text-orange-700 dark:text-teal-500">JavaScript</span> and <span className="text-orange-700 dark:text-teal-500">Node.js</span> to instantly respond to questions from employees and save time
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={python} alt="" width={80} height={80}/>
              <h3 ><a href="http://newsflow-website.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white rounded-md px-4 py-2">Newsflow</a></h3>
                <p className="p-6">
                  A img app that display the trending news and a search bar 
                  for users to type any words related to their desired news or articles and countries.
                </p>
              <h4 className="py-4 text-teal-600">Language and tools I use</h4>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">Dash</p>
                <p className="text-gray-800 py-1">Twitter API</p>
                <p className="text-gray-800 py-1">HTML</p>
                <p className="text-gray-800 py-1">Heroku</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={javascript} alt="" width={80} height={80}/>
              <h3 ><a href="https://www.youtube.com/watch?v=xnb59A2XoEk" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white rounded-md px-4 py-2">Group buy</a></h3>
                <p className="p-6">
                  A imgsite to help individuals identify the products they want to buy and share with other people, 
                  as well as to help them save money and make shopping easier.
                </p>
              <h4 className="py-4 text-teal-600">Language and tools I use</h4>
                <p className="text-gray-800 py-1">JavaScript</p>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">Express.js</p>
                <p className="text-gray-800 py-1">Google Cloud Platform</p>
                <p className="text-gray-800 py-1">MySQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={java} alt="" width={80} height={80}/>
              <h3 ><a href="https://github.com/ken1009us/hotel-reservation-application" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white rounded-md px-4 py-2">Hotel Reservation Application</a></h3>
                <p className="p-6">
                  An app will allow customers to find and book a hotel room based on room availability.
                  This project demonstrate my abilities to design classes using OOP.
                </p>
              <h4 className="py-4 text-teal-600">Language and tools I use</h4>
                <p className="text-gray-800 py-1">Java</p>
                <p className="text-gray-800 py-1">Command Line Interface</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">My project screenshots</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={img1} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="response"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={img2} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="response"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={img3} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="response"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={img4} alt="" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="response"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
