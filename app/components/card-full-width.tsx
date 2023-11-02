import React from 'react';

const CardFullWidth = () => {
  return (
    <div className="w-full p-4 mt-2 bg-slate-100 border border-gray-100">
        <a href="#">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h3>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <span><a className="read-more" href="#">Read more</a></span>
    </div>
  )
}

export default CardFullWidth;