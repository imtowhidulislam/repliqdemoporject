import React from 'react'
import { ProductContext } from '../context/productContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import {BsCartPlus} from "react-icons/bs";
import {VscAccount} from "react-icons/vsc";
import SearchButton from './SearchButton';

const Demo = () => {
    // const [product, setProduct] = useContext(ProductContext);
// console.log(product);
  return (
    <div className='py-20 fixed top-0 left-0 h-full px-32 backdrop-blur-md backdrop-filter bg-[#1e1e1c89] '>
        <div className=''>
            <div>
                <li>
                    <SearchButton />
                </li>
            </div>
            <div className='gap-2'>
                <li className='navList'>
                    <Link className='navLink' to="/">Home</Link>
                </li>
                <li className='navList'>
                    <Link className='navLink' to="/product">Product</Link>
                </li>
                <li className='navList'>
                    <Link className='navLink' to="/dashboard">Dashboard</Link>
                </li>
            </div>
            <div className='gap-4 m-auto'>
                <li className='flex items-center justify-center gap-2 py-2'>
                    <span><VscAccount/></span>
                    <Link to="/account"> Account</Link>
                </li>
                <li className='flex items-center justify-center gap-2 py-2'>
                    <span><BsCartPlus/></span>
                    <Link to="/cart"> Cart</Link>
                </li>
            </div>
        </div> 
        
        {/* <div className='grid grid-cols-productLayout gap-4 place-content-center'>
            {
                product.map(pdt => {
                    const {id, image} = pdt;
                    return (
                        <div key={id} className='bg-[#ffff] rounded-md drop-shadow-md p-3 max-w-max'>
                            <div className='relative max-h-44 imgContainer'>
                                <img className='object-cover h-44 top-0 bottom-0 right-0 left-0 w-full m-auto' src={image} alt="randomImage" />
                            </div>
                            <div className='mt-4 capitalize text-left break-words'>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <h2>this is a demo image</h2>
                                <p>$45.65</p>
                                <p>men's pictures</p>
                            </div>
                        </div>
                    )
                })
            }
        </div> */}
    </div>
  )
}

export default Demo