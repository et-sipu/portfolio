import Image from 'next/image'
import Face from '../public/face.png'
import { PageSEO } from '../components/SEO'
import siteMetadata from '../data/siteMetadata'
import Link from '../components/Link'

export default function Home() {
  return (
  <>
    <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
    <div className='grid grid-cols-3 gap-1 md:gap-4 p-4'>
      <div className='bg-slate-200 col-span-3 rounded-md p-4 dark:bg-indigo-900'>
        <p className='uppercase text-2xl font-bold md:text-5xl'>Muhammad Syahid bin Nor Azman</p>
        <p className='text-lg'>Software Dev. | Full Stack Engineer</p>
      </div>
      <div className='col-span-3 md:col-span-1'>
        <div className='bg-slate-200 rounded-md p-4 mb-1 dark:bg-indigo-900'>
          <div className='px-20 md:px-12'>
            <Image
              src={Face}
              alt="Picture of the author"
            />
          </div>
          <div className='p-2'>
            <div className='grid grid-cols-3'>
              <div className='col-span-3 text-xl font-bold'>CONTACT</div>
              <div className='col-span-1'>Phone</div><div className='col-span-2'><Link className='hover:font-bold' href={'https://wa.me/0133577994'} >0133577994</Link></div>
              <div className='col-span-1'>Email</div><div className='col-span-2'><Link className='hover:font-bold' href={'mailto:syahidnorazman@gmail.com'} >syahidnorazman@gmail.com</Link></div>
              <div className='col-span-1'>Address</div><div className='col-span-2 hover:font-bold cursor-pointer'>No. 24, Jalan Delta 8/17, Seksyen 8, 4000, Shah Alam, Selangor</div>
              <div className='col-span-1'>Git</div><div className='col-span-2'><Link className='hover:font-bold' href={'https://github.com/et-sipu'} >@et-sipu</Link> / <Link className='hover:font-bold' href={'https://gitlab.com/syahidnorazman'} >@syahidnorazman</Link> </div>
            </div>
          </div>
        </div>
        <Link href={'https://engineer.org.my/public/Engineers/Index/196641'} >
          <div className='bg-slate-200 rounded-md p-3 dark:bg-indigo-900'>
            <div className='shadow-none transition ease-in-out delay-50 hover:scale-105 hover:pl-3'>
              <p className='font-bold text-sm'>CERTIFICATE OF REGISTRATION OF GRADUATE ENGINEER</p>
              <p className='text-sm'>Board of Engineers Malaysia</p>
              <p className='text-sm'>Credential ID: 2220-040000-G1187240A</p>
            </div>
          </div>
        </Link>
      </div>
      <div className='col-span-3 md:col-span-2'>
        <div className='bg-slate-200 rounded-md p-4 dark:bg-indigo-900'>

          {/*  EXPERIENCE */}
          <div>
            <div className='text-xl font-bold pb-3'>EXPERIENCE<hr className='border-black dark:border-white'/></div>
            {/*  TIME DOTCOM BERHAD */}
            <Link href={'https://www.time.com.my/'} >
              <div className='transition ease-in-out delay-50 grid grid-cols-3 pb-3 gap-4 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
                <div className='col-span-1'>
                  <p className='font-bold'>SOFTWARE DEVELOPER</p>
                  <p className='text-sm'>Oct 2020 - Present</p>
                </div>
                <div className='col-span-2'>
                  <p className='font-bold'>TIME DOTCOM BERHAD</p>
                  <ul className="list-disc text-sm pl-4">
                    <li>Working with multiple in house software</li>
                    <li>Troubleshoot & fix production issues</li>
                    <li>Provide initiatives to improve software environment</li>
                  </ul>
                </div>
              </div>
            </Link>
            {/*  INTEGRATED MARINE WORKS SDN BHD */}
            <Link href={'http://imwsb.com.my/'} >
              <div className='transition ease-in-out delay-50 grid grid-cols-3 pb-3 gap-4 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
                <div className='col-span-1'>
                  <p className='font-bold'>IT PROGRAMMER</p>
                  <p className='text-sm'>Jul 2020 - Oct 2020</p>
                </div>
                <div className='col-span-2'>
                  <p className='font-bold'>INTEGRATED MARINE WORKS SDN BHD</p>
                  <ul className="list-disc text-sm pl-4">
                    <li>Develop and maintain Laravel application</li>
                    <li>Design commercial & corporate websites</li>
                    <li>IT Support</li>
                  </ul>
                </div>
              </div>
            </Link>
            {/*  JSOFT SOLUTION SDN BHD */}
            <Link href={'https://jsoftsolution.com.my/'} >
              <div className='transition ease-in-out delay-50 grid grid-cols-3 pb-3 gap-4 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
                <div className='col-span-1'>
                  <p className='font-bold'>SOFTWARE ENGINEER</p>
                  <p className='text-sm'>Feb 2019 - Jul 2020</p>
                </div>
                <div className='col-span-2'>
                  <p className='font-bold'>JSOFT SOLUTION SDN BHD</p>
                  <ul className="list-disc text-sm pl-4">
                    <li>Develop PHP based software using Laravel & MVC Framework</li>
                    <li>Design commercial websites, corporate websites, and ecommerce</li>
                    <li>Implement senangpay & iPay88 APIs</li>
                  </ul>
                </div>
              </div>
            </Link>
            {/*  UTECHTIUM SDN BHD */}
            <Link href={'https://www.utechtium.com/'} >
              <div className='transition ease-in-out delay-50 grid grid-cols-3 pb-3 gap-4 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
                <div className='col-span-1'>
                  <p className='font-bold'>WEB DEVELOPER</p>
                  <p className='text-sm'>Jul 2017 - Sept 2017</p>
                </div>
                <div className='col-span-2'>
                  <p className='font-bold'>UTECHTIUM SDN BHD</p>
                  <ul className="list-disc text-sm pl-4">
                    <li>2 month internship program</li>
                    <li>Develop utechtium.com using PHP based website development</li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>

          {/*  EDUCATION */}
          <div>
            <div className='text-xl font-bold pb-3'>EDUCATION<hr className='border-black dark:border-white'/></div>
            {/*  BACHELORSE OF ELECTRICAL ENGINEERING */}
            <div className='transition ease-in-out delay-50 grid grid-cols-3 pb-3 gap-4 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
              <div className='col-span-1'>
                <p className='font-bold'>BACHELORSE OF ELECTRICAL ENGINEERING</p>
                <p className='text-sm'>Sept 2014 - Jan 2019</p>
              </div>
              <div className='col-span-2'>
                <p className='font-bold'>Universiti Teknologi MARA</p>
                <ul className="list-disc text-sm pl-4">
                  <li>Degree in Electrical Engineering Hons. (Major in Computer)</li>
                  <li>Obtain certification  in CCNA Security</li>
                  <li>Obtain certification in Ionic Framework(Mobile Application Development)</li>
                </ul>
              </div>
            </div>
            {/*  BACHELORSE OF ELECTRICAL ENGINEERING */}
            <div className='transition ease-in-out delay-50 grid grid-cols-3 pb-3 gap-4 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
              <div className='col-span-1'>
                <p className='font-bold'>1 YEAR MATRICULATION PROGRAM</p>
                <p className='text-sm'>Jan 2013 - Dec 2013</p>
              </div>
              <div className='col-span-2'>
                <p className='font-bold'>Malacca Matriculation College</p>
                <ul className="list-disc text-sm pl-4">
                  <li>Information Technology, Engineering, or other applied science courses</li>
                  <li>Consist of Chemistry, Physics, Computer Science, Mathematics subjects</li>
                  <li>CGPA: 3.17</li>
                </ul>
              </div>
            </div>
          </div>

          {/*  GENERAL SKILLS */}
          <div>
            <div className='text-xl font-bold pb-3'>GENERAL SKILLS<hr className='border-black dark:border-white'/></div>
            {/*  LANGUAGES */}
            <div className='grid grid-cols-4 pb-3'>
              <div className='col-span-2 md:col-span-1 transition ease-in-out delay-50 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
                <p className='font-bold'>LANGUAGES</p>
                <ul className="list-disc text-sm pl-4">
                  <li>PHP</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>SQL</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className='col-span-2 md:col-span-1 transition ease-in-out delay-50 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
                <p className='font-bold'>PHP FRAMEWORKS</p>
                <ul className="list-disc text-sm pl-4">
                  <li>Laravel</li>
                  <li>Codeigniter</li>
                  <li>Symfony</li>
                  <li>Slim</li>
                </ul>
              </div>
              <div className='col-span-2 md:col-span-1 transition ease-in-out delay-50 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
                <p className='font-bold'>JS FRAMEWORKS</p>
                <ul className="list-disc text-sm pl-4">
                  <li>ReactJS</li>
                  <li>AngularJS</li>
                  <li>VueJS</li>
                  <li>NextJS</li>
                  <li>NodeJS</li>
                </ul>
              </div>
              <div className='col-span-2 md:col-span-1 transition ease-in-out delay-50 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
                <p className='font-bold'>CMS</p>
                <ul className="list-disc text-sm pl-4">
                  <li>Wordpress</li>
                  <li>Joomla</li>
                  <li>Open Journal System</li>
                  <li>Drupal</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className='bg-slate-200 rounded-md p-4 mt-1 dark:bg-indigo-900'>
          <div className='text-xl font-bold pb-3'>REFERENCES<hr className='border-black dark:border-white'/></div>
          <div className='grid grid-cols-2 pb-3 text-sm'>
            <div className='col-span-2 pb-6 md:col-span-1 md:pb-0 transition ease-in-out delay-50 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
              <p className='text-xl font-bold'>KRISH <span className='text-sm font-normal'>Business Development Director</span></p>
              <p className='font-bold'>Jsoft Solution Sdn. Bhd.</p>
              <div className='grid grid-cols-7'>
                <div className='col-span-1 font-bold'>Phone:</div><div className='col-span-6'>012-550 9210</div>
                <div className='col-span-1 font-bold'>Website:</div><div className='col-span-6'>jsoftsolution.com.my</div>
                <div className='col-span-1 font-bold'>Email:</div><div className='col-span-6'>krish@jsoftsolution.com.my</div>
                <div className='col-span-1 font-bold'>Address:</div><div className='col-span-6'>C-2-22 Centum @ Oasis Corporate Park, No 2, Jalan PJU 1a/2, Oasis Ara Damansara, 47301 Petaling Jaya, Selangor</div>
              </div>
              <hr className='mt-3 border-black dark:border-white'/>
            </div>
            <div className='col-span-2 md:col-span-1 transition ease-in-out delay-50 shadow-none hover:shadow-2xl hover:pl-3 hover:scale-105'>
              <p className='text-xl font-bold'>CHONG WEI TUCK <span className='text-sm font-normal'>Head, System Enhancement</span></p>
              <p className='font-bold'>TIME dotCom Bhd.</p>
              <div className='grid grid-cols-7'>
                <div className='col-span-1 font-bold'>Phone:</div><div className='col-span-6'>016-2094935 / 012-4727089</div>
                <div className='col-span-1 font-bold'>Email:</div><div className='col-span-6'>wei.tuck.chong@time.com.my</div>
              </div>
              <hr className='mt-3 border-black dark:border-white'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}