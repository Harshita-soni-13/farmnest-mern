import tractor_icon from '../../../assets/tracter_icon.png'
import tree_icon from '../../../assets/tree_icon.png'
import small_arrow from '../../../assets/small_arrow.png'
import products_icon from '../../../assets/products_icon.png'
import plant_icon from '../../../assets/plant_icon.png'
export const Card = () => {
    return (
        <div className="container mx-auto grid grid-cols-4 gap-5 mt-5">
            <div className='relative shadow-2xl bg-white rounded-2xl pl-5 pr-2 pb-5'>
            <div className='flex items-center gap-3 pt-5 pb-4'>
                <img className='bg-yellow-300 rounded-full p-2' src={tractor_icon} alt="" />
                <div className='font-semibold text-xl'>Professional Farmers</div>
            </div>
            <hr className='w-64'/>
            <div className='pt-4 pb-14'>Nullam porta enim vel tellus commodo,
            eget laoreet odio ultrices.</div>
            <img className='absolute bottom-3 right-5 bg-yellow-300 rounded-full pt-1 pb-1 pl-2 pr-2' src={small_arrow} alt="" />
            </div>
            <div className='relative shadow-2xl bg-white rounded-2xl pl-5 pr-2 pb-5'>
            <div className='flex items-center gap-3 pt-5 pb-4'>
                <img className='bg-yellow-300 rounded-full p-2' src={plant_icon} alt="" />
                <div className='font-semibold text-xl'>Fresh Vegetables</div>
            </div>
            <hr className='w-64'/>
            <div className='pt-4 pb-14'>Nullam porta enim vel tellus commodo,
            eget laoreet odio ultrices.</div>
            <img className='absolute bottom-3 right-5 bg-yellow-300 rounded-full pt-1 pb-1 pl-2 pr-2' src={small_arrow} alt="" />
            </div>
            <div className='relative shadow-2xl bg-white rounded-2xl pl-5 pr-2 pb-5'>
            <div className='flex items-center gap-3 pt-5 pb-4'>
                <img className='bg-yellow-300 rounded-full p-2' src={products_icon} alt="" />
                <div className='font-semibold text-xl'>Agriculture Products</div>
            </div>
            <hr className='w-64'/>
            <div className='pt-4 pb-14'>Nullam porta enim vel tellus commodo,
            eget laoreet odio ultrices.</div>
            <img className='absolute bottom-3 right-5 bg-yellow-300 rounded-full pt-1 pb-1 pl-2 pr-2' src={small_arrow} alt="" />
            </div>
            <div className='relative shadow-2xl bg-white rounded-2xl pl-5 pr-2 pb-5'>
            <div className='flex items-center gap-3 pt-5 pb-4'>
                <img className='bg-yellow-300 rounded-full p-2' src={tree_icon} alt="" />
                <div className='font-semibold text-xl'>100% Guaranteed</div>
            </div>
            <hr className='w-64'/>
            <div className='pt-4 pb-14'>Nullam porta enim vel tellus commodo,
            eget laoreet odio ultrices.</div>
            <img className='absolute bottom-3 right-5 bg-yellow-300 rounded-full pt-1 pb-1 pl-2 pr-2' src={small_arrow} alt="" />
            </div>
        </div>
    )
}