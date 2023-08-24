
import Image from "next/image"
import P1 from "public/p1.webp"
import {FC} from "react"
function ProductCard(props:{ title:string,price:number}) {
  return (
    <div>
      <Image src={P1}alt="product" />
      <h3 className="font-bold text-lg mt-3">{props.title}</h3>
      <p className="font-bold text-lg">{props.price}</p>
    </div>

  )
}

export default ProductCard