import React, { Children } from 'react'

export const FadeInGridVertical = ({children}) => {
  return (
        <div className='grid-vertical-container'>
            { Children.toArray(children).map((child, index) => (
                <div 
                    key={index}
                    style={{
                        opacity: 0,
                        animation: `fadeInUp 0.5s ease-out forwards`,
                        animationDelay: `${index * 0.1}s`
                    }} 
                >
                    {child}
                </div>
            ))}
        </div>
    )
}
