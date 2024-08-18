import Link from 'next/link';
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className="group bg-palette-bg text-palette-text border-t-2 pt-4 w-full">

            {/* Social Media Links */}
            <div className='flex gap-8 justify-center items-center text-4xl group duration-150'>
                <Link href={"https://github.com/KartikChinda/WeSellItAll"} className='hover:text-5xl duration-150'> <FaGithubSquare /></Link>
                <Link href={"https://twitter.com/ChindaKartik"} className='hover:text-5xl duration-150'> <FaSquareXTwitter /></Link>
                <Link href={"https://www.linkedin.com/in/kartikchinda"} className='hover:text-5xl duration-150'> <FaLinkedin /></Link>
                <Link href={"https://www.instagram.com/kartik.chinda11"} className='hover:text-5xl duration-150'> <TiSocialInstagram /></Link>
            </div>
            <div className="flex justify-center items-center">
                {/* Large "Houseplant" Text */}
                <h1 className=" group-hover:text-palette-pink font-headings text-white text-6xl md:text-[150px] font-bold mt-4 duration-150 lg:tracking-widest">
                    L U N A R <span className='text-xl tracking-tighter'>TM</span>
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
