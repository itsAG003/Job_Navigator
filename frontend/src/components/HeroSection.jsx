import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate('/browse');
    }
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <h2 className='text-5xl font-bold'>Discover Your <span className='text-[#2d2fb7]'>Dream Job</span></h2>
                <h2 className='text-5xl font-bold'>(Swagat <span className='text-[#2d2fb7]'>Hai)</span></h2>
                <p className='text-xl'>A comprehensive job portal that connects talented job seekers with leading companies.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                     type="text"
                     placeholder='find your dream job'
                     onChange={(e) => setQuery(e.target.value)}
                     className='outline-none border-none w-full'
                     />
                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#2d2fb7]">
                        <Search className='h-5 w-5'/>
                     </Button>
                </div>
            </div>

        </div>
    )
}

export default HeroSection