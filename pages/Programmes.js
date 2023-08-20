import Footer from "@/components/Footer";
import React from "react";
import img from '../assets/images/4783.png'
import Image from "next/image";
export default function Programmes() {
  return (
    <div className=" about ">
        <div className="bg-bg-blue">
        <div className=" md:w-10/12   p-4 md:p-14   m-auto grid md:grid-cols-2 ">
        <div className="h-7/12 w-7/12  m-auto md:m-0 md:grid">
      <Image src={img} />
      </div>
        <h2  className="text-5xl  md:mt-10 text-white">Programmes</h2>
     
       
        </div>
        </div>
       
        
      <div className="   p-4 md:p-14 contetnt bg-lime-50 pb-32 mb-9">
        {/* <svg className="w-2/12 absolute right-11" viewBox="0 0 200 200">
          <path
            d="M 45.109 116.589 C 45.109 108.64 50.316 100.116 53.819 93.211 C 56.596 87.736 59.779 82.457 62.821 77.125 C 65.405 72.597 67.286 67.432 70.469 63.275 C 71.118 62.427 73.026 59.572 73.286 61.919 C 74.249 70.594 73.559 79.838 73.396 88.558 C 73.108 104.02 71.538 119.655 70.14 135.056 M 99.78 70.42 C 90.933 71.896 88.033 83.292 86.899 90.427 C 85.664 98.198 84.718 107.189 88.582 114.317 C 90.432 117.73 96.305 121.021 100.109 119.557 C 106.272 117.182 112.443 108.94 114.6 102.701 C 117.971 92.949 119.154 83.952 112.294 75.366 C 108.43 70.529 104.402 71.739 99.121 71.739 M 134.517 70.394 C 130.579 75.556 127.031 82.41 125.766 88.483 C 124.45 94.802 122.694 103.954 126.244 110.04 C 127.447 112.102 129.167 115.733 132.201 116.311 C 135.253 116.892 140.838 112.741 143.415 111.268 C 145.983 109.801 147.172 107.307 149.077 105.312 C 150.692 103.621 151.275 100.578 152.019 98.504 C 153.326 94.864 153.71 90.598 153.71 86.782 C 153.71 83.375 153.284 78.069 150.695 75.217 C 147.535 71.734 137.532 69.617 133.193 72.096 M 101.097 131.099 C 107.243 128.022 113.714 126.338 120.529 125.529 C 131.78 124.192 144.261 123.52 155.109 127.141 M 113.613 139.013 C 118.831 138.433 124.072 135.802 129.421 135.056 C 135.287 134.238 141.281 133.737 147.206 133.737"
            stroke-width="5"
            stroke="rgb(58, 114, 157)"
            stroke-linecap="round"
            fill="none"
            stroke-miterlimit="10"
          ></path>
        </svg> */}
        <div className="md:w-10/12 m-auto     ">
          <div className="prgm__row p-5">
            <h3 className="text-xl">Education for All</h3>
            <p className="mt-2 text-lg">
              Establishment and operation of schools in underserved areas,
              providing quality education from primary to secondary levels.
            </p>
            <p className="mt-2 text-lg">
              Scholarships and financial assistance programs to support students
              from economically disadvantaged backgrounds.
            </p>
            <p className="mt-2 text-lg">
              Teacher training and professional development programs to enhance
              teaching methodologies and pedagogical skills.
            </p>
            <p className="mt-2 text-lg">
              Provision of educational resources, including books, stationery,
              and technology, to facilitate effective learning.
            </p>
          </div>

          <div className="mt-10 p-5 prgm__row"
 
          >
            <h3 className="text-xl">Women Empowerment</h3>
            <p className="mt-2 text-lg">
              {" "}
              Vocational training programs to equip women with marketable
              skills, such as sewing, handicrafts, computer literacy, and
              entrepreneurship.{" "}
            </p>
            <p className="mt-2 text-lg">
              Leadership and life skills development workshops to enhance
              confidence, decision-making abilities, and personal development.
            </p>
            <p className="mt-2 text-lg">
              Awareness campaigns on women&apos;s rights, health, and hygiene,
              promoting gender equity and challenging societal stereotypes.
            </p>
            <p className="mt-2 text-lg">
              Microfinance initiatives and small business incubation programs to
              enable women to start their own businesses and become economically
              independent.
            </p>
          </div>

          <div className="mt-10 p-5 prgm__row "  >
            <h3 className="text-xl">Community Development</h3>
            <p className="mt-2 text-lg">
              Healthcare initiatives, including medical camps, health awareness
              sessions, and access to basic healthcare services in remote areas.
            </p>
            <p className="mt-2 text-lg">
              Sanitation projects, such as construction of toilets and hygiene
              awareness campaigns, to improve community health and sanitation
              practices.
            </p>
            <p className="mt-2 text-lg">
              Infrastructure development, including the construction and
              renovation of community centers, Masjids, schools, and basic
              amenities in marginalized areas.
            </p>
            <p className="mt-2 text-lg">
              Livelihood support programs, such as agricultural training,
              livestock management, and cooperative initiatives to improve
              income generation opportunities for communities.
            </p>
          </div>

          <div className="mt-10 p-5 prgm__row"  >
            <h3 className="text-xl">Interfaith Harmony</h3>
            <p className="mt-2 text-lg">
              Interfaith dialogue forums, seminars, and workshops to promote
              understanding, tolerance, and respect among people of different
              faiths.
            </p>
            <p className="mt-2 text-lg">
              Cultural exchange programs and events that celebrate diversity and
              foster relationships among individuals from various religious
              backgrounds.
            </p>
            <p className="mt-2 text-lg">
              Joint community service projects involving members from different
              religious communities, focusing on shared social causes and
              humanitarian initiatives.
            </p>
            <p className="mt-2 text-lg">
              Religious literacy programs to enhance knowledge and understanding
              of different faith traditions, fostering peaceful coexistence.
            </p>
          </div>

          <div className="mt-10 p-5 prgm__row"   >
            <h3 className="text-xl">Research and Advocacy</h3>
            <p className="mt-2 text-lg">
              Conducting research and studies to identify educational and social
              issues specific to the northern states of India, informing
              evidence-based interventions.
            </p>
            <p className="mt-2 text-lg">
              Advocacy campaigns to raise awareness about the importance of
              education, community empowerment, and development, targeting
              policymakers, stakeholders, and the wider public.
            </p>
            <p className="mt-2 text-lg">
              Collaboration with other organizations, universities, and research
              institutions to share knowledge, best practices, and innovative
              approaches in the field of education and community development.
            </p>
            <p className="mt-2 text-lg">
              Policy recommendations and engagement with government bodies to
              influence policies that promote inclusive education, gender
              equality, and sustainable community development.
            </p>
          </div>

          <div className="mt-10 p-5 prgm__row">
            <h3 className="text-xl">Islamic Scholars Program</h3>
            <p className="mt-2 text-lg">
              Establish a specialized training program for aspiring Islamic
              scholars, providing them with comprehensive education in Islamic
              sciences, including Quranic studies, Hadith, Fiqh (Islamic
              jurisprudence), Tafsir (Quranic exegesis), and Islamic history.{" "}
            </p>
            <p className="mt-2 text-lg">
              Emphasize critical thinking skills, research methodologies, and
              proficiency in Arabic to ensure scholars are well-equipped to
              address the challenges faced by Muslims in the modern world.
            </p>
            <p className="mt-2 text-lg">
              Mentorship and apprenticeship opportunities for
              scholars-in-training, enabling them to learn from experienced
              scholars and gain practical experience in serving the community.
            </p>
            <p className="mt-2 text-lg">
              Continuous professional development programs to update scholars
              with contemporary issues, emerging trends, and research
              advancements in relevant fields.
            </p>
          </div>

          <div className="mt-10 p-5 prgm__row">
            <h3 className="text-xl">Islamic Knowledge Dissemination</h3>
            <p className="mt-2 text-lg">
              Organize educational seminars, conferences, and workshops led by
              trained scholars, covering a wide range of Islamic topics and
              addressing the needs of diverse audiences.{" "}
            </p>
            <p className="mt-2 text-lg">
              Publish books, pamphlets, and online resources authored by the
              scholars, providing accessible and reliable information on Islamic
              teachings, ethics, and spirituality.{" "}
            </p>
            <p className="mt-2 text-lg">
              Collaborate with educational institutions, mosques, and community
              centers to offer Islamic studies programs, courses, and workshops
              for individuals of all ages and backgrounds.{" "}
            </p>
            <p className="mt-2 text-lg">
              Utilize digital platforms and social media to reach a wider
              audience, providing online lectures, webinars, and podcasts on
              various Islamic subjects.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
