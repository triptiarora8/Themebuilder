import { Menubar, MenubarMenu } from "@/components/ui/menubar";
export default function Footer() {
  return (
    <div>
      <div
        className="w-full  h-[1079px]"
        style={{
          backgroundImage: `url('/images/black shade.png')`,
          borderTopRightRadius: "120px",
        }}>
        <div className="">
          <img
            src="/images/Line 170.png"
            alt="line"
            className="w-[426px] relative left-[1487px] top-[222px]"
          />
          <img
            src="/images/Line 170.png"
            alt="line"
            className="w-[426px] relative top-[222px] left-[-23px]"
          />
          <div className="relative w-[1108px] mx-auto">
            <img
              src="/images/white border.png"
              alt="border"
              className="w-full mt-[100px]"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center font-extrabold font-bricolage text-[120px]/[144px]">
                THEMEBUILDER
              </div>
            </div>
          </div>
        </div>
        <div className="flex ml-[600px] items-center mt-[50px] w-[713px] pt-[20px] h-[48px]">
          <div className="text-white font-medium font-Inter text-[40px]/[48.8px]">
            Easiest way to create stunning layout
          </div>
        </div>
        <div className=" ml-[600px] mt-[110px]  pt-[20px] h-[48px]">
        <button className="flex w-[713px] h-[93px] justify-around items-center bg-[#FFFFFF42]  " style={{border:"white 1px solid", borderRadius:"120px"}} >
            <div className="text-white font-medium font-Inter text-[40px]/[48.8px]">Start Creating</div>
            <img src="/images/Arrow 7.png" alt="arrow" className="w-[30px] h-[]" />
          </button>
        </div>
        <div className="flex items-center ml-[225px] mt-[150px]">
        <Menubar className="w-fit h-fit text-white flex justify-evenly space-x-3  leading-[21.78px] pb-[50px] border-transparent mt-5">
            <MenubarMenu>
              <div className="flex justify-center items-center pr-[80px] space-x-5">
                <div className="flex justify-center items-center w-[52.43px] h-[50px] bg-[#FFFFFF33] border-transparent ">
                  <img
                    src="/images/component 1.png"
                    alt="component 1"
                    className=" w-[31px] h-[31px] bg-contain "
                  />
                </div>
                <span className="font-bricolage text-3xl/9 font-normal">
                10+ UI libraries
                </span>
              </div>

              <div className="flex justify-center items-center pr-[50px] space-x-5">
                <div className="flex justify-center items-center w-[52.43px] h-[50px] bg-[#FFFFFF33] border-transparent">
                  <img
                    src="/images/creative 1.png"
                    alt="creative 1"
                    className="w-[31.95px] h-[31.87px] bg-contain "
                  />
                </div>
                <span className="font-bricolage text-3xl/9 font-normal">
                Flexible Solution
                </span>
              </div>

              <div className="flex justify-center items-center pr-[50px] space-x-5">
                <div className="flex justify-center items-center w-[52.43px] h-[50px] bg-[#FFFFFF33] border-transparent ">
                  <img
                    src="/images/layers 1.png"
                    alt="layers 1"
                    className="w-[31px] h-[31px] bg-contain "
                  />
                </div>
                <span className="font-bricolage text-3xl/9 font-normal">
                Unlimited Projects
                </span>
              </div>

              <div className="flex justify-center items-center pr-[50px] space-x-5">
                <div className="flex justify-center items-center w-[52.43px] h-[50px] bg-[#FFFFFF33] border-transparent ">
                  <img
                    src="/images/plugin 1.png"
                    alt="Bulma logo"
                    className="w-[25px] h-[36px] bg-contain "
                  />
                </div>
                <span className="font-bricolage text-3xl/9 font-normal">
                Plugin Support
                </span>
              </div>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <div className="bg-black w-full h-[962px]">
        <div className=" flex justify-center ">
          <div className="flex justify-evenly  mt-[110px] gap-[70px]">
            <div className="flex flex-col h-[480px] ">
              <div className="text-[50px]/[80px] font-bold text-[#FFFFFF61] ">
                Products
              </div>
              <div className=" text-white font-medium font-Inter text-[30px]/[80px]">
                Tailwind Editor
              </div>
              <div className="text-white font-medium font-Inter text-[30px]/[80px]">
                Bootstrap Editor
              </div>
              <div className="text-white font-medium font-Inter text-[30px]/[80px]">
                Bulma Editor
              </div>
              <div className="text-white font-medium font-Inter text-[30px]/[80px]">
                Material-UI Editor
              </div>
              <div className="text-white font-medium font-Inter text-[30px]/[80px]">
                React Editor
              </div>
            </div>
            <div className="flex flex-col  h-[480px]">
              <div className="text-[50px]/[80px] font-bold text-[#FFFFFF61] ">
                UI Components
              </div>
              <div className=" text-white font-medium font-Inter text-[30px]/[80px]">
                Tailwind Component
              </div>
              <div className="text-white font-medium font-Inter text-[30px]/[80px]">
                Bootstrap Component
              </div>
              <div className="text-white font-medium font-Inter text-[30px]/[80px]">
                Bulma Component
              </div>
              <div className="text-white font-medium font-Inter text-[30px]/[80px]">
                Material-UI Component
              </div>
            </div>
            <div className="flex flex-col  h-[480px]">
              <div className="text-[50px]/[80px] font-bold text-[#FFFFFF61] ">
                Company
              </div>
              <div className=" text-white font-medium font-Inter text-[30px]/[80px]">
                About us
              </div>
              <div className="text-white font-medium font-Inter text-[30px]/[80px]">
                Blog
              </div>
              <div className="text-white font-medium font-Inter text-[30px]/[80px]">
                Suport
              </div>
            </div>
            <div className="flex flex-col  h-[480px]">
              <div className="text-[50px]/[80px] font-bold text-[#FFFFFF61] ">
                Legal
              </div>
              <div className=" text-white font-medium font-Inter text-[30px]/[80px]">
                Terms of service
              </div>
              <div className="text-white font-medium font-Inter text-[30px]/[80px]">
                Privacy Policy
              </div>
              <div className="text-white font-medium font-Inter text-[30px]/[80px]">
                Licenses
              </div>
            </div>
          </div>
        </div>
        <div className="flex  items-center border-white text-white w-[538px] h-[48px]  ml-[600px] mt-[100px] mb-[78px] ">
          <div className="font-bricolage font-medium text-[40px]/[48px] ">
            Contact with Us
          </div>
          <div className="flex space-x-5 pl-[20px]">
            <img
              src="/images/instagram.png"
              alt="instagram"
              className="w-[40px] h-[40px]"
            />
            <img
              src="/images/facebook.png"
              alt="instagram"
              className="w-[40px] h-[40px]"
            />
            <img
              src="/images/x.png"
              alt="instagram"
              className="w-[40px] h-[40px]"
            />
          </div>
        </div>
        <div className="flex overflow-x-hidden w-full h-[180px] font-extrabold font-bricolage text-[150px]/[180px]">
          <div className="flex animate-marquee space-x-[20px]">
            <div className="text-white">Build</div>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#6158FC] via-[#FF3FA8] to-[#FF8234]">
              Better
            </div>
            <div className="text-white">Build</div>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#6158FC] via-[#FF3FA8] to-[#FF8234]">
              Faster
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
