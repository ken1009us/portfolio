import { BsMoonFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillYoutube, AiOutlineMail} from "react-icons/ai";
import { useState } from "react";
import Head from "next/head"
import Image from "next/image";
import ken from "../public/ken.png";
import python from "../public/python.png";
import javascript from "../public/javascript.png";
import java from "../public/java.png";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import img5 from "../public/img5.png";
import img6 from "../public/img6.png";
import img7 from "../public/img7.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>Ken Wu&apos;s Portfolio</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className= "min-h-fit">
          <nav className="py-10 mb-3 flex justify-between"> 
            <h1 className="font-bomberEscort text-2xl dark:text-white">DEVELOPED BY KEN WU</h1>
            <ul className="flex items-center">
              <li className="pl-3">
                <BsMoonFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
              </li>
              <li>
                <a className="font-bomberEscort bg-gradient-to-b from-cyan-500 to-teal-500 bg-cyan-500 text-white px-2 py-2 rounded-md ml-4"
                   href="/resume.pdf"
                   target="_blank" rel="noopener noreferrer"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-1">
            <h2 className="text-8xl text-gray-600 font-paladins md:text-6xl dark:text-white">
              Ken Wu
            </h2>
            <h3 className="text-xl py-2 md:text-3xl font-paladins dark:text-white ">SOFTWARE ENGINEER</h3>
            <p className="text-md py-5 leading-8 font-blackthorns text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              A current second-year UIUC Information Science graduate student and a startup software engineering intern
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-1 text-gray-700 dark:text-white">
            <a href="https://github.com/ken1009us" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/shwu02/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a href="https://www.youtube.com/channel/UC7oQEyY_YekhD6M1CuzDXDw" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
            <a href="mailto:shwu2@illinois.edu"><AiOutlineMail /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-gray-300 rounded-full w-80 h-80 mt-12 overflow-hidden md:h-80 md:w-80">
            <Image src={ken} alt=""/>
          </div>
        </section>
        <section>
          <div className="pt-10">
            <h3 className="text-center text-3xl font-bomberEscort py-10 dark:text-white">About me:</h3>
            <p className="text-md px-8 pb-10 font-blackthorns leading-8 text-gray-800 dark:text-white">
              I am a second-year M.S. student in information science at the University of Illinois Urbana-Champaign. 
              Currently, I am employed at PhysIQ as a software engineering intern, where I integrate and migrate pipelines and resolve API issues such as validation. 
              Previously, I worked on several projects, including the NewsFlow website, which was built with Python and the Dash framework. 
              I also created another shopping-related website using JavaScript, React framework, Google Cloud Platform, and MySQL. 
              Additionally, I created a Slackbot to address the company onboarding issue.
            </p>
          </div>
          <h3 className="text-center text-3xl py-10 font-bomberEscort dark:text-white">My projects</h3>
          {/* <div className="grid grid-cols-3 gap-10 font-blackthorns"> */}
          <div className="flex flex-col lg:flex-row gap-10 font-blackthorns">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={python} alt="" width={80} height={80}/>
              <h3 ><a href="http://newsflow-website.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white rounded-md px-4 py-2">Newsflow</a></h3>
                <p className="p-6">
                  A web app that display the trending news and a search bar 
                  for users to type any words related to their desired news or articles and countries.
                </p>
              <h4 className="py-4 text-teal-600">Language and tools I use</h4>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">Dash</p>
                <p className="text-gray-800 py-1">Twitter API</p>
                <p className="text-gray-800 py-1">HTML</p>
                <p className="text-gray-800 py-1">Heroku</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={javascript} alt="" width={80} height={80}/>
              <h3 ><a href="https://www.youtube.com/watch?v=xnb59A2XoEk" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white rounded-md px-4 py-2">Group buy</a></h3>
                <p className="p-6">
                  A website to help individuals identify the products they want to buy and share with other people, 
                  as well as to help them save money and make shopping easier.
                </p>
              <h4 className="py-4 text-teal-600">Language and tools I use</h4>
                <p className="text-gray-800 py-1">JavaScript</p>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">Express.js</p>
                <p className="text-gray-800 py-1">Google Cloud Platform</p>
                <p className="text-gray-800 py-1">MySQL</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={java} alt="" width={80} height={80}/>
              <h3 ><a href="https://github.com/ken1009us/hungry-snake" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white rounded-md px-4 py-2">Hungry Snake</a></h3>
                <p className="p-6">
                This is a classic Snake Game creating by Java. 
                The game allows the player to control a snake that moves around the screen, eating food and growing longer with each food item. 
                The player must avoid hitting the snake's own body.
                </p>
              <h4 className="py-4 text-teal-600">Language and tools I use</h4>
                <p className="text-gray-800 py-1">Java</p>
                <p className="text-gray-800 py-1">Command Line Interface</p>
                <p className="text-gray-800 py-1">IntelliJ IDEA</p>
            </div>
          </div>
          {/* <div className="grid grid-cols-3 gap-10 font-blackthorns"> */}
          <div className="flex flex-col lg:flex-row gap-10 font-blackthorns">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={java} alt="" width={80} height={80}/>
              <h3 ><a href="https://github.com/ken1009us/hotel-reservation-application" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white rounded-md px-4 py-2">Hotel Reservation Application</a></h3>
                <p className="p-6">
                  An app will allow customers to find and book a hotel room based on room availability.
                  This project demonstrate my abilities to design classes using OOP.
                </p>
              <h4 className="py-4 text-teal-600">Language and tools I use</h4>
                <p className="text-gray-800 py-1">Java</p>
                <p className="text-gray-800 py-1">Command Line Interface</p>
                <p className="text-gray-800 py-1">IntelliJ IDEA</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={python} alt="" width={80} height={80}/>
              <h3 ><a href="https://github.com/ken1009us/data-analysis-of-bike-sharing" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white rounded-md px-4 py-2">Data analysis of bike Sharing</a></h3>
                <p className="p-6">
                  This project enhances bike sharing data analysis on Kaggle, 
                  investigating additional details with two added hypotheses.
                </p>
              <h4 className="py-4 text-teal-600">Language and tools I use</h4>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">Scipy</p>
                <p className="text-gray-800 py-1">Numpy</p>
                <p className="text-gray-800 py-1">Pandas</p>
                <p className="text-gray-800 py-1">Matplotlib</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={python} alt="" width={80} height={80}/>
              <h3 ><a href="https://github.com/ken1009us/machine-learning-project" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white rounded-md px-4 py-2">Category predictor ML project</a></h3>
                <p className="p-6">
                  This project trains artificial intelligence to categorize news or articles into different categories, 
                  such as video games, food, international, etc.
                </p>
              <h4 className="py-4 text-teal-600">Language and tools I use</h4>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">Keras</p>
                <p className="text-gray-800 py-1">Tensorflow</p>
                <p className="text-gray-800 py-1">Pandas</p>
                <p className="text-gray-800 py-1">Matplotlib</p>
            </div>
          </div>
          {/* <div className="grid grid-cols-3 gap-10 font-blackthorns"> */}
          <div className="flex flex-col lg:flex-row gap-10 font-blackthorns">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-300">
              <Image src={python} alt="" width={80} height={80}/>
              <h3 ><a href="https://ken1009us.github.io/meteorite-visualization/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white rounded-md px-4 py-2">Meteorite Visualization</a></h3>
                <p className="p-6">
                  Create a meteorite dataset visualization with various analyses based on the data&apos;s content.
                </p>
              <h4 className="py-4 text-teal-600">Language and tools I use</h4>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">Vega-Lite</p>
                <p className="text-gray-800 py-1">HTML</p>
                <p className="text-gray-800 py-1">Pandas</p>
                <p className="text-gray-800 py-1">Numpy</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-center text-3xl py-10 font-bomberEscort dark:text-white">Some project screenshots</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-2xl" style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image src={img1} alt="" className="rounded-lg object-cover" layout="response"/>
            </div>
            <div className="basis-1/3 flex-1 shadow-2xl" style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image src={img2} alt="" className="rounded-lg object-cover" layout="response"/>
            </div>
            <div className="basis-1/3 flex-1 shadow-2xl" style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image src={img3} alt="" className="rounded-lg object-cover" layout="response"/>
            </div>
            <div className="basis-1/3 flex-1 shadow-2xl" style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image src={img4} alt="" className="rounded-lg object-cover" layout="response"/>
            </div>
            <div className="basis-1/3 flex-1 shadow-2xl" style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image src={img5} alt="" className="rounded-lg object-cover" layout="response"/>
            </div>
            <div className="basis-1/3 flex-1 shadow-2xl" style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image src={img6} alt="" className="rounded-lg object-cover" layout="response"/>
            </div>
            <div className="basis-1/3 flex-1 shadow-2xl" style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image src={img7} alt="" className="rounded-lg object-cover" layout="response"/>
            </div>
            <div className="basis-1/3 flex-1 shadow-2xl" style={{ width: "100%", height: "100%", position: "relative" }}>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
