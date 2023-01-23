import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <div className='text-5xl text-center font-bold'>
                <div className='border border-gray-200 w-auto'>
                    <div className='grid grid-col-1 mx-auto mt-12'>
                        <p> 404 Not Found</p>
                        <p className='font-thin'>Sorry, This page is coming soon 😴</p>
                        <Link to="/auth/sign-in" className='bg-blue-200 hover:bg-blue-300 text-white font-bold rounded-lg text-sm py-3 px-3 w-32 mx-auto mt-5'>Back to page</Link>
                        <img className='lg:32 mx-auto mt-12' src="https://i.pinimg.com/564x/e7/58/4c/e7584c1c35f7f9da7ff0880c9d640745.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}