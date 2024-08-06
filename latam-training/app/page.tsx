import Image from "next/image";

import Logo from "../app/Images/Logo.png";
import Image1 from "../app/Images/Container.png";
import Image2 from "../app/Images/Container-2.png";
import Image3 from "../app/Images/Container-3.png";
import Image4 from "../app/Images/Container-4.png";
import FacebookIcon from "../app/Images/Facebook.png";
import TwitterIcon from "../app/Images/Twitter.png";
import InstagramIcon from "../app/Images/Instagram.png";
import LinkdInIcon from "../app/Images/LinkedIn.png";
import YoutubeIcon from "../app/Images/YouTube.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <footer className=" md:w-[1220.3px] md:h-[502px] min-w-[393px] overflow-hidden  ml-2 ">
        <div className="md:flex md:flex-row flex-col gap-[8rem]">
          <section className="flex flex-col">
            <div className="border-style: md:min-w-[174.48px] md:min-h-[44px] max-w-[116px] max-h-[29.25px]">
              <Image
                className=" flex md:min-w-full md:min-h-full object-fit: cover "
                src={Logo}
                alt="Logo"
              />
            </div>
            <div className="w-[385.95px] h-[60px] hidden md:block">
              <p className=" font-DM_Sans text-left font-weight: 400 text-[18px] leading-[30px] text-[#3B3B3B] mt-3">
                Lorem ipsum dolor sit amet consectetur dolol drakgonil
                adipiscing elit aliquam mauris
              </p>
              <div className="w-[419px] h-[148.65px] mt-3">
                <form action="" className="flex flex-col gap-[8px]">
                  <input
                    type="text"
                    className=" w-[419px] h-[66px] rounded-[50px] p-[24px] gap-[240px] bg-[#F9F9FF] placeholder:w-[371px] placeholder:h-[18px] placeholder:gap-[10px]"
                    placeholder="Enter your email"
                  />
                  <button
                    className="bg-[#20C997] w-[161px] h-[66px] p-[24px, 36px, 24px, 36px] gap-[8px] rounded-[40px] mt-3 ;
"
                  >
                    <Link
                      className="font-DM_Sans font-bold leading-[18px] text-center text-[18px] w-[89px] h-[18px] "
                      href={""}
                    >
                      Subscribe
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </section>
          <section className="w-[704.87px] h-[312px]  basis-[704.87px] md:flex-row flex flex-col mt-[2rem] md:mt-0">
            <div className=" basis-[50%] md:pl-[5rem]">
              <h3 className="w-[54px] h-[20px] size-5 text-[20px] font-bold font-DM_Sans">
                Menu
              </h3>
              <nav className="flex flex-col gap-y-6 mt-6 font-DM_Sans text-[#3B3B3B]">
                <Link href={""} className=" h-[18px] w-[50px] leading-[18px]">
                  Home
                </Link>
                <Link href={""} className=" h-[18px] w-[69px] leading-[18px]">
                  Courses{" "}
                </Link>
                <Link href={""} className=" h-[18px] w-[52px] leading-[18px]">
                  About
                </Link>
                <Link href={""} className=" h-[18px] w-[92px] leading-[18px]">
                  Contact us
                </Link>
              </nav>
            </div>

            <div className=" md:w-[252px] md:h-[312px] flex flex-col md:ml-[6rem] md:mt-0 mt-6">
              <h3 className=" font-DM_Sans font-bold min-w-[192px]  text-[20px] ">
                Follow on Instagram
              </h3>
              <section className=" grid md:grid-cols-2 md:gap-2 gap-3 grid-cols-2 md:size-[252px] size-[400px] mt-6  ">
                <Image
                  className=" flex md:size-[120px] size-[175.24px] object-fit: cover "
                  src={Image1}
                  alt="Image1"
                />
                <Image
                  className=" flex md:size-[120px] size-[175.24px] object-fit: cover "
                  src={Image2}
                  alt="Image2"
                />
                <Image
                  className=" flex md:size-[120px] size-[175.24px] object-fit: cover "
                  src={Image3}
                  alt="Image4"
                />
                <Image
                  className=" flex md:size-[120px] size-[175.24px] object-fit: cover "
                  src={Image4}
                  alt="Image5"
                />
              </section>
            </div>
          </section>
        </div>
        <div
          className="md:w-[1220px] md:h-[68px] min-w-[393px] border-t-[1px]  border-[#D4D2E3]
border-solid md:flex md:flex-row grid items-center md:mt-[3.5rem] mt-[23rem] md:items-center"
        >
          <p className="md:w-[442px] font-DM_Sans md:size-[18px] min-w-[368px]  text-[#727272] md:basis-[50%]  leading-[14.99px]flex-nowrap  text-[15px] md:text-[18px] text-center md:text-left order-2 md:order-1 mt-[1.2rem] md:mt-0">
            Copyright © 2024 Traning Latam | All Rights Reserved
          </p>
          <div className=" md:basis-[50%]  flex md:justify-end justify-center  mt-4 md:mt-0 order-1 md:order-2">
            <div className="md:w-[244px] w-[366px] md:h-[36px] h-[54px] flex gap-x-[1rem] justify-center">
              <Link href={""}>
                <Image
                  className=" flex md:size-[36px] size-[54px] object-fit: cover "
                  src={FacebookIcon}
                  alt="facebook"
                />
              </Link>
              <Link href={""}>
                <Image
                  className=" flex md:size-[36px] size-[54px] object-fit: cover "
                  src={TwitterIcon}
                  alt="twitter"
                />
              </Link>
              <Link href={""}>
                <Image
                  className=" flex md:size-[36px] size-[54px] object-fit: cover "
                  src={InstagramIcon}
                  alt="instagram"
                />
              </Link>
              <Link href={""}>
                <Image
                  className=" flex md:size-[36px] size-[54px] object-fit: cover "
                  src={LinkdInIcon}
                  alt="linkedin"
                />
              </Link>
              <Link href={""}>
                <Image
                  className=" flex md:size-[36px] size-[54px] object-fit: cover "
                  src={YoutubeIcon}
                  alt="youtube"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
