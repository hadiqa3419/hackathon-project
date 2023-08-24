import logo from "public/Logo (1).webp"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="flex justify-between item-center py-6 px-8">
      <Image src={logo} alt="logo" className="w-40"/>
      <ul className="flex gap-x-10">
        <li className="text-lg">
         <Link href={"/"}>
         female
         </Link> 
          </li>
          <li className="text-lg">
  
           <Link href={"/"}>
            Male
            </Link>

</li>
<li className="text-lg">

      
        <Link href={"/"}>
          Kids
</Link>
        </li>
        <li className="text-lg">

        <Link href={"/"}>
          All Products
        </Link>

        </li>

      </ul>
      
      <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
<ShoppingCart className="h-6 w-6"/>
      </div>
    </div>
  )
}

export default Header