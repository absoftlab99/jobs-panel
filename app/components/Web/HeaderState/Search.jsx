import React from 'react';

const Search = () => {
    return (
        <form className="join w-full sweet-shaddow">
            <div className='w-full'>
                <div className='w-full'>
                    <input className="input join-item w-full bg-white focus-visible:outline-offset-0 focus-visible:outline-0 active:border-0" placeholder="Search" />
                </div>
            </div>
            <select className="select join-item bg-white focus-visible:outline-offset-0 focus-visible:outline-0 active:border-0">
                <option defaultValue='Government Jobs'>Government Jobs</option>
                <option defaultValue='Private Jobs'>Private Jobs</option>
            </select>
            <button className="btn join-item btn-primary text-white">Search</button>
        </form>
    );
};

export default Search;