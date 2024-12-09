import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomCard from "./CustomCard";
import Marquee from "./Marquee";
import SlidingSections from "./SlidingSections";

export default function Main() {
  return (
    <div>
      <div className="flex justify-center items-center  bg-white font-bricolage  sm:pt-32 lg:pt-410 xl:pt-10  mt-[85px] text-[80px]/[96px]">
        <div className="flex justify-center items-center w-full max-w-screen-lg sm:w-[50%]  text-center">
          <p className="font-bold md:text-[60px] lg:text-[70px] xl:text-[80px]">
            Built Stunning Lay outs with Our
            <span
              className="ml-[16px] bg-clip-text text-transparent bg-gradient-to-r 
              from-[#6158FC] via-[#FF3FA8] to-[#FF8234]">
              Features
            </span>
          </p>
        </div>
      </div>
      <CustomCard />
      <Marquee />
      <SlidingSections />

      <div
        className="relative w-full h-[863px] top-[-150px]"
        style={{
          background:
            "radial-gradient(73.5% 82.84% at 50% 50%, rgba(125, 73, 180, 0.40) 0%, rgba(206, 176, 238, 0.26) 50%, rgba(255, 255, 255, 0.00) 100%)",
        }}>
        {[
          {
            src: "/images/menu item.png",
            alt: "menu item",
            styles: "top-[46px] left-[71px] w-[169px] h-[246px]",
          },
          {
            src: "/images/rightarrow.png",
            alt: "right arrow",
            styles: "top-[241px] left-[189px] w-[60px] h-[60px]",
          },
          {
            src: "/images/Graphic.png",
            alt: "Graphic",
            styles: "top-[46px] left-[616px] w-[149px] h-[145px]",
          },
          {
            src: "/images/error.png",
            alt: "error sign",
            styles: "left-[1043px] w-[251px] h-[191px]",
          },
          {
            src: "/images/got it.png",
            alt: "got it",
            styles: "top-[48px] left-[1671px] w-[224px] h-[100px]",
          },
          {
            src: "/images/color patate.png",
            alt: "color palette",
            styles: "top-[173px] left-[1488px] w-[127px] h-[182px]",
          },
          {
            src: "/images/motion magic.png",
            alt: "motion magic",
            styles: "top-[522px] w-[481px] h-[271px]",
          },
          {
            src: "/images/click and drag.png",
            alt: "click and drag",
            styles: "top-[547px] left-[1164px] w-[314px] h-[88px]",
          },
          {
            src: "/images/start today.png",
            alt: "start today",
            styles: "top-[538px] left-[600px] w-[300px] h-[200px]",
          },
          {
            src: "/images/straight from canvas.png",
            alt: "straight from canvas",
            styles: "top-[410px] left-[1594px] w-[300px] h-[150px]",
          },
          {
            src: "/images/Group 35562.png",
            alt: "editor",
            styles: "top-[247px] left-[546px] w-[800px] h-[300px]",
          },
          {
            src: "/images/vector.png",
            alt: "vector",
            styles: "top-[652px] left-[1740px] w-[154px] h-[168px]",
          },
        ].map(({ src, alt, styles }, index) => (
          <img
            key={index}
            src={src}
            alt={alt}
            className={`absolute ${styles}`}
          />
        ))}
      </div>

      <div
        className="flex w-full h-[1123px] bg-black opacity-95  overflow-hidden"
        style={{ marginTop: "-145px" }}>
        <div className="flex flex-col p-10 pt-0">
          <div className="space-y-10">
            <img
              src="/images/image 1.png"
              alt="image1"
              className="w-[385px] h-[621.84px]"
            />
            <img
              src="/images/image 2.png"
              alt="image2"
              className=" w-[385px] h-[621.84px]"
            />
          </div>
        </div>
        <div className="flex flex-col p-10 pt-0">
          <div className="space-y-10">
            <img
              src="/images/image 3.png"
              alt="image1"
              className="w-[385px] h-[621.84px]"
            />
            <img
              src="/images/image 4.png"
              alt="image2"
              className="w-[385px] h-[621.84px]"
            />
          </div>
        </div>
        <div className="flex flex-col p-10 pt-0">
          <div className="space-y-10">
            <img
              src="/images/image 5.png"
              alt="image1"
              className="w-[385px] h-[621.84px]"
            />
            <img
              src="/images/image 6.png"
              alt="image2"
              className="w-[385px] h-[621.84px]"
            />
          </div>
        </div>
        <div className="flex flex-col p-10 pt-0">
          <div className="space-y-10">
            <img
              src="/images/image 7.png"
              alt="image1"
              className="w-[385px] h-[621.84px]"
            />
            <img
              src="/images/image 8.png"
              alt="image2"
              className="w-[385px] h-[621.84px]"
            />
          </div>
        </div>
        <div className="relative">
          <button
            className="absolute text-white h-[110px] w-[723px] top-[581px] left-[-1291px] font-Inter font-bold text-[50px]/[72px] rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #6D56F6 0%, #E343B7 100%)",
            }}>
            Made in themebuilder
          </button>
        </div>
      </div>
      <div className="w-full h-[1000px] mt-[150px]">
        <div className="flex justify-center items-center mb-[110px] ">
          <div className="w-[680px] text-center space-y-2">
            <div className="font-bricolage font-normal text-[40px]/[48px]">
              {" "}
              From Our Blog
            </div>
            <div className="font-bricolage font-bold text-[80px]/[96px]">
              {" "}
              Get the latest on
            </div>
            <div
              className="font-bricolage font-bold text-[80px]/[96px] bg-clip-text text-transparent bg-gradient-to-r 
              from-[#6158FC] via-[#FF3FA8] to-[#FF8234]">
              {" "}
              Themebuilder
            </div>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="space-y-[20px]">
            <img
              src="/images/integrate image.png"
              alt="integrate image"
              className="w-[450px] h-[440px]"
            />
            <div className="font-bricolage font-bold w-[450px] h-[72px]  text-[#6D56F6] text-[30px]/[36px]">
              Explore what's new in Themebuilder{" "}
            </div>
            <div className="font-bricolage font-light w-[450px] h-[72px]  text-black text-[20px]/[27px]">
              Is no-code a threat to developers' jobs or a benefit? Find out{" "}
            </div>
            <div className="flex justify-between w-[100px] h-[27px]">
              <a
                href="#"
                className="font-bricolage font-semibold w-[100px] h-[27px]  text-[#6D56F6] text-[14px]/[27px]">
                READ MORE
              </a>
              <img
                src="/images/Arrow 6.png"
                alt="arrow"
                className="w-[10px] h-[10px] m-0  relative top-[9px]"
              />
            </div>
          </div>

          <div className="flex justify-evenly">
            <div className="space-y-[20px]">
              <img
                src="/images/explore new trends.png"
                alt="explore new trends"
                className="w-[450px] h-[440px]"
              />
              <div className="font-bricolage font-bold w-[450px] h-[72px]  text-[#FE3FA8] text-[30px]/[36px]">
                Explore new trends in Ui designing and devlopment{" "}
              </div>
              <div className="font-bricolage font-light w-[450px] h-[72px]  text-black text-[20px]/[27px]">
                Is no-code a threat to developers' jobs or a benefit? Find out{" "}
              </div>
              <div className="flex justify-between w-[100px] h-[27px]">
                <a
                  href="#"
                  className="font-bricolage font-semibold w-[100px] h-[27px]  text-[#6D56F6] text-[14px]/[27px]">
                  READ MORE
                </a>
                <img
                  src="/images/Arrow 6.png"
                  alt="arrow"
                  className="w-[10px] h-[10px] m-0  relative top-[9px]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-evenly">
            <div className="space-y-[20px]">
              <img
                src="/images/explore.png"
                alt="explore"
                className="w-[450px] h-[440px]"
              />
              <div className="font-bricolage font-bold w-[450px] h-[72px]  text-[#FF7C3F] text-[30px]/[36px]">
                Bring your design to life with our Themebuilder
              </div>
              <div className="font-bricolage font-light w-[450px] h-[72px]  text-black text-[20px]/[27px]">
                Is no-code a threat to developers' jobs or a benefit? Find out{" "}
              </div>
              <div className="flex justify-between w-[100px] h-[27px]">
                <a
                  href="#"
                  className="font-bricolage font-semibold w-[100px] h-[27px]  text-[#6D56F6] text-[14px]/[27px]">
                  READ MORE
                </a>
                <img
                  src="/images/Arrow 6.png"
                  alt="arrow"
                  className="w-[10px] h-[10px] m-0  relative top-[9px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[1100px] mt-[187px] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/gradiant image.png')`,
        }}>
        <div className="flex justify-center items-center w-full h-[160px] pt-[200px]">
          <div className="w-[820px] ">
            <div className="font-bricolage text-white font-normal text-[80px]/[80px]">
              See what our users are sharing about us!
            </div>
            <div className="flex justify-center items-center pt-[60px]">
              <img
                src="/images/images.png"
                alt="face images"
                className="h-[67px] w-[242px]"
              />
              <img
                src="/images/star.png"
                alt="5 star"
                className="w-[200px] h-[100px] relative top-[30px] pl-[10px]"
              />
            </div>
          </div>
        </div>
        <div className="flex overflow-x-hidden justify-evenly mt-[300px]">
          <div
            className="flex animate-marquee space-x-[65px] "
            style={{ boxShadow: "18px 22px 23px 0px #CCB1F" }}>
            <div className="flex justify-center items-center bg-white w-[406px] h-[298px] rounded-xl ">
              <div className="flex flex-col items-center w-[350px] h-[230px] ">
                <img
                  src="/images/feedback 1.png"
                  alt="feedback 1"
                  className="w-[56px] h-[56px]"
                />
                <div className="w-[339px] h-[103px] text-center pt-[15px] font-Inter font-normal text-[14px]/[25.6px]">
                  "I love how simple Themebuilder makes it for Devlopers to
                  design and save there time.Its intuitive design and powerful
                  features allowed us to streamline our processes like never
                  before.
                </div>
                <img
                  src="/images/5 star.png"
                  alt="5 star"
                  className="w-[98px] h-[22px] relative top-[28px]"
                />
                <div className="w-[135px] h-[23px] text-center text-[#7A7A7A] pt-[40px] font-Inter font-medium text-[18px]/[24.6px]">
                  Jackson Schaal
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white w-[406px] h-[298px] rounded-xl">
              <div className="flex flex-col items-center w-[350px] h-[230px] ">
                <img
                  src="/images/feedback 2.png"
                  alt="feedback 2"
                  className="w-[56px] h-[56px]"
                />
                <div className="w-[339px] h-[103px] text-center pt-[15px] font-Inter font-normal text-[14px]/[25.6px]">
                  "I love how simple Themebuilder makes it for Devlopers to
                  design and save there time.Its intuitive design and powerful
                  features allowed us to streamline our processes like never
                  before.
                </div>
                <img
                  src="/images/5 star.png"
                  alt="5 star"
                  className="w-[98px] h-[22px] relative top-[28px]"
                />
                <div className="w-[135px] h-[23px] text-center text-[#7A7A7A] pt-[40px] font-Inter font-medium text-[18px]/[24.6px]">
                  Jackson Schaal
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white w-[406px] h-[298px] rounded-xl">
              <div className="flex flex-col items-center w-[350px] h-[230px] ">
                <img
                  src="/images/feedback 3.png"
                  alt="feedback 3"
                  className="w-[56px] h-[56px]"
                />
                <div className="w-[339px] h-[103px] text-center pt-[15px] font-Inter font-normal text-[14px]/[25.6px]">
                  "I love how simple Themebuilder makes it for Devlopers to
                  design and save there time.Its intuitive design and powerful
                  features allowed us to streamline our processes like never
                  before.
                </div>
                <img
                  src="/images/5 star.png"
                  alt="5 star"
                  className="w-[98px] h-[22px] relative top-[28px]"
                />
                <div className="w-[135px] h-[23px] text-center text-[#7A7A7A] pt-[40px] font-Inter font-medium text-[18px]/[24.6px]">
                  Jackson Schaal
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white w-[406px] h-[298px] rounded-xl">
              <div className="flex flex-col items-center w-[350px] h-[230px] ">
                <img
                  src="/images/feedback 4.png"
                  alt="feedback 4"
                  className="w-[56px] h-[56px]"
                />
                <div className="w-[339px] h-[103px] text-center pt-[15px] font-Inter font-normal text-[14px]/[25.6px]">
                  "I love how simple Themebuilder makes it for Devlopers to
                  design and save there time.Its intuitive design and powerful
                  features allowed us to streamline our processes like never
                  before.
                </div>
                <img
                  src="/images/5 star.png"
                  alt="5 star"
                  className="w-[98px] h-[22px] relative top-[28px]"
                />
                <div className="w-[135px] h-[23px] text-center text-[#7A7A7A] pt-[40px] font-Inter font-medium text-[18px]/[24.6px]">
                  Jackson Schaal
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end ">
          <div className="relative font-bricolage font-bold top-[180px] text-[80px]/[80px]">
            Pricing
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full h-[1000px]">
        <div className="flex justify-center ">
          <div
            className=" h-[51px] w-[247px] pt-2 pl-2"
            style={{ border: "#BBBBBB 1px solid", borderRadius: "999px" }}>
            <div className="flex justify-between items-center">
              <div
                className="bg-[#202020] pt-1 text-[16px]/[20px] font-Inter font-bold text-center h-[36px] w-[123px] text-white"
                style={{ border: "#BBBBBB 1px solid", borderRadius: "50px" }}>
                ANNUAL
              </div>
              <div
                className=" h-[20px] w-[106px] text-[16px]/[20px] font-Inter font-bold "
                style={{ borderRadius: "50px" }}>
                QUATERLY
              </div>
            </div >
            <div className="flex justify-center">
            <div className="flex justify-center items-start pl-[20px]">
              <Card
                className="bg-[#FE985C]  mt-[50px] w-[400px] h-[673px] rounded-xl pl-[20px]"
                style={{
                  background:
                    "linear-gradient(180deg, #EEE6FF 0%, #BA96FB 100%)",
                }}>
                <CardTitle>
                  <div className="pt-[30px] font-Inter font-extrabold text-[#6F56F5] text-[28px]/[36px] pb-[12px] ">Free</div>
                  <div className=" font-Inter font-normal text-[#686868] text-[15px]/[24px] pb-[12px] ">For individuals building simple sites.</div>
                </CardTitle>
                <CardHeader >
                  <div className="font-Inter font-medium text-[#161616] text-[70px]/[62px] pb-[8px]">$0</div>
                  <div className=" font-Inter font-medium text-[#161616] text-[16px]/[24px] pb-[12px]">Free forever</div>
                </CardHeader>
                <CardDescription className="flex flex-col items-center pr-[22px] pb-[80px]">
                  <div className="flex flex-col bg-white " style={{border:"black 2px solid", borderRadius:"4px"}}>
                    <button className=" w-[320px] h-[44px] font-Inter font-medium text-[#161616] text-[18px]/[18px] ">Join for free</button>
                  </div>
                </CardDescription>
                <CardFooter className="flex flex-col space-y-2">
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                      Access to 30 Webflow components
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                      Free Figma Kit
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                      1 Project
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                      Unlimited AI usage
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                      Export Sitemap to Figma, CSV & TXT
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                      Share with others
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center items-start h-[850px] pl-[20px]" >
              <Card
                className="  mt-[30px] w-[406px] h-[750px] rounded-xl pl-[20px] "style={{
                  background: "linear-gradient(116.69deg, #FF7448 0%, #FF4848 50%, #6248FF 97%)", 

                }}
                >
             <div className="items-center ml-[-12px] h-[700px] mt-[30px] w-[390px] bg-white pl-[20px]">
             <CardTitle>
                  <div className="pt-[30px] font-Inter font-extrabold text-[#6F56F5] text-[28px]/[36px] pb-[12px] ">Starter</div>
                  <div className=" font-Inter font-normal text-[#686868] text-[15px]/[24px] pb-[12px] ">For individuals building advanced sites.</div>
                </CardTitle>
                <CardHeader >
                  <div className="font-Inter font-medium text-[#161616] text-[70px]/[62px] pb-[8px]">$32</div>
                  <div className=" flex  gap-2  pb-[12px]">
                  <div className="font-Inter font-medium text-[#161616] text-[16px]/[24px]">Per member/month</div>
                  <button className="font-Inter font-medium text-[#161616] text-[15px]/[24px] bg-[#E4E2DF] pl-[2px] h-[30px] w-[90px] rounded-2xl">Billed yearly</button>
                  </div>
                </CardHeader>
                <CardDescription className="flex flex-col items-center pr-[22px] pb-[80px]">
                  <div className="flex flex-col bg-black text-white " style={{border:"black 2px solid", borderRadius:"4px"}}>
                    <button className=" w-[320px] h-[44px] font-Inter font-medium  text-[18px]/[18px] ">Try it for free for 7 days</button>
                  </div>
                </CardDescription>
                <CardFooter className="flex flex-col space-y-2">
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                     Access to 1,000+ Webflow components
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                    Pro Figma Kit
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                      3 Project
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                      Unlimited AI usage
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                      Export Sitemap to Figma, CSV & TXT
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                    Export Wireframe to Figma & Webflow
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <div className="w-[350px] font-normal text-[15.5px]/[24px]">
                      Share with others
                    </div>
                  </div>
                </CardFooter>
             </div>
              </Card>
            </div>
            <div className="flex justify-center items-start pl-[20px]">
              <Card
                className="  mt-[50px] bg-white w-[400px] h-[673px] rounded-xl pl-[20px]" style={{border :"#6F56F5 1px solid"}}>
                <CardTitle>
                  <div className="pt-[30px] font-Inter font-extrabold text-[#6F56F5] text-[28px]/[36px] pb-[12px] ">Pro</div>
                  <div className=" font-Inter font-normal text-[#686868] text-[15px]/[24px] pb-[12px] w-[250px] h-[] ">For teams and professionals building advanced sites.</div>
                  <div className="relative "><img src="/images/Frame 1.png" alt=" 50% off"  className="absolute w-[93px] h-[120px] top-[-150px] left-[258px]" /></div>
                </CardTitle>
                <CardHeader >
                  <div className="font-Inter font-medium text-[#161616] text-[70px]/[62px] pb-[8px]">$40</div>
                  <div className=" flex  gap-2  pb-[12px]">
                  <div className="font-Inter font-medium text-[#161616] text-[16px]/[24px]">Per member/month</div>
                  <button className="font-Inter font-medium text-[#161616] text-[15px]/[24px] bg-[#E4E2DF] pl-[2px] h-[30px] w-[90px] rounded-2xl">Billed yearly</button>
                  </div>
                </CardHeader>
                <CardDescription className="flex flex-col items-center pr-[22px] pb-[80px]">
                  <div className="flex flex-col bg-black text-white " style={{border:"black 2px solid", borderRadius:"4px"}}>
                    <button className=" w-[320px] h-[44px] font-Inter font-medium  text-[18px]/[18px] ">Try it free for 7 days</button>
                  </div>
                </CardDescription>
                <CardFooter className="flex flex-col space-y-2">
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                    Access to 1,000+ Webflow components
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                    Pro Figma Kit
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                    Unlimited Projects
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                    Export Sitemap to Figma, CSV & TXT
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <img
                      src="/images/right-arrow (2).png "
                      alt="right arrow"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="w-[350px] font-normal text-[15.5px]/[24px]">
                    Export Wireframe to Figma & Webflow
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
