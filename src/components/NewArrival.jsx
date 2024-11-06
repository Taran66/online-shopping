import { CiDeliveryTruck, CiWallet, CiLock } from "react-icons/ci";


const NewArrival = () => {
  return (
    <div className="flex flex-col gap-10">
    <ul className="flex text-5xl gap-32 justify-center bg-gray-200 p-5 rounded-lg">
      <li className="flex flex-col items-center w-1/4">
        <CiDeliveryTruck />
        <h3 className="text-lg font-bold">Fast and Free Delivery</h3>
        <p className="text-base text-center ">"Enjoy fast, free delivery on all your favorite items—shop now and get it delivered to your doorstep!"</p>
      </li>
      <li className="flex flex-col items-center w-1/4">
        <CiWallet />
        <h3 className="text-lg font-bold">Money Back Guarantee</h3>
        <p className="text-base text-center ">"Shop with confidence—enjoy a hassle-free money-back guarantee on all purchases!"</p>
      </li>
      <li className="flex flex-col items-center w-1/4">
        <CiLock />
        <h3 className="text-lg font-bold">Secure Payments</h3>
        <p className="text-base text-center">"Shop safely with our secure payment options, protecting your details every step of the way!"</p>
      </li>
    </ul>
    <div className="flex flex-col items-center gap-5">
    <h1 className="text-3xl font-semibold">New Arrival</h1>
    <p className="text-lg">"Discover the latest trends with our new arrivals—fresh styles waiting to elevate your wardrobe!"</p>
    </div>
    </div>
  )
}

export default NewArrival