import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import CustomMenuBar from "./CustomMenuBar";
export default function Header() {
  return (
    <>
      <div
        className="h-[872px] w-full bg-cover m-0 "
        style={{ backgroundImage: `url('./images/image20.svg')` }}>
        <CustomMenuBar />
        <div className="my-[4rem]">
          <div className="flex flex-col items-center w-full mt-[4rem] mb-[2rem]">
            <h2
              className="flex items-center text-7xl font-bold"
              style={{ fontFamily: "Bricolage Grotesque" }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6158FC] via-[#FF3FA8] to-[#FF8234]">
                Effortlessly
              </span>
              <span className="ml-2">create templates that are</span>
            </h2>
            <div className="my-3 flex justify-center items-center">
              <p className="w-[952px] text-center font-medium text-[24px] leading-[32.5px]">
                Thebuilder offers over 10,000 fully responsive UI components to
                kickstart your projects. You don't need to be a designer to
                craft stunning templates!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center ml-[100px]">
          <div className=" h-[152px] w-[612px] bg-cover bg-center bg-no-repeat bg-[url('/border.png')] ">
            <div className="flex justify-center items-center">
              <div className="font-bricolage pt-[22px] text-[#7C54EE] font-bold text-[80px]/[96px]">
                Beautiful
              </div>
              <img
                className="relative left-[92px] top-[61px] h-[50px] w-[50px]"
                src="/images/rightarrow.png"
                alt="right arrow"
              />
            </div>
          </div>
          <div className="flex items-end mt-[150px]">
            <button
              className=" p-[1px] font-bricolage font-[800] text-[35px]/[42px] bg-gradient-to-r from-[#6158FC] via-[#FF3FA8] to-[#FF8234] rounded-2xl"
              style={{
                boxShadow:
                  "0px 3px 15px rgba(97, 88, 252, 0.2), 0px 3px 15px rgba(255, 63, 168, 0.2), 0px 3px 15px rgba(255, 130, 52, 0.2)",
              }}>
              <div className="bg-white  h-full w-full pt-[8px] pb-[15px] pl-[36px] pr-[30px] rounded-2xl">
                Try demo
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className="relative h-[872px] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/gradiantImage.png")`,
          border: "transparent",
          borderTopLeftRadius: "120px",
        }}>
        <div className="flex justify-center h-[690px]">
          <img
            src="images/div-framer-window.png"
            alt="div window frame"
            className="mt-[-110px]"
          />
        </div>
        <div className="flex flex-col  w-full h-full items-center ">
          <div className="flex justify-center ">
            <h3 className="text-4xl font-medium font-inter text-[#909090] ">
              Supported Framework
            </h3>
          </div>
          <Menubar className="w-fit h-fit text-black flex justify-evenly space-x-3  leading-[21.78px] pb-[50px] border-transparent mt-5">
            <MenubarMenu>
              <div className="flex justify-center items-center pr-[50px]">
                <div className="flex justify-center items-center w-[52.43px] h-[50px] bg-white border-transparent rounded-full">
                  <img
                    src="/images/tailwindlogo.png"
                    alt="Tailwind logo"
                    className="w-[33px] h-[26px] bg-contain"
                  />
                </div>
                <span className="font-bricolage text-3xl/9 font-normal">
                  Tailwind CSS
                </span>
              </div>

              <div className="flex justify-center items-center pr-[50px]">
                <div className="flex justify-center items-center w-[52.43px] h-[50px] bg-white border-transparent rounded-full">
                  <img
                    src="/images/bootstrap.png"
                    alt="Bootstrap logo"
                    className="w-[34.95px] h-[30.87px] bg-contain "
                  />
                </div>
                <span className="font-bricolage text-3xl/9 font-normal">
                  Bootstrap
                </span>
              </div>

              <div className="flex justify-center items-center pr-[50px]">
                <div className="flex justify-center items-center w-[52.43px] h-[50px] bg-white border-transparent rounded-full">
                  <img
                    src="/images/materialUI.png"
                    alt="Material UI logo"
                    className="w-[30px] h-[24px] bg-contain "
                  />
                </div>
                <span className="font-bricolage text-3xl/9 font-normal">
                  Material UI
                </span>
              </div>

              <div className="flex justify-center items-center pr-[50px]">
                <div className="flex justify-center items-center w-[52.43px] h-[50px] bg-white border-transparent rounded-full">
                  <img
                    src="/images/bulma.png"
                    alt="Bulma logo"
                    className="w-[25px] h-[36px] bg-contain "
                  />
                </div>
                <span className="font-bricolage text-3xl/9 font-normal">
                  Bulma
                </span>
              </div>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </>
  );
}
