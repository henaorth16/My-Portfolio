import Image from "../assets/image/geez.png"
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Lists = [
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6fFdN_9mpfYZ_v5BvOxvni4UMt2n-ly5wg&usqp=CAU",
    name: "Vijay Shekhar Sharma",
    work: "Software engineer, cofounder of sumsung",
    description: "W've had the privilege of collaborating closely with Henok in the realm of web development, and it's been nothing short of inspiring. He possesses an unparalleled dedication that not only ensures projects are completed on time but also guarantees a level of quality that is truly commendable. What sets He apart is his extraordinary ability to breathe life into designs, converting even the most intricate UI designs into stunning, functional websites. What's more impressive is his knack for delivering unique results—each project he works on is a testament to his creativity, with no duplicates anywhere. However, beyond his technical prowess lies his remarkable interpersonal skills. Henok is adept at collaborating with diverse teams, fostering a peaceful and collaborative environment. This not only ensures a smooth workflow but also adds a layer of innovation stemming from collective creativity. His portfolio speaks volumes about his commitment to excellence and his capacity to turn visions into reality. Collaborating with Henok has been an enriching experience, and I have no doubt that he will continue to push boundaries and leave an indelible mark in the world of web development.",
    instaLink: "http://www.facebook.com",
    linkedLink:"http://www.instagram.com"
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNubmdKVAgQ7kecRoVG5-ESlqaS-KZFxVPSGYE_ga0hNY2OkNsiokaZo9-Y3XoIVRJFeY&usqp=CAU",
    name: "Imran Shemsu",
    work: "Cofounder of Infinite Solutions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
    socialLinks: [{"linkedin": "http://Link"}],
    instaLink: "http://www.instagram.com",
    linkedLink:""
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesgZqJ2V4uBB98TZSHZ-aj7uFsLED3buwQA&usqp=CAU",
    name: "Richell Peterson",
    work: "Ui/Ux Designer",
    description: "Henok possesses an unparalleled dedication that not only ensures projects are completed on time but also guarantees a level of quality that is truly commendable. What sets He apart is his extraordinary ability to breathe life into designs, converting even the most intricate UI designs into stunning, functional websites. What's more impressive is his knack for delivering unique results—each project he works on is a testament to his creativity, with no duplicates anywhere. However, beyond his technical prowess lies his remarkable interpersonal skills. Henok is adept at collaborating with diverse teams, fostering a peaceful and collaborative environment. This not only ensures a smooth workflow but also adds a layer of innovation stemming from collective creativity. His portfolio speaks volumes about his commitment to excellence and his capacity to turn visions into reality. Collaborating with Henok has been an enriching experience, and I have no doubt that he will continue to push boundaries and leave an indelible mark in the world of web development.",
    socialLinks: [{"linkedin": "http://Link"}],
    instaLink: "",
    linkedLink:"http://www.facebook.com"
  },

]

export default function Testimonial() {
  return <>
  <div id="testimony" className="h-[100vh] px-3 pb-24 wrapper overflow-y-auto">
    <h1 className='text-primary-500 text-3xl text-center font-semibold mt-20'>Testimonial</h1>
    <hr className='w-full my-4 text-secondary-500'/>
    <p className="text-secondary-300 my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptas praesentium sequi ex voluptates maiores quos quam dicta. Recusandae nam dolore excepturi libero necessitatibus sapiente voluptatibus iure alias omnis ad aspernatur veniam reprehenderit, dicta cupiditate nostrum?</p>
    <div className='grid content-center md:grid-cols-2 items-center w-[fit-content] mx-auto md:px-8 md:gap-8'>

      {Lists.map((list, index) => (
        <div className={`relative wrapper testimony bg-secondary-800 z-0 pt-4 mb-6 max-w-sm w-auto mx-auto rounded-md overflow-y-hidden shadow-lg max-h-[27rem]`} key={index + 1}        >
          <div className=' image-wrapper relative w-full group overflow-visible flex px-5 gap-3'>
            <img className=" relative z-0 h-[6rem] w-[6rem] rounded-lg object-cover" loading="lazy" src={list.imageUrl} alt={list.title} />
            <div className=" flex-1 text-left">
              <h1 className="font-bold text-[1.29rem] text-secondary-200 mb-2">{list.name}</h1>
              <p className="text-primary-400 text-sm">{list.work}</p>
            </div>
          </div>

          <div className="wrapper h-[16rem] px-6 mt-3 pb-10 overflow-y-auto">
            <p className="text-gray-300 text-secondary-200">
              {list.description}
            </p>
          </div>
             <div className="absolute w-full bottom-0 h-[7rem] bg-gradient-to-b from-[#00000000] to-secondary-950"></div>
          <div className="sticky bottom-0 w-full bg-secondary-800 px-6  z-20">
            {list.instaLink.length === 0 ? (
               ""
              ):(
                <a className="inline-block opacity-80 hover:opacity-100 mx-1 p-1 pt-2 text-3xl  text-primary-600" href={list.instaLink}><RiInstagramFill /></a>
            )}
            {list.linkedLink.length === 0 ? (
               ""
              ):(
                <a className="inline-block opacity-80 hover:opacity-100 mx-1 p-1 pt-2 text-3xl  text-primary-600" href={list.linkedLink}><FaLinkedin /></a>
            )}
            
          </div>

        </div>
      ))}



    </div>
  </div>
    

  </>

}

