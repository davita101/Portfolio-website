import React from 'react'

export default function Button({children}) {
    return (
        <button className=" p-6 rounded-sm bg-neutral-950 mx-auto gap-2 flex items-center justify-center ">
            <div className="p-2 bg-neutral-50 rounded-full animate-pulse"/>
            <p className="text-neutral-300">{children}</p>
        </button>
    )
}
