import wheat_icon from '../../../assets/wheat_icon.png'
import eco_farms from '../../../assets/eco-farms.png'
import special_equipment from '../../../assets/special_equipment.png'


export const AboutUs = () => {
    return (
        <div className="container mx-auto grid grid-cols-2 mt-5">
            <div className=''>
            
            </div>
            <div>
                <div className='flex items-center w-36 gap-2 shadow-md  bg-white rounded-md mt-10'>
                    <img src={wheat_icon} alt="" />
                    <div className='font-medium  text-center'>Who we are</div>
                </div>
                <div className='font-medium text-4xl mt-5'>
                    Currently we are growing
                    and selling organic food
                </div>
                <div className='font-normal mt-2'>
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which do not look even.
                </div>
                <div className='grid grid-cols-2 gap-4 mt-5'>
                    <div>
                        <img  src={eco_farms} alt="" />
                        <div className='font-medium mt-3 text-lg'>
                            Eco Farms Worldwide
                        </div>
                        <div className='font-normal mt-2'>
                            There are many variations of pass
                            ages of lorem ipsum available
                            majority have suffered.</div>
                    </div>
                    <div>
                        <img className='w-24' src={special_equipment} alt="special_equipment" />
                        <div className='font-medium text-lg mt-3'>
                            Special Equipment</div>
                        <div className='font-normal mt-2'>
                            There are many variations of pass
                            ages of lorem ipsum available
                            majority have suffered.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
