import Image from "next/image";
import logo from "../assets/images/logo.png";
import Head from "next/head";
import GioIcon from "@/assets/icons/GioIcon";
import ShapeOne from "@/assets/icons/ShapeOne";
import ShapeTwo from "@/assets/icons/ShapeTwo";
import A from "@/assets/icons/A";
import B from "@/assets/icons/B";
import C from "@/assets/icons/C";
import D from "@/assets/icons/D";
import E from "@/assets/icons/E";
import mah from "../assets/../assets/images/mah.jpg";
import fazil from "../assets/images/fazil.jpg";
import fawad from "../assets/images/fawad.jpg";
import Footer from "@/components/Footer";
export default function Home() {
  const backgroundStyle = {
    backgroundImage:
      "url('https://framerusercontent.com/images/AlOVeFQDQFFEH43WQb2jleVni4.jpg?scale-down-to=512')",
    // backgroundImage: "",
    //  background:'green',
    // width: "100%",


    backgroundSize: "cover",
 
  };
  const backgroundStyle2 = {
    backgroundImage:
      "url('https://framerusercontent.com/images/BeiG50pQTUEgpYdlxEVffVwYxZU.jpg?scale-down-to=512')",
    // backgroundImage: "",
    //  background:'green',
    // width: "450px",
    // height: "400px",

    backgroundSize: "cover",
    filter: "grayscale(100%)",
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IRIS FOUNDATION</title>

        <meta
          name="description"
          content="Iris Foundation’s innovative approach equips rural educators with the skills, resources, and support needed to transform the lives of their students, creating a brighter future for India’s rural communities."/>
      </Head>
      <main className="home">
        <div className="border-b pb-20">
        <div className=" bg-white p-4 pt-5     md:p-0">
          <div className="flex flex-col items-center justify-center main__banner">
            <div className=" w-20 h-20 md:w-24 md:h-24   ">
              <Image src={logo} />
            </div>
            <h1
              style={{ color: "#0077B8" }}
              className="mt-1 text-4xl md:text-6xl lg:text-7xl text-center text-gray-600"
            >
              Igniting Potential in <br /> Rural India
            </h1>

            <div className="mt-10 grid md:grid-cols-2 gap-3 w-full md:w-fit">
              <button className=" px-6  py-2 bg-black text-white   rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring focus:ring-gray-500">
                Learn More
              </button>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                Donate Now
              </button>
            </div>
          </div>
        </div>

        {/* <<<<< ACHIVEMENTS >>>>>>>>>>>>>>> */}
        <div className="mt-20 md:mt-0 py-5 md:py-24 px-4 md:px-0 bg-black">
          <div className="black__box w-full md:w-3/4   gap-5  grid md:grid-cols-3 ">
            <div
              style={{ color: "rgb(255, 133, 0)" }}
              className="bg-zinc-950 rounded-xl  py-9 flex flex-col items-center justify-center   "
            >
              <div className="w-20 h-20  ">
                <GioIcon />
              </div>

              <p className="text-5xl text-center  ">
                <span className="font-bold">25</span>+
              </p>
              <p className="text-lg" style={{ color: "rgb(255, 158, 0)" }}>
                Villages Reached
              </p>
            </div>
            <div
              style={{ color: "rgb(255, 133, 0)" }}
              className="bg-zinc-950 rounded-xl  py-9 flex flex-col items-center justify-center   "
            >
              <div className="w-20 h-20  ">
                <ShapeOne />
              </div>

              <p className="text-5xl text-center  ">
                <span className="font-bold">500</span>+
              </p>
              <p className="text-lg" style={{ color: "rgb(255, 158, 0)" }}>
                Students Impacted
              </p>
            </div>
            <div
              style={{ color: "rgb(255, 133, 0)" }}
              className="bg-zinc-950 rounded-xl  py-9 flex flex-col items-center justify-center   "
            >
              <div className="w-20 h-20  ">
                <ShapeTwo />
              </div>

              <p className="text-5xl text-center  ">
                <span className="font-bold">120</span>+
              </p>
              <p className="text-lg" style={{ color: "rgb(255, 158, 0)" }}>
                Teachers Trained
              </p>
            </div>
          </div>
        </div>

        {/* <<<<<<<<< VISION >>>>>>>>>>>>>>>>>> */}
        <div className="px-4 md:px-0 grid md:grid-cols-2 black__box w-full md:w-3/4 pt-10 md:pt-20 ">
          <p className="text-2xl md:text-5xl font-semibold text-gray-950">
            Empowering <br /> Educators, <br /> Transforming Lives
          </p>

          <p className="text-lg mt-2 md:mt-0">
            Iris Foundation&apos;s innovative approach equips rural educators with
            the skills, resources, and support needed to transform the lives of
            their students, creating a brighter future for India&apos;s rural
            communities.
          </p>
          <div style={backgroundStyle} className="rounded-2xl mt-4  md:hidden   h-52  "></div>
          
        </div>

        {/* <<<<<<< MISSION >>>>>>>>>>>>> */}
        <div className="px-4 md:px-0  grid gap-4 md:gap-10 md:grid-cols-2 black__box   md:w-3/4 pt-10 md:pt-20">
          <div className="flex flex-col  justify-center  ">
            <p className="text-2xl md:text-4xl  font-semibold text-gray-950">
              Curriculum Tailored to Rural Students’ Needs
            </p>

            <p className="text-lg mt-3">
              Our custom-built curriculum bridges the learning gap for students
              in rural India, fostering critical thinking and problem-solving
              abilities.
            </p>
          </div>

          <div>
            <div style={backgroundStyle} className="rounded-2xl hidden md:grid h-52 md:h-80"></div>
          </div>

          <div style={backgroundStyle2} className="rounded-2xl   md:hidden   h-52 md:h-80"></div>
          
        </div>

        <div className="grid gap-10 md:grid-cols-2 black__box black__box   md:w-3/4 px-4 md:px-0 md:pt-10">
          <div>
            <div style={backgroundStyle2} className="rounded-2xl hidden md:grid    h-52 md:h-80"></div>
          </div>
          <div className="flex flex-col  justify-center  ">
            <p className="text-2xl md:text-4xl  font-semibold text-gray-950">
              Supporting Teachers’ Professional Development
            </p>

            <p className="text-lg mt-3">
              Iris Foundation offers comprehensive training and mentorship
              programs, ensuring cutting-edge educational methods reach rural
              classrooms.
            </p>
          </div>
        </div>

        {/* <<<<<<<<<<< ICONS >>>>>>>> */}
        <div className="icon__box md:w-3/4 grid grid-cols-2 md:grid-cols-6 gap-5 pt-5 md:pt-32">
          <div className="h-28 w-28 opacity-50  ">
            <A />
          </div>
          <div className="h-28 w-28 opacity-50">
            <B />
          </div>{" "}
          <div className="h-28 w-28 opacity-50">
            <A />
          </div>{" "}
          <div className="h-28 w-28 opacity-50">
            <C />
          </div>
          <div className="h-28 w-28 opacity-50">
            <D />
          </div>
          <div className="h-28 w-28 opacity-50">
            <E />
          </div>
        </div>

        {/* <<<<<<<<< TEAM >>>>>>>>>>>>>>> */}
        <div className="black__box md:w-3/4 px-4 md:px-0 gap-5 grid md:grid-cols-3 pt-10  md:pt-36"
        
        style={{color:'rgb(3, 4, 94)'}}
        >
          <div>
            <div className="rounded-full m-auto  h-40 w-40 md:h-52 md:w-52 overflow-hidden">
              <Image src={mah} />
            </div>
            <p className="text-center md:text-lg mt-3">DR. MUHAMMED ABDUL HAKKIM KANDI</p>
          <p className=" text-center md:text-lg">Chief Patron</p>
          </div>
          <div>
            <div className="rounded-full m-auto  h-40 w-40 md:h-52 md:w-52  overflow-hidden">
              <Image src={fazil} />
            </div>
            <p className="text-center text-lg mt-3">MUHAMMED FAZIL NURANI</p>
            <p className=" text-center text-lg">General Secretary</p>
          </div>
          <div>
            <div className="rounded-full m-auto h-40 w-40 md:h-52 md:w-52 overflow-hidden">
              <Image src={fawad} />
            </div>
            <p className="text-center text-lg mt-3">FAWAD AHMED</p>
         <p className=" text-center text-lg">     President</p>
        
          </div>
        </div>

        {/* <<<<<<<<<<< JOIN >>>>>>>>>>>>>> */}
        <div className="black__box   md:w-3/4 px-4 md:px-0  pt-28">
         <h4 
         className=" text-2xl md:text-4xl font-bold"
         style={{color:'rgb(2, 62, 138)'}}>Join our endeavor to redefine  <br/> rural education in India.</h4>
       

       <div className="mt-5">
      
       <button 
       
       className="px-6 py-2 text-base bg-blue-600 text-white  rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
       >
                Get involved
              </button>
              <button className="px-6 py-2 ml-3 bg-blue-500 text-white text-base rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                Donate Today
              </button>
       </div>
        </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}
