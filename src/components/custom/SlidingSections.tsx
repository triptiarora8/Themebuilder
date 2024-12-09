import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SlidingSections() {
  return (
    <div className=" mt-[167px] mb-0">
      <div
        className="h-[1100px] flex justify-evenly w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/black shade.png')",
          borderTopRightRadius: "120px",
        }}>
        <div className="relative h-[764px] w-[1039px]">
          <img
            src="/images/Group 35555.svg"
            alt="Group 35555"
            className="absolute top-[177px] left-[-4px] w-[1039px] h-[764px]"
          />
          <img
            src="/images/image 57.png"
            alt="Image57"
            className="absolute h-[419px] w-[700px] top-[389px] left-[283px]"
          />
        </div>
        <Card className="items-end mt-[187px] mr-[330px] h-[500px] w-[300px] border-transparent">
          <CardHeader>
            <CardTitle className="flex justify-between ">
              <div className=" font-bricolage font-normal text-white text-[20px] leading-[24px]">
                step 1
              </div>
            </CardTitle>
            <CardDescription className="pt-[6px] w-[436px] pl-0">
              <div className="text-white font-bold text-[40px]/[48px] ">
                Select your favorite
              </div>
              <div className=" font-bold text-[40px]/[48px] bg-clip-text text-transparent bg-gradient-to-r from-[#6158FC] via-[#FF3FA8] to-[#FF8234] ">
                Front-End Technology
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="w-[272px] h-[48px] pt-[35px] pl-[18px] text-white space-y-2 ">
            <div className=" flex justify-start space-x-2 ">
              <img
                src="/images/tailwindlogo.png"
                alt="tailwiind logo"
                className="w-[20px] h-[20px] bg-contain bg-white rounded-full"
              />
              <p className="font-bricolage font-normal text-[20px]/[24px]">
                Tailwind CSS
              </p>
            </div>
            <div className=" flex justify-start space-x-2">
              <img
                src="/images/bootstrap.png"
                alt="bootstrap"
                className="w-[20px] h-[20px] bg-contain bg-white rounded-full"
              />
              <p className="font-bricolage font-normal text-[20px]/[24px]">
                Bootstrap
              </p>
            </div>
            <div className=" flex justify-start space-x-2">
              <img
                src="/images/materialUI.png"
                alt="Material UI "
                className="w-[20px] h-[20px] bg-contain bg-white rounded-full"
              />
              <p className="font-bricolage font-normal text-[20px]/[24px]">
                Material UI
              </p>
            </div>
            <div className=" flex justify-start space-x-2 ">
              <img
                src="/images/bulma.png"
                alt="bulma"
                className="w-[20px] h-[20px] bg-contain bg-white rounded-full"
              />
              <p className="font-bricolage font-normal text-[20px]/[24px]">
                Bulma
              </p>
            </div>
          </CardContent>
          <CardFooter className="pl-[12px] relative"></CardFooter>
          <div className="relative">
            <img
              src="/images/Rectangle 35.png"
              alt="rectangle "
              className="absolute  w-[24px] h-[22px] top-[-449px] left-[481px]"
            />
            <img
              src="/images/Line 163.png"
              alt="line dashed"
              className="absolute  w-[2px] h-[692px] top-[-431px] left-[490px]"
            />
            <img
              src="/images/Rectangle 35.png"
              alt="rectangle "
              className="absolute  w-[24px] h-[22px] top-[245px] left-[481px]"
            />
            <img
              src="/images/Rectangle 35.png"
              alt="rectangle "
              className="absolute  w-[24px] h-[22px] top-[384px] left-[314px]"
            />
            <img
              src="/images/Line 163.png"
              alt="line dashed"
              className="absolute  w-[2px] h-[390px] top-[200px] left-[114px] rotate-90"
            />
            <img
              src="/images/Rectangle 35.png"
              alt="rectangle "
              className="absolute  w-[24px] h-[22px] top-[386px] left-[-80px]"
            />
          </div>
          <div className="relative border-[1px] border-white h-[290px] w-[364px] top-[267px] left-[339px]">
            {/* <div className="absolute top-[267px] left-[339px]">
                    </div> */}
            <img
              src="/images/box gradiant image.png"
              alt="image box"
              className="absolute top-[34px] left-[29px] w-[311px] h-[233px]"
            />
            <div
              className="absolute top-[107px] left-[101px] border-[2px] border-white w-[159px] h-[43px] text-center
                     font-bricolage font-bold text-white text-[16px]/[19.2px] pt-[12px]">
              TRY DEMO
            </div>
            <img
              src="/images/Rectangle 43.png"
              alt=" rectangle"
              className=" absolute top-[100px] left-[100px] h-[10px] w-[10px]"
            />
            <img
              src="/images/Rectangle 43.png"
              alt=" rectangle"
              className="absolute top-[148px] left-[100px] h-[10px] w-[10px]"
            />
            <img
              src="/images/Rectangle 43.png"
              alt=" rectangle"
              className="absolute top-[100px] left-[251px] h-[10px] w-[10px]"
            />
            <img
              src="/images/Rectangle 43.png"
              alt=" rectangle"
              className="absolute top-[148px] left-[251px] h-[10px] w-[10px]"
            />
          </div>
        </Card>
      </div>

      <div
        className="h-[1100px] flex justify-evenly w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gradiant image.png')",
        }}>
        <div className="relative h-[764px] w-[1039px]">
          <img
            src="/images/Group 35555.svg"
            alt="Group 35555"
            className="absolute top-[63px] left-[-4px] w-[1039px] h-[764px]"
          />
          <video
            className=" absolute h-[419px] w-[700px] top-[272px] left-[283px] object-cover"
            autoPlay
            loop
            muted
            src="/images/video 3.mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <Card className="items-end mt-[80px] mr-[330px] h-[500px] w-[300px] border-transparent">
          <CardHeader>
            <CardTitle className="flex justify-between ">
              <div className=" font-bricolage font-normal text-white text-[20px] leading-[24px]">
                step 2
              </div>
            </CardTitle>
            <CardDescription className="pt-[6px] w-[436px] pl-0">
              <div className="text-white font-bold text-[40px]/[48px] ">
                Choose UI Components & customized Styles
              </div>
              <div className="text-white font-semibold text-[25px]/[30px] pt-[19px] text-justify ">
                Shuffle streamlines your company's design team by providing
                layouts constructed from over 10,000 UI components organized
                into categories like navigations, headers, features, and beyond.
              </div>
            </CardDescription>
          </CardHeader>
          <CardFooter className="pt-[35px] ">
            <img
              src="/images/Group 35556.png"
              alt=" try demo"
              className="w-[166px] h-[50px]"
            />
          </CardFooter>
        </Card>
      </div>

      <div
        className="h-[1100px] flex justify-evenly w-full bg-cover bg-center relative top-[-154px]"
        style={{
          backgroundImage: "url('/images/black shade.png')",
          borderTopRightRadius: "120px",
        }}>
        <div className="relative h-[764px] w-[1039px]">
          <img
            src="/images/Group 35555.svg"
            alt="Group 35555"
            className="absolute top-[177px] left-[-4px] w-[1039px] h-[764px]"
          />
          <video
            className=" absolute h-[419px] w-[700px] top-[389px] left-[283px] object-cover"
            autoPlay
            loop
            muted
            src="/images/video 2.mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <Card className="items-end mt-[187px] mr-[330px] h-[500px] w-[300px] border-transparent">
          <CardHeader>
            <CardTitle className="flex justify-between ">
              <div className=" font-bricolage font-normal text-white text-[20px] leading-[24px]">
                step 3
              </div>
            </CardTitle>
            <CardDescription className="pt-[6px] w-[436px] pl-0">
              <div className="text-white font-bold text-[40px]/[48px] ">
                Download
              </div>
              <div className=" font-bold text-[40px]/[48px] bg-clip-text text-transparent bg-gradient-to-r from-[#6158FC] via-[#FF3FA8] to-[#FF8234] ">
                Source Code
              </div>
              <div className="text-white font-medium w-[396.03px] text-[25px]/[30px] pt-[19px] text-justify">
                Simply hit export and download your project complete with all
                source files. Enjoy a seamless collaboration experience without
                any external dependencies or vendor restrictions.
              </div>
            </CardDescription>
          </CardHeader>
          <CardFooter className="pl-[12px] relative"></CardFooter>
          <div className="relative">
            <img
              src="/images/Rectangle 35.png"
              alt="rectangle "
              className="absolute  w-[24px] h-[22px] top-[-589px] left-[481px]"
            />
            <img
              src="/images/Line 163.png"
              alt="line dashed"
              className="absolute  w-[2px] h-[692px] top-[-564px] left-[490px]"
            />
            <img
              src="/images/Rectangle 35.png"
              alt="rectangle "
              className="absolute  w-[24px] h-[22px] top-[130px] left-[481px]"
            />
            <img
              src="/images/Rectangle 35.png"
              alt="rectangle "
              className="absolute  w-[24px] h-[22px] top-[244px] left-[315px]"
            />
            <img
              src="/images/Line 163.png"
              alt="line dashed"
              className="absolute  w-[2px] h-[390px] top-[63px] left-[114px] rotate-90"
            />
            <img
              src="/images/Rectangle 35.png"
              alt="rectangle "
              className="absolute  w-[24px] h-[22px] top-[244px] left-[-80px]"
            />
          </div>
          <div className="relative border-[1px] border-white h-[290px] w-[364px] top-[151px] left-[339px]">
            <img
              src="/images/box gradiant image.png"
              alt="image box"
              className="absolute top-[34px] left-[29px] w-[311px] h-[233px]"
            />
            <div
              className="absolute top-[107px] left-[101px] border-[2px] border-white w-[159px] h-[43px] text-center
                     font-bricolage font-bold text-white text-[16px]/[19.2px] pt-[12px]">
              TRY DEMO
            </div>
            <img
              src="/images/Rectangle 43.png"
              alt=" rectangle"
              className=" absolute top-[100px] left-[100px] h-[10px] w-[10px]"
            />
            <img
              src="/images/Rectangle 43.png"
              alt=" rectangle"
              className="absolute top-[148px] left-[100px] h-[10px] w-[10px]"
            />
            <img
              src="/images/Rectangle 43.png"
              alt=" rectangle"
              className="absolute top-[100px] left-[251px] h-[10px] w-[10px]"
            />
            <img
              src="/images/Rectangle 43.png"
              alt=" rectangle"
              className="absolute top-[148px] left-[251px] h-[10px] w-[10px]"
            />
          </div>
        </Card>
      </div>
    </div>
  );
} 