import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const SideNav = () => {
  return (
    <>
      <div className='z-10 mb-10 flex flex-col  lg:translate-x-0   sidenav top-0 shadow-md fixed h-full bg-teal-50 w-72 p-8  bg-green'>
        <h1 className='text-red mt-10'>Notes</h1>
        <div className='mt-5'>
          <NavLink
            to='/allnotes '
            className={({ isActive }) =>
              isActive
                ? 'flex  text-lg  font-semibold  items-center  hover:rounded-xl hover:text-teal-400 focus:bg-teal-400 hover:bg-teal-100 transition-all duration-400 ease-in active:text-teal-400 active:bg-teal-100 pl-5 text-teal-400 bg-teal-100 rounded-xl '
                : 'text-teal-400 bg-none flex  text-lg  font-semibold  items-center  hover:rounded-xl hover:text-teal-400 focus:bg-teal-100 hover:bg-teal-100 transition-all duration-400 ease-in active:text-teal-400 active:bg-teal-100 p-5'
            }
          >
            <p className='mr-9'> All Notes</p>
            <Icon icon='entypo:text-document' />
          </NavLink>
          <NavLink
            to='/add-note '
            className={({ isActive }) =>
              isActive
                ? 'flex  text-lg  font-semibold  items-center  hover:rounded-xl hover:text-teal-400 focus:bg-teal-400 hover:bg-teal-100 transition-all duration-400 ease-in active:text-teal-400 active:bg-teal-100 pl-5 text-teal-400 bg-teal-100 rounded-xl '
                : 'text-teal-400 bg-none flex  text-lg  font-semibold  items-center  hover:rounded-xl hover:text-teal-400 focus:bg-teal-100 hover:bg-teal-100 transition-all duration-400 ease-in active:text-teal-400 active:bg-teal-100 p-5'
            }
          >
            <p className='mr-4'> Create Note</p>
            <Icon icon='wpf:create-new' />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideNav;
