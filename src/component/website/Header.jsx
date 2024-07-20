import React, { useState } from 'react'
import Container from './Container'
import { AiFillCaretDown, AiOutlineUser,AiOutlineClose, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Header() {

  const [menuToggle, setMenuToggel] = useState(false);

  const navItems = [
    {
      path: "/",
      name: "HOME"
    },
    {
      path: "/store",
      name: "STORE"
    },
    {
      path: "iphone",
      name: "IPHONE"
    },
    {
      path: "ipad",
      name: "IPAD"
    },
    {
      path: "macbook",
      name: "MACBOOK"
    },
    {
      path: "accesories",
      name: "ACCESORIES"
    }
  ]

  return (
    <>
    <div className={`mobile-menu md:hidden ${menuToggle == true ? 'left-0':'left-[-100%]'}`}>
    <AiOutlineClose onClick={() => setMenuToggel(false)} className='text-2xl text-white ml-[10px] mt-[20px] font-bold cursor-pointer'/>
    <ul className=' text-center gap-[40px] flex flex-col font-[600] my-[50px]'>
          {navItems.map(
            (items, index) => {
              return <li key={index} className=' text-[16px] text-white'>
                <Link to={items.path}>
                  {items.name}
                </Link>
              </li>
            }
          )}
        </ul>
    </div>
      <Container Fluid extraClass="hidden md:block border">
        <Container extraClass='flex justify-between p-3'>
          <div className='flex items-center  gap-2'>
            <span>EN</span>
            <AiFillCaretDown />
            <span>$</span>
            <AiFillCaretDown />
          </div>
          <div className='flex items-center gap-3'>
            <AiOutlineUser />
            <span>My Profile</span>
            <BsFillTrashFill />
            <span>2 items</span>
            <span className='text-[#0000007c]'>$998</span>
            <AiOutlineSearch className='text-xl' />
          </div>
        </Container>
      </Container>
      <Container extraClass='flex md:justify-center justify-between items-center md:mt-[40px] mt-[20px] mb-[20px] px-2'>
        <img src="img/Logo.svg" alt="" />
        <AiOutlineMenu className='text-3xl mt-1 md:hidden' onClick={() => setMenuToggel(true)}/>
      </Container>
      <Container>
        <ul className='md:flex hidden sticky justify-center gap-16 font-[600]'>
          {navItems.map(
            (items, index) => {
              return <li key={index} className='hover:text-blue-400 text-[14px] font-bold duration-100'>
                <Link to={items.path}>
                  {items.name}
                </Link>
              </li>
            }
          )}
        </ul>
      </Container>
    </>
  )
}
