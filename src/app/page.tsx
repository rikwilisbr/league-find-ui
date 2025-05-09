import React from 'react'

export default function Page() {
  return (
    <div className='flex flex-col w-full gap-8 items-center justify-center h-screen'>
      <h1 className='text-3xl text-amber-500 font-bold '>League Find</h1>
      <div className='flex flex-col gap-2 items-center'>
        <input type="text" className="w-full input" placeholder="Champion" />
        <input type="text" className="w-full input" placeholder="KDA" />
        <input type="text" className="w-full input" placeholder="Farm" />
        <input type="text" className="w-full input" placeholder="D Spell" />
        <input type="text" className="w-full input" placeholder="F Spell" />
        <input type="text" className="w-full input" placeholder="Lane" />
        <button className="btn btn-neutral w-full">Find</button>
        <div className='mt-8'>
          <span className='text-red-500 font-bold'>Waiting production riot api key be approved</span>
        </div>
      </div>
    </div>
  )
}
