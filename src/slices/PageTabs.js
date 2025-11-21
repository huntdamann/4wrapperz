import React from "react";
import { motion } from 'motion/react'


const PageTabs = ({ text }) => {


    return (

        <>
        
            <button className="border p-5 w-[70%] rounded-[2rem]">
                <span>
                    {text}
                </span>
            </button>
        
        </>
    )


}

export default PageTabs;