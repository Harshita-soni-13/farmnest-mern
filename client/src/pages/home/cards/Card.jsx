import tractor_icon from '../../../assets/tracter_icon.png';
import tree_icon from '../../../assets/tree_icon.png';
import small_arrow from '../../../assets/small_arrow.png';
import products_icon from '../../../assets/products_icon.png';
import plant_icon from '../../../assets/plant_icon.png';

export const Card = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-4">
            <div className='relative shadow-2xl bg-white rounded-2xl p-5'>
                <div className='flex items-center gap-3 pt-5 pb-4'>
                    <img className='bg-yellow-300 rounded-full p-2' src={tractor_icon} alt="Tractor Icon" />
                    <div className='font-semibold text-xl'>Professional Farmers</div>
                </div>
                <hr className='w-full' />
                <div className='pt-4 pb-14'>
                    Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
                </div>
                <img className='absolute bottom-3 right-5 bg-yellow-300 rounded-full p-2' src={small_arrow} alt="Arrow Icon" />
            </div>
            <div className='relative shadow-2xl bg-white rounded-2xl p-5'>
                <div className='flex items-center gap-3 pt-5 pb-4'>
                    <img className='bg-yellow-300 rounded-full p-2' src={plant_icon} alt="Plant Icon" />
                    <div className='font-semibold text-xl'>Fresh Vegetables</div>
                </div>
                <hr className='w-full' />
                <div className='pt-4 pb-14'>
                    Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
                </div>
                <img className='absolute bottom-3 right-5 bg-yellow-300 rounded-full p-2' src={small_arrow} alt="Arrow Icon" />
            </div>
            <div className='relative shadow-2xl bg-white rounded-2xl p-5'>
                <div className='flex items-center gap-3 pt-5 pb-4'>
                    <img className='bg-yellow-300 rounded-full p-2' src={products_icon} alt="Products Icon" />
                    <div className='font-semibold text-xl'>Agriculture Products</div>
                </div>
                <hr className='w-full' />
                <div className='pt-4 pb-14'>
                    Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
                </div>
                <img className='absolute bottom-3 right-5 bg-yellow-300 rounded-full p-2' src={small_arrow} alt="Arrow Icon" />
            </div>
            <div className='relative shadow-2xl bg-white rounded-2xl p-5'>
                <div className='flex items-center gap-3 pt-5 pb-4'>
                    <img className='bg-yellow-300 rounded-full p-2' src={tree_icon} alt="Tree Icon" />
                    <div className='font-semibold text-xl'>100% Guaranteed</div>
                </div>
                <hr className='w-full' />
                <div className='pt-4 pb-14'>
                    Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
                </div>
                <img className='absolute bottom-3 right-5 bg-yellow-300 rounded-full p-2' src={small_arrow} alt="Arrow Icon" />
            </div>
        </div>
    );
};
