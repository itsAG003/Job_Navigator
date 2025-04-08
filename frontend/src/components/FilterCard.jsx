import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Gurugram", "Bangalore", "Hyderabad", "Chennai", "Kolkata"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer ", "Data Science", "Software Engineering", " Backend Developer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-3 Lakhs", "3-6 Lakhs", "6-10 Lakhs", "10-15 Lakhs", "15-25 Lakhs", "25-50 Lakhs", "50-75 Lakhs"]
    },
]

const FilterCard = () => {
    const  [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        dispatch(setSearchedQuery(selectedValue));
        setSelectedValue(value);
    }

    useEffect(() => {

    },[selectedValue])

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup onValueChange={changeHandler} value={selectedValue}>
                {
                    filterData.map((data, index) => (
                        <div>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId =`id${index}-${idx}`;
                                    return (
                                        <div className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item} id={itemId} />
                                            <Label htmlFor={itemId}>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default FilterCard