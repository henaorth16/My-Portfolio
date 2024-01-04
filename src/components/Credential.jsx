import React from 'react'
import image from "../assets/image/certification.PNG"

function Credential() {
  return (
    <div className=' bg-secondary-800 text-secondary-200 py-5 px-7 col-span-2 md:px-7 lg:px-9 rounded-xl'>
        <h2 className='m-2 ml-[10%] text-2xl text-primary-500 font-bold'>Certificate And Credentials</h2>
        <hr className='w-[80%] mx-auto mb-6' />
        <div className='flex flex-wrap justify-center gap-4 w-full '>
            <div className='flex-1 min-h-[17rem] overflow-hidden rounded-xl relative md:w-[49.2%] min-w-[18rem] bg-primary-500 p-4'>
                <img className='absolute inset-0 w-full h-full object-cover object-top z-0' src={image} />
                  <div className='absolute px-4 opacity-100 sm:opacity-0 hover:opacity-100 transition-all duration-700 z-10 text-white bg-[#000000cc] w-full h-full inset-0'>
                    <h2 className='text-xl text-center font-bold mb-4'>Javascript Datastructure and Algorithm</h2>
                    <h4 className='text-sm text-primary-600 text-center font-light mb-2'>Free Code Camp</h4>
                    <p className='leading-shrink'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio dicta repudiandae nostrum quos exercitationem fugiat vitae iusto voluptas est sequi?</p>
                    <div className=' my-4 w-full text-right '>
                    <a href='#' className=' bg-primary-600 hover:bg-primary-800 px-6 py-2 rounded-full mt-[1rem]'>Checkout</a>
                    </div>
                </div>
            </div>
            <div className='flex-1 min-h-[17rem] overflow-hidden rounded-xl relative md:w-[49.2%] min-w-[18rem] bg-primary-500 p-4'>
                <img className='absolute inset-0 w-full h-full object-cover object-top z-0' src="data:image/png;base64,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" alt="" />
                <div className='absolute px-4 opacity-100 sm:opacity-0 hover:opacity-100 transition-all duration-700 z-10 text-white bg-[#000000cc] w-full h-full inset-0'>
                    <h2 className='text-xl text-center font-bold mb-4'>Javascript Datastructure and Algorithm</h2>
                    <h4 className='text-sm text-primary-600 text-center font-light mb-2'>Free Code Camp</h4>
                    <p className='leading-shrink'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio dicta repudiandae nostrum quos exercitationem fugiat vitae iusto voluptas est sequi?</p>
                    <div className=' my-4 w-full text-right '>
                    <a href='#' className=' bg-primary-600 hover:bg-primary-800 px-6 py-2 rounded-full mt-[1rem]'>Checkout</a>
                    </div>
                </div>
            </div>
            <div className='flex-1 min-h-[17rem] overflow-hidden rounded-xl relative md:w-[49.2%] min-w-[18rem] bg-primary-500 p-4'>
                <img className='absolute inset-0 w-full h-full object-cover object-top z-0' src="data:image/png;base64,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" alt="" />
                <div className='absolute px-4 opacity-100 sm:opacity-0 hover:opacity-100 transition-all duration-700 z-10 text-white bg-[#000000cc] w-full h-full inset-0'>
                    <h2 className='text-xl text-center font-bold mb-4'>Javascript Datastructure and Algorithm</h2>
                    <h4 className='text-sm text-primary-600 text-center font-light mb-2'>Free Code Camp</h4>
                    <p className='leading-shrink'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio dicta repudiandae nostrum quos exercitationem fugiat vitae iusto voluptas est sequi?</p>
                    <div className=' my-4 w-full text-right '>
                    <a href='#' className=' bg-primary-600 hover:bg-primary-800 px-6 py-2 rounded-full mt-[1rem]'>Checkout</a>
                    </div>
                </div>
            </div>
            <div className='flex-1 min-h-[17rem] overflow-hidden rounded-xl relative md:w-[49.2%] min-w-[18rem] bg-primary-500 p-4'>
                <img className='absolute inset-0 w-full h-full object-cover object-top z-0' src="data:image/png;base64,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" alt="" />
                <div className='absolute px-4 opacity-100 sm:opacity-0 hover:opacity-100 transition-all duration-700 z-10 text-white bg-[#000000cc] w-full h-full inset-0'>
                    <h2 className='text-xl text-center font-bold mb-4'>Javascript Datastructure and Algorithm</h2>
                    <h4 className='text-sm text-primary-600 text-center font-light mb-2'>Free Code Camp</h4>
                    <p className='leading-shrink'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio dicta repudiandae nostrum quos exercitationem fugiat vitae iusto voluptas est sequi?</p>
                    <div className=' my-4 w-full text-right '>
                    <a href='#' className=' bg-primary-600 hover:bg-primary-800 px-6 py-2 rounded-full mt-[1rem]'>Checkout</a>
                    </div>
                </div>
            </div>
            
            <div></div>
        </div>
    </div>
  )
}

export default Credential
