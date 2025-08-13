import React from 'react'

const State = () => {
  const items = [
    { value: '20+', label: 'Tech Partners' },
    { value: '150+', label: 'Project Completed' },
    { value: '1K+', label: 'Satisfied Customers' }
  ]

  return (
    <div className="">
      <div className="flex md:flex-col gap-6 md:p-15 max-w-sm mx-auto">
        {items.map((i, idx) => (
          <div key={idx} className=''>
            <div className="text-4xl md:text-3xl font-extrabold">{i.value}</div>
            <div className="text-xl md:text-xl text-gray-500">{i.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default State
