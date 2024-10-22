import call_icon from '../../assets/call_icon.png'
import email_icon from '../../assets/email_icon.png'
import list_icon from '../../assets/list-disk.png'
import logo from '../../assets/logo_footer.png'
import facebook_logo from '../../assets/facebook_icon.png'
import instagram_logo from '../../assets/instagram_icon.png'
import linkdn_logo from '../../assets/linkdn_icon.png'
import x_logo from '../../assets/x_icon.png'

export const Footer = () => {
    return (
        <div className='container-fluid ' >
            <div className="grid md:flex bg-yellow-300  justify-around h-24 mb-14">
                <div className='flex sm:gap-5  gap-3  list-none'>
                    <div className='flex gap-2  items-center'>
                        <img src={list_icon} alt="" />
                        <li className='font-medium'>Farmers</li>
                    </div>
                    <div className='flex gap-2  items-center'>
                        <img src={list_icon} alt="" />
                        <li className='font-medium'>Organic</li>
                    </div>
                    <div className='flex gap-2  items-center'>
                        <img src={list_icon} alt="" />
                        <li className='font-medium'>Foods</li>
                    </div>
                    <div className='flex gap-2  items-center'>
                        <img src={list_icon} alt="" />
                        <li className='font-medium'>Products</li>
                    </div>
                </div>
                <div className='flex  md:gap-5 sm:gap-2 '>
                    <div className='flex gap-2 items-center'><img className='p-1 bg-white rounded-full' src={call_icon} alt="" />
                        <div className='font-normal  text-sm md:text-base'>91-6267058448</div></div>
                    <div className='flex gap-0 sm:gap-2 items-center'>
                        <img className='p-1 bg-white rounded-full' src={email_icon} alt="" />
                        <div className='font-normal text-sm md:text-base'>mstomar038@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12'>
                <div className='items-center col-span-12 md:col-span-5  md:px-28'>
                    <img src={logo} alt="" />
                    <div className='font-normal mt-4'>Mauris sed molestie sem. Sed vel vestibulum
                        elit, non accumsan risus. In vitae sapien viverra
                        est Duo ei ullum inani senserit.</div>
                    <div className='flex gap-2 mt-4'>
                        <img className='bg-gray-200 p-2 rounded-full' src={facebook_logo} alt="" />
                        <img className='bg-gray-200 p-2 rounded-full' src={x_logo} alt="" />
                        <img className='bg-gray-200 p-2 rounded-full' src={linkdn_logo} alt="" />
                        <img className='bg-gray-200 p-2 rounded-full' src={instagram_logo} alt="" />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-7  '>
                    <div className='font-medium text-2xl  md:pe-52 '>Professional & modern, a theme designed to help
                        your business stand out from the rest.</div>
                    <div className='grid grid-cols-12 mt-5 '>
                        <div className='col-span-3'>
                            <div className='font-medium text-[18px]'>UseFul Link</div>
                            <div className='mt-1 text-[14px]'>Company</div>
                            <div className='mt-1 text-[14px]'>About</div>
                            <div className='mt-1 text-[14px]'>Contact</div>
                        </div>
                        <div className='col-span-4'>
                            <div className='font-medium text-[18px]'>Working Time</div>
                            <div className='mt-1 text-[14px]'>Mon - Fri: 9.00am - 5.00pm</div>
                            <div className='mt-1 text-[14px]'>Saturday: 10.00am - 6.00pm</div>
                            <div className='mt-1 text-[14px]'>Sunday Closed</div>
                        </div>
                        <div className='col-span-4'>
                            <div className='font-medium text-[18px]'>Our Address</div>
                            <div className='mt-1 text-[14px]'>Old Westbury 256, New York <br />
                                11201, United States</div>
                        </div>
                    </div>
                    <hr className='mt-5' />
                    <div className='grid grid-cols-2 mt-4 mb-5'>
                        <div className='flex gap-2'>
                            <div className='text-[15px]'>Terms & Conditions</div>
                            <div className='text-[15px]'>Privacy Policy</div>
                        </div>
                        <div className='text-[15px]'>
                            Copyright © 2024
                            , All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
