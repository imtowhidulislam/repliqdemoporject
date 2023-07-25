
"use client"
import { ButtonOutlined, ButtonFilled } from '@/app/Util/ButtonOutlined';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { HiStar } from 'react-icons/hi';

const page = ({params}) => {
    console.log(+params.id);
    const productId = +params.id;
    const [product, setProduct] = useState([]);
    const [uniqueItem, setUniqueItem] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        if(!res.ok) throw Error("Url might be not found.");

        const fetchSingleProduct = data.find(item => item.id === productId);
        console.log(fetchSingleProduct);
        setUniqueItem([fetchSingleProduct])
    
        return data;
      }
    const {isLoading,error,data} = useQuery({queryKey:['singleProduct'],queryFn:fetchData})

    if(error) return "Product not Found!!" + error.message;

    const getProduct = (id) => {
        const fetchCartItem = product.find(item => item.id === productId);
        console.log(fetchCartItem);
        setUniqueItem([fetchCartItem])
        // setCart(prevValue => [...prevValue, fetchCartItem]);
    }
  return (
    <div>
        <div className="container ">
            <>
            {uniqueItem?.map((singleProduct) => {
                
                const {
                id,
                title,
                description: desc,
                image: img,
                price,
                rating,
                category: cat,
                } = singleProduct;
                
                const titleLength = title.split(" ").slice(0 , 5).join(" ");
                return (
                <div key={id} className="my-20">
                    <div className="grid grid-cols-productLayout  gap-4">
                        <div className="grid bg-gray-200 rounded-md place-items-center animate-moveInLeft">
                            <Image
                                className="block bg-gray-100 object-cover object-center m-4 rounded-md" 
                                src={img}
                                alt=""
                                width={300}
                                height={350}
                            />
                            <div className="flex my-4 items-cener  justify-between gap-3">
                                <div className="w-24 bg-gray-100 h-24 overflow-hidden grid place-items-center rounded-sm p-1">
                                <Image className="object-cover object-center" src={img} alt="" width={50} height={50} />
                                </div>
                                <div className="w-24 bg-gray-100 h-24 overflow-hidden grid place-items-center rounded-sm p-1">
                                <Image className="object-cover object-center" src={img} alt="" width={50} height={50} />
                                </div>
                                <div className="w-24 bg-gray-100 h-24 overflow-hidden grid place-items-center rounded-sm p-1">
                                <Image className="object-cover object-center" src={img} alt="" width={50} height={50} />
                                </div>

                            </div>
                        </div>
                        <div className="px-4 animate-moveInRight text-gray-700 pt-4 pb-4 z-20">
                            <div>
                                <h2 className="text-xl font-bold">Name :  {title.split(" ").length <= 5 ? `${titleLength}` : `${titleLength}...`}</h2>
                            </div>
                            <div className="py-2">
                                <h2 className="py-4 max-w-md">
                                Desc :{" "}
                                <span className="">{desc}$</span>
                                </h2>
                                <h2 className="pb-4">
                                Price :{" "}
                                <span className="font-bold text-blue-800">{price}$</span>
                                </h2>
                                <p>
                                Rating :{" "}
                                <span className="font-bold text-blue-600">
                                    {rating.rate}
                                    <HiStar className='text-yellow-400 text-xl font-bold'/>
                                </span>
                                </p>
                            </div>
                        <h2 className="max-w-lg">Category : {cat}</h2>
                        <div className="w-max flex gap-4 px-2 pb-4 mt-8">
                            <ButtonOutlined btnText="view details" />
                            <ButtonFilled btnText="buy now" />
                        </div>
                        </div>
                    </div>
                </div>
                );
            })
            }</>
        </div>
    </div>
  )
}

export default page