import Image from 'next/image'
import Hero from '@/views/Hero';
import { Image as IImage } from 'sanity';
import { urlForImage } from  '../../sanity/lib/image'
import { client } from '../../sanity/lib/client';
import ProductCard from './ProductCard';






export const getProductData = async () => {
  // const res = await  client.fetch('*[_type=="product"]');
  
  const res = await fetch('https://o1yz7p1i.api.sanity.io/v2023-08-08/data/query/production?query=*%5B_type%3D%3D%22product%22%5D')
  // return res.json()
  const ress = await res.json();
  return ress
}
interface Iproduct{
  title:string,
  _id:string,
  description:string,
  image:IImage,
  price:number,
  category:{
    name:string
  }
}
export default async function Home() {
  // const data = await getProductData()
  const data =  await getProductData()
 console.log('data',data)
return (
  <div className='grid grid-cols-[auto,auto,auto] justify-center gap-x-4'>
{data.result.map((item:any) => (
<div>
  <ProductCard item={item}/>
 </div>

))}
  </div>
)
  
}  