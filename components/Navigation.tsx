import Image from 'next/image';
import Link from 'next/link';
import { useReducer, useContext } from 'react';
import { Context } from './Context/Context';

// Import Asset
import github from '../public/assets/GitHub-Mark-Light-120px-plus.png';
import home from '../public/assets/nav-icon/home.svg';
import homeActive from '../public/assets/nav-icon/home-active.svg';
import wip from '../public/assets/nav-icon/wip.svg';
import wipActive from '../public/assets/nav-icon/wip-active.svg';
import about from '../public/assets/nav-icon/about.svg';
import aboutActive from '../public/assets/nav-icon/about-active.svg';

export default function Navigation(props: any){

    const context = useContext(Context);
    const { navState, navDispatch }: any = context;

    return (
        <>
            <section id="DESKTOP_NAVIGATION" className="tabletL:hidden w-full py-[18px] px-[140px] laptop:px-[70px] mobileL:px-[20px] fixed top-0 z-[100] backdrop-blur-md border-b border-white/10">
                <section className="w-full flex justify-between">
                    <section className="flex items-center">
                        <Link href="/" className="text-[18px] font-medium tabletL:hidden" onClick={() => navDispatch({ type: 'home' })}>Gunawan Cipta</Link>

                        <div className="mx-[50px] h-[25px] w-[1px] border border-white/10"></div>

                        <div className='tabletL:hidden relative self-center justify-center mr-[150px]'>
                            { !navState.wip && <Link href="/work-in-progress" className='mr-[60px] pb-[21px] text-[14px] hover:border-b' onClick={() => navDispatch({ type: 'wip' })}>Work In Progress</Link>}
                            { navState.wip && <Link href="/work-in-progress" className='mr-[60px] pb-[21px] text-[14px] border-b-2'>Work In Progress</Link> }
                            
                            { !navState.about && <Link href="/about" className='pb-[21px] text-[14px] hover:border-b' onClick={() => navDispatch({ type: 'about' })}>About</Link> }
                            { navState.about && <Link href="/about" className='pb-[21px] text-[14px] border-b-2'>About</Link> }
                        </div>
                    </section>

                    
                    <Link href="https://github.com/gnwncpta" target="_blank" rel="noreferrer">
                        <Image src={github} alt="GitHub Profile" className="w-[26px] cursor-pointer" />
                    </Link>
                </section>
            </section>

            <section id="MOBILE_NAVIGATION" className='w-full hidden tabletL:flex fixed bottom-0 border-t border-white/10 bg-black/40 backdrop-blur-lg z-[100]'>
                <section className='w-full px-[70px] mobileL:px-[20px] hidden tabletL:grid grid-cols-3 items-center justify-center'>

                    { navState.home &&
                        <button className="h-full py-[10px] px-[20px] text-sm bg-[#EE9654]/5">
                            <Link href="/" className='flex flex-col items-center justify-center'>
                                <Image priority loading="eager" src={homeActive} alt="home-active" className='w-[18px]' />
                                <p className="mt-[8px] text-xs text-[#EE9654] font-semibold">HOME</p>
                            </Link>
                        </button>
                    }

                    {
                        !navState.home &&
                        <button className="h-full py-[10px] px-[20px] text-sm" onClick={() => navDispatch({ type: 'home' })}>
                            <Link href="/" className='flex flex-col items-center justify-center'>
                                <Image priority loading="eager" src={home} alt="home" className='w-[18px] opacity-50' />
                                <p className="mt-[8px] text-xs text-white/50 font-medium">HOME</p>
                            </Link>
                        </button>
                    }

                    {
                        navState.wip &&
                        <button className="h-full py-[10px] px-[20px] text-sm bg-[#EE9654]/5">
                            <Link href="/work-in-progress" className='flex flex-col items-center justify-center'>
                                <Image priority loading="eager" src={wipActive} alt="Home" className="w-[18px]" />
                                <p className="mt-[8px] text-xs text-[#EE9654] font-semibold">WIP</p>
                            </Link>
                        </button>
                    }

                    {
                        !navState.wip &&
                        <button className="h-full py-[10px] px-[20px] text-sm" onClick={() => navDispatch({ type: 'wip' })}>
                            <Link href="/work-in-progress" className='flex flex-col items-center justify-center'>
                                <Image priority loading="eager" src={wip} alt="Home" className="w-[18px] opacity-50" />
                                <p className="mt-[8px] text-xs font-semibold text-white/50">WIP</p>
                            </Link>
                        </button>
                    }

                    {
                        navState.about &&
                        <button className="h-full py-[10px] px-[20px] text-sm bg-[#EE9654]/5">
                            <Link href="/about" className='flex flex-col items-center justify-center'>
                                <Image priority loading="eager" src={aboutActive} alt="Home" className="w-[18px]" />
                                <p className="mt-[8px] text-xs text-[#EE9654] font-semibold">ABOUT</p>
                            </Link>
                        </button>
                    }

                    {
                        !navState.about &&
                        <button className="h-full py-[10px] px-[20px] text-sm" onClick={() => navDispatch({ type: 'about' })}>
                            <Link href="/about" className='flex flex-col items-center justify-center'>
                                <Image priority loading="eager" src={about} alt="Home" className="w-[18px] opacity-50" />
                                <p className="mt-[8px] text-xs font-semibold text-white/50">ABOUT</p>
                            </Link>
                        </button>
                    }

                </section>
            </section>
        </>
    )
}