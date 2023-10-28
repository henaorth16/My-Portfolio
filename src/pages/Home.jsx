import React from "react"
import image from '../assets/image/img.jpg'
// import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="text-stone-100 text-center h-full w-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center md:w-1/2 w-3/4 gap-3">
                    <div className="w-[8rem] h-[8rem] mb-4">
                        <img className="w-full h-full object-cover rounded-full" src={image} />
                    </div>
                    <h2 className="text-xl font-bold tracking-wider">Hello There My Name is <span className="text-red-500">HENOK EMYAYE</span> </h2>
                    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente earum eligendi sit tempora, id mollitia animi expedita aliquid tempore eos nemo maxime culpa et voluptate assumenda fuga fugiat!</p>
                </div>

            </div>

        </>
    )
}

export default Home
