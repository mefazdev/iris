import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";
export default function Footer() {
  return (
    <div className="  pt-5 md:pt-15      ">
      <div className="grid md:w-3/4 px-4 md:px-0 gap-2 text-sm md:grid-cols-3 footer m-auto">
        <div>
         <Link href='/About'><p>About</p></Link> 
          <p>Mission</p>
          <p>Team</p>
          <p>Aproach</p>
        </div>

        <div>
          <Link href={'/Goals'}><p>Milstone Goals</p></Link>
          <p>Impact</p>
          <p>Suucess Stories</p>
          <p>Progress</p>
          {/* <p>Testimonials</p> */}
        </div>
        <div>
          <p>Support</p>
          <Link href='/Donate'><p>Donate</p></Link>
          
          <p>Volunteer</p>
          <p>Partners</p>
        </div>
      </div>

      <div className="  m-auto mt-10 bottem border-b pb-10">
        <div className="m-auto w-fit">
        <TwitterIcon  className=" m-2"/>
        <a href="https://m.facebook.com/IRISfellowship?eav=Afb_3zE6QKJMx54PiAZAJURuXjk25vUTH0O1jRnQMIC0fZw7X-NfCyJwMxpfEmi0q1o&tsid=0.7703882547619756&source=result"><FacebookIcon className=" m-2"  /></a>
        
       
       <a href="https://instagram.com/iris_foundation._?igshid=MzRlODBiNWFlZA=="><InstagramIcon className=" m-2"/></a> 
        <YouTubeIcon className=" m-2"/>
     
        </div>
        <p className="text-center">© Iris Foundation, All Rights Reserved</p>
     <p className="text-center">Powered by Booreact</p>
      </div>
    </div>
  );
}
