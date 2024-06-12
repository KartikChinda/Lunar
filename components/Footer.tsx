"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { IoCaretBackOutline } from "react-icons/io5";
import { IoCaretForwardOutline } from "react-icons/io5";
import { length } from '@/assets';

const Footer = () => {

    const params = useParams();
    const watchID = params.id;

    const prevWatchRoute = watchID !== "0" ? Number(watchID) - 1 : Number(length - 1);

    const nextWatchRoute = Number(watchID) === length - 1 ? 0 : Number(watchID) + 1;

    return (
        <div >
            <div className='h-[6vh] w-[100%] bg-palette-bg absolute bottom-0 flex justify-between px-10 items-center'>
                <div className='flex justify-center items-center gap-20 text-palette-text text-3xl'>
                    <Link href={`/collections/${prevWatchRoute}`}>
                        <IoCaretBackOutline />
                    </Link>
                    <Link href={`/collections/${nextWatchRoute}`}>
                        <IoCaretForwardOutline />
                    </Link>
                </div>
                <div>This is the share this product</div>
                <div>Add to cart</div>
            </div>

        </div>

    )
}

export default Footer