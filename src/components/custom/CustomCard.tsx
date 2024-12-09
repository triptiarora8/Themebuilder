import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CustomCard() {
  return (
    <div className=" w-full min-w-screen-lg  h-[1100px] ">
      <div className="flex justify-center">
        <div className="flex flex-col  ">
          <div>
            <img
              src="/images/click.png"
              alt="click and drag"
              className="relative w-[200px] h-[120px] top-[83px] left-[177px] "
            />
            <div
              className="bg-[rgba(207,201,253,0.49)] lg:ml-[200px] xl:ml-[280px] w-[650px] h-[305px] border-transparent border-[12px] 
        shadow-[0px_4px_6px_rgba(207,201,253,0.49)] rounded">
              <div>
                <p className="w-[305px] pl-[35px] pt-[60px] font-bricolage font-bold text-[#7C54EE] text-[30px]/[36px]">
                  Easy-to-Use Drag-and-Drop Interface
                </p>
                <p className="w-[284px] pl-[30px] pt-[22px] font-inter font-medium text-[18px]/[21px]">
                  Emphasize the simplicity of your app's interface, making it
                  accessible even to those with little to no coding experience.
                </p>
                <img
                  src="/images/starkitmain.png"
                  alt="starkit homepage"
                  className="relative left-[438px] top-[-196px] w-[279px] h-[284px]  shadow-[0px_4px_6px_rgba(0,0,0,0.25)]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center ml-[273px] mt-[74px] ">
            <div className="flex flex-col space-y-4">
              <div className="bg-black w-[314px] h-[240px] rounded-xl mb-[40px] relative">
                <img
                  src="/images/group (1) 2.svg"
                  alt="group 1"
                  className="absolute left-[251px]"
                />
                <div className="flex flex-col justify-end w-[240px] h-full pl-[28px]">
                  <p className="font-bricolage font-normal text-white text-[19px]/[22px]">
                    Integration with
                  </p>
                  <p className="font-bricolage font-bold text-white text-[24px]/[28px] pb-[20px]">
                    External Services
                  </p>
                </div>
              </div>
              <div className="bg-[#FBF6FC] w-[317px]  h-[263px]  rounded-xl relative">
                <div className="font-bricolage font-bold text-black text-[20px] leading-[24px] w-[272px] h-[24px] pl-[8px] pt-[18px]">
                  Customization Options
                </div>
                <img
                  src="/images/image 43.svg"
                  alt="image43"
                  className="absolute top-[50px]"
                />
                <img
                  src="/images/image 44.svg"
                  alt="image 44"
                  className="absolute bottom-[20px] left-[10px] w-[74px] h-[30px]"
                />
              </div>
            </div>
            <div className="flex items-center  ml-[80px]">
              <Card className="bg-[#6A57F8] text-black  w-[340px] h-[535px] rounded-xl">
                <CardHeader>
                  <CardTitle className="w-[220px] h-[105px] font-bricolage font-bold justify-between mt-4 text-[100px]/[120px]">
                    100+
                  </CardTitle>
                  <CardDescription className="w-[270px] h-[49px] font-bricolage font-bold text-[24px]/[28px]">
                    Templates and Themes
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <img
                    src="/images/Group 35543.png"
                    alt="group 389"
                    className="absolute top-[50px] left-[77px] h-[102px] w-[158px]"
                  />
                  <img
                    src="/images/image 47.svg"
                    alt="image 47"
                    className="absolute top-[75px] left-[0px] h-[105px] w-[189px]"
                  />
                  <img
                    src="/images/image 46.svg"
                    alt="image 46"
                    className="absolute top-[204px] left-[133px] h-[105px] w-[189px]"
                  />
                </CardContent>
                <CardFooter className="pl-[12px]"></CardFooter>
              </Card>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-start mt-[100px]  ">
            <Card className="bg-black text-white w-[290px] h-[600px] ml-[80px] mr-[50px] rounded-xl">
              <CardHeader>
                <CardTitle className="flex justify-between mt-4 mb-10">
                  <div className="pl-4 font-bricolage font-bold text-[30px] leading-[26px]">
                    Try now
                  </div>
                  <div className="flex justify-center items-center bg-white w-[30px] h-[30px] rounded-full">
                    <img
                      className="w-4 bg-contain"
                      src="/images/arrow.png"
                      alt="arrow"
                    />
                  </div>
                </CardTitle>
                <CardDescription className="relative  w-[267px] h-[245px] items-center  overflow-hidden">
                  <div className="absolute ">
                    <pre className="text-sm whitespace-pre-wrap bg-clip-text text-transparent bg-gradient-to-b from-[#9D86FCD1] to-[black] ">
                      {`<!DOCTYPE html>
<html lang="en">
<head>
<title>Page Title</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
    body {
      font-family: Arial, Helvetica, sans-serif;
          }
  </style>
      </head>
        <body>
          <!-- Your content here -->
        </body>
        </html>`}
                    </pre>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="w-[272px] h-[48px] pl-[18px]">
                <p className="font-bricolage font-normal text-[20px]/[24px]">
                  Code Generation
                </p>
              </CardContent>
              <CardFooter className="pl-[12px]">
                <p className="font-bricolage font-bold text-[48px]/[56.70px]">
                  Automatic
                </p>
              </CardFooter>
            </Card>
            <div>
              <div className="relative">
              <img src="/images/Group 35540.png" alt=" Groupimage" className="h-[248px] absolute top-[-59px] left-[100px] overflow-hidden" />
              </div>
            <div className="flex flex-col items-center ">
              <Card className="bg-[#384EB6] w-[317px] h-[274px] rounded-xl relative">
                <CardHeader>
                  <div>
                    <p className="font-bricolage font-bold text-white text-[30px]/[36px]">
                      Responsive Design
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      src="images/image 42.png"
                      alt="image 42"
                      className="h-[159px] w-[268px] absolute top-[46px] left-[-24px]"
                    />
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-[#FE985C]  mt-[50px] w-[317px] h-[274px] rounded-xl">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src="images/image 45.png"
                      alt="image 45"
                      className="h-[107px] w-[314px] absolute top-[30px]"
                    />
                  </div>
                </CardHeader>
                <CardDescription className="flex flex-col justify-end w-[314px] h-full">
                  <div className="flex flex-col justify-end items-start pb-[22px] pl-[20px]">
                    <p className="font-bricolage font-light text-black w-[272px] h-[26px] text-[16px]/[19.2px]">
                      Versions Change Feature
                    </p>
                    <p className="font-bricolage font-bold text-black w-[272px] h-[36px] text-[30px]/[36px]">
                      Real-Time Preview
                    </p>
                  </div>
                </CardDescription>
              </Card>
            </div>
            </div>

          </div>
          <div className="flex flex-row ml-[80px] mt-[29px] rounded-xl bg-[#E5E2F9] w-[649px] h-[250px] ">
            <div className="flex text-[40px]/[48px] w-[270px] font-bricolage font-bold pl-[9px] pb-[25px] items-end">
              Collaborate with the team
            </div>
            <div className="relative ">
              <div
                className="flex flex-col justify-center items-center w-[68px] h-[68px] relative top-[97px] left-[36px]"
                style={{ backgroundImage: `url('/images/Ellipse 459.png')` }}>
                <div className="font-light h-[36px] text-[30px]/[36px]">+</div>
                <div className="font-light font-bricolage h-[36px] text-[8px]/[9.6px]">
                  invite people
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center w-[68px] h-[68px] relative top-[-59px] left-[143px]"
                style={{ backgroundImage: `url('/images/Ellipse 459.png')` }}>
                <img src="/images/girl.png" alt="girl" />
              </div>
              <div
                className="flex flex-col justify-center items-center w-[68px] h-[68px] relative top-[-127px] left-[272px]"
                style={{ backgroundImage: `url('/images/Ellipse 459.png')` }}>
                <img src="/images/girl 2.png" alt="girl" className="" />
              </div>
              <div
                className="flex flex-col justify-center items-center w-[68px] h-[68px] relative top-[-110px] left-[145px]"
                style={{ backgroundImage: `url('/images/Ellipse 459.png')` }}>
                <img src="/images/girl3.png" alt="girl" className="" />
              </div>
              <div
                className="flex flex-col justify-center items-center w-[68px] h-[68px] relative top-[-90.7px] left-[151px]"
                style={{ backgroundImage: `url('/images/Ellipse 459.png')` }}>
                <img src="/images/boy1.png" alt="girl" className="" />
              </div>
              <div
                className="flex flex-col justify-center items-center w-[68px] h-[68px] relative top-[-241px] left-[272px]"
                style={{ backgroundImage: `url('/images/Ellipse 459.png')` }}>
                <img src="/images/boy2.png" alt="girl" className="" />
              </div>
              <div
                className="flex flex-col justify-center items-center w-[68px] relative h-[68px] top-[-226px] left-[271px]"
                style={{ backgroundImage: `url('/images/Ellipse 459.png')` }}>
                <img src="/images/boy3.png" alt="boy" className="" />
              </div>
              <img
                src="/images/line.png"
                alt="line"
                className="relative w-[308px] h-[10px]"
              />
            </div>
          </div>
          <div className="flex justify-between items-center bg-black pl-[22px] pr-[22px] rounded-xl w-[644px] h-[85px]  mt-[10px] ml-[80px]">
            <div className=" font-bricolage font-bold text-white text-[24px]/[28px]">
              Export and Download
            </div>
            <img
              src="/images/rightarrow.png"
              alt="right arrow"
              className="w-[60px] h-[60px] relative top-[61px] left-[232px]"
            />
            <div className="flex justify-center items-center bg-white w-[30px] h-[30px] rounded-full">
              <img
                className="w-4 bg-contain"
                src="/images/arrow.png"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
