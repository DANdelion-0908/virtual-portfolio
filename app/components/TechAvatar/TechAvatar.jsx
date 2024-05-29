import React from 'react'

const TechAvatar = ({ techs }) => {
  return (
    <div className="avatar">
        {techs.map((tech, index) => {
            return(
                <div key={index} className="m-2">
                    <div className="w-8">
                    <img className='size-auto' src={tech} />
                    </div>
                </div>

            )
        })}
    </div>
  )
}

export default TechAvatar