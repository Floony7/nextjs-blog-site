import React from 'react';
import ArrowRight from './arrow-right';

const Card = () => {
  return (
    <div className="max-w-sm p-4 mt-4 bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h3>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <span><a className="read-more" href="#">Read more</a></span>
    </div>
  )
}

export default Card;