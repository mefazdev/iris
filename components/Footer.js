import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <div className="border-t pt-5 md:pt-20    mt-10 md:mt-36  ">
      <div className="grid md:w-3/4 px-4 md:px-0 gap-2 text-sm md:grid-cols-3 footer m-auto">
        <div>
          <p>About</p>
          <p>Mission</p>
          <p>Team</p>
          <p>Aproach</p>
        </div>

        <div>
          <p>Impacte</p>
          <p>Suucess Stories</p>
          <p>Progress</p>
          <p>Testimonials</p>
        </div>
        <div>
          <p>Support</p>
          <p>Donate</p>
          <p>Volunteer</p>
          <p>Partners</p>
        </div>
      </div>

      <div className="  m-auto mt-10 bottem border-b pb-10">
        <div className="m-auto w-fit">
        <TwitterIcon  className=" m-2"/>
        <FacebookIcon className=" m-2"  />
       
        <InstagramIcon className=" m-2"/>
        <YouTubeIcon className=" m-2"/>
     
        </div>
        <p className="text-center">© Iris Foundation, All Rights Reserved</p>
     <p className="text-center">Powered by Booreact</p>
      </div>
    </div>
  );
}
