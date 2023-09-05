 
// import logoOne from "../public/images/home/logo.png";
import mobmenu from '../assets/images/mobile_menu.svg'
import logo from '../assets/images/logo.png'
import Image from "next/image";
 // import mobileMenu from "../public/images/mobile_menu.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
 
 

 
export default function Navbar() {
  const [social, setSocial] = useState(false);
  const [state, setState] = useState(false);
  const router = useRouter(); 


// if (successState ){
//   successAlert()
// }
 const hideNavBar = () => {
    if (window.scrollY >= 10) {
      setState(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", hideNavBar);
  },[]);


  return (
    <div className="header">
      <div className="header__row flex  lg:grid grid-cols-2  justify-between">
        <div id="expand__icon">
          <Image onClick={() => setState(!state)} src={mobmenu} />
        </div>

        <div className="logo__div rounded-full bg-black">
          <div className="logo">
            <Link href="/">
              <Image src={logo} />
            </Link>
          </div>
        </div>

        <div className="header__right ">
        
        <Link href="/">
            <h5
              className={
                router.pathname == "/" ? "active" : "header__right__h5"
              }
            >
              HOME 
            </h5>
          </Link>
          <Link  href="About" >
            <h5
              className={
                router.pathname == "/About" ? "active" : "header__right__h5 "
              }
            >
              ABOUT
            </h5>
          </Link>

          {/* <span className=" group cursor-pointer ">
            <Link href="/services" >
              <h5
                className={
                  router.pathname == "/services"
                    ? "active"
                    : "header__right__h5 "
                }
              >
             
                SERVICES
              </h5>
            </Link>

            <span style={{ textAlign: "left", zIndex: "1" }}>
              <ul className="dropdown-menu absolute hidden   group-hover:block  text-gray-700 pt-6">
                <span className="development__head cursor-pointer group">
                  <div className="flex   service__group__span rounded-t bg-gray-200 hover:bg-gray-400 py-2">
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Development
                    </li>
                    <ArrowRightIcon id="service__group__arrow" />
                  </div>

                  <ul className="development__list">
                    <Link href="/ecommerce-web-development-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2  whitespace-no-wrap text-sm ">
                        {" "}
                        Website development
                      </li>
                    </Link>
                    <Link href="/software-development-company-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Software development
                      </li>
                    </Link>
                    <Link href="/mobile-app-development-kerala-india"   >
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        App development
                      </li>
                    </Link>
                    <Link href="/game-development-company-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Game development
                      </li>
                    </Link>
                  </ul>
                </span>

                <span className="design__head">
                  <div className="flex   service__group__span  bg-gray-200 hover:bg-gray-400 py-2">
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Designing
                    </li>
                    <ArrowRightIcon id="service__group__arrow" />
                  </div>
                  <ul className="design__list ">
                    <Link href="/graphicdesign-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 pt-3 py-2 px-2 block whitespace-no-wrap text-sm">
                        Graphic designing
                      </li>
                    </Link>

                    <Link href="/2d-3d-animation-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 pb-3 py-2 px-2 block whitespace-no-wrap text-sm">
                        Animation
                      </li>
                    </Link>
                  </ul>
                </span>

                <span className="marketing__head">
                  <div className="flex   service__group__span  bg-gray-200 hover:bg-gray-400 py-2">
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Marketing
                    </li>
                    <ArrowRightIcon id="service__group__arrow" />
                  </div>
                  <ul className="marketing__list ">
                    <Link href="/digital-marketing-agency-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 pt-3 block whitespace-no-wrap text-sm">
                        Digital marketing
                      </li>
                    </Link>
                    <Link href="/branding-company-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Branding
                      </li>
                    </Link>
                    <Link href="/seo-companies-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        SEO
                      </li>
                    </Link>
                    <Link href="/social-media-marketing-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        SMM
                      </li>
                    </Link>
                    <Link href="/bulk-sms-services-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Bulk sms and voice calls
                      </li>
                    </Link>
                    <Link href="/emailmarketing-company-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Email marketing
                      </li>
                    </Link>
                    <Link href="/influencer-company-kerala-india">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-2 block whitespace-no-wrap text-sm">
                        Influencer marketing
                      </li>
                    </Link>
                  </ul>
                </span>
                <span className="hosting__head">
                  <div className="flex   service__group__span  bg-gray-200 hover:bg-gray-400 py-2">
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Hosting
                    </li>
                    <ArrowRightIcon id="service__group__arrow" />
                  </div>
                  <ul className="hosting__list ">
                    <Link href="/domain">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 pl-4  block whitespace-no-wrap text-sm">
                        Domain
                      </li>
                    </Link>
                    <Link href="/hosting">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 pl-4  block whitespace-no-wrap text-sm">
                        Hosting
                      </li>
                    </Link>
                    <Link href="/cloud">
                      <li className=" bg-gray-200 hover:bg-gray-400  py-2 pl-4 block whitespace-no-wrap text-sm">
                        Cloud computing
                      </li>
                    </Link>
                    <Link href="/data">
                      <li className=" bg-gray-200 hover:bg-gray-400  py-2 pl-4 block whitespace-no-wrap text-sm">
                        Data migration
                      </li>
                    </Link>
                  </ul>
                </span>

                <span className="expert__head">
                  <div className="flex   service__group__span  bg-gray-200 hover:bg-gray-400 py-2">
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Expert systems
                    </li>
                    <ArrowRightIcon id="service__group__arrow" />
                  </div>
                  <ul className="expert__list">
                    <Link href="/ai">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 pl-4 block whitespace-no-wrap text-sm">
                        Artificial intelligence
                      </li>
                    </Link>
                    <Link href="/robotics">
                      <li className=" bg-gray-200 hover:bg-gray-400 py-2 pl-4 block whitespace-no-wrap text-sm">
                        Robotics
                      </li>
                    </Link>
                  </ul>
                </span>

                <Link href="/b_consultancy">
                  <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm">
                    Business consultancy
                  </li>
                </Link>
                <Link href="/research">
                  <li className="rounded-b bg-gray-200 hover:bg-gray-400 pb-3 py-2 px-4 block whitespace-no-wrap text-sm">
                    Research and development
                  </li>
                </Link>
              </ul>
            </span>
          </span> */}
          <Link href="Programmes">
            <h5
              className={
                router.pathname == "/Programmes"
                  ? "active"
                  : "header__right__h5 "
              }
            >
     PROGRAMMES
            </h5>
          </Link>
          <Link href="/Goals">
            <h5
              className={
                router.pathname == "/Goals" ? "active" : "header__right__h5 "
              }
            >
           GOALS
            </h5>
          </Link>
          <Link href="/">
            <h5
              className={
                router.pathname == "/Approach" ? "active" : "header__right__h5 "
              }
            >
              APPROACH
            </h5>
          </Link>
          <Link href="/">
            <h5
              className={
                router.pathname == "/Impact" ? "active" : "header__right__h5 "
              }
            >
             IMPACT
            </h5>
          </Link>


          <Link href="/">
            <h5
              className={
                router.pathname == "/Volunteer" ? "active" : "header__right__h5 "
              }
            >
            VOLUNTEER
            </h5>
          </Link>

          <button
            className="transform duration-400     hover:scale-105 ..."
            
          >
          Donate
          </button>
        </div>

      
      </div>

      {/*<<<<<<<<<<<<<<<<<<<<<<<< NAV BAR MOBILE VIEW COLLAPS >>>>>>>>>>>>>>>>>>>>> */}
      {state ? (
        <div id="collaps">
          <Link href="/">
            <h5
              className={
                router.pathname == "/" ? "active_collaps" : "collaps__head"
              }
            >
              Home
            </h5>
          </Link>

          <Link href="About">
            <h5
              className={
                router.pathname == "/about"
                  ? "active_collaps"
                  : "collaps__head "
              }
            >
              About  
            </h5>
          </Link>

          <Link href="/Programmes">
            <h5
              className={
                router.pathname == "/Programmes"
                  ? "active_collaps"
                  : "collaps__head "
              }
            >
         Programmes
            </h5>
          </Link>

          <Link href="/Goals">
            <h5
              className={
                router.pathname == "/Goals"
                  ? "active_collaps"
                  : "collaps__head "
              }
            >
       Milestone Goals
            </h5>
          </Link>

          <Link href="/">
            <h5
              className={
                router.pathname == "/Approach"
                  ? "active_collaps"
                  : "collaps__head"
              }
            >
              Approach
            </h5>
          </Link>

          <Link href="/">
            <h5
              className={
                router.pathname == "/Impact"
                  ? "active_collaps"
                  : "collaps__head "
              }
            >
           Impact
            </h5>
          </Link>

          <Link href="/">
            <h5
              className={
                router.pathname == "/Volunteer"
                  ? "active_collaps"
                  : "collaps__head "
              }
            >
        Volunteer
            </h5>
          </Link>
        </div>
      ) : (
        ""
      )}

      {/*<<<<<<<<<<<<<<<<<<<<<<< MODEL FOR FOR GETSTARTE BUTTON >>>>>>>>>>>>>>>>>>>> */}
      <div>
       

      
      </div>
     
    </div>
  );
}