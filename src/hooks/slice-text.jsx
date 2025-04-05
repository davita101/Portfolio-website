import React from 'react'

export default function SliceText({children}) {
    return (
        <>
            {children.split('').map((char, index) => (
                <div key={index}>
                    {char == " " ? "\u00A0" : char}
                </div>
            ))}
        </>
    );
}