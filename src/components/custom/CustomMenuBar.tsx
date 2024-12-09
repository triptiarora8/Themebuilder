import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { MenubarTrigger } from "@radix-ui/react-menubar";
import {
  default as productsImg,
  default as uiLibraryImg,
} from "/images/small vector.png";

export default function MenubarDemo() {
  const menuItems = [
    { name: "Products", icon: productsImg },
    { name: "UI Libraries", icon: uiLibraryImg },
    { name: "How it works" },
    { name: "Pricing" },
    { name: "Blogs" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-around px-4 md:px-8 py-6 space-y-4 md:space-y-0">
      <div className="flex items-center space-x-4">
        <h3
          className="font-extrabold text-[30px] leading-[29px]"
          style={{ fontFamily: "Bricolage Grotesque" }}>
          ThemeBuilder
        </h3>
      </div>
      <Menubar className="hidden lg:flex bg-black text-white w-fit h-fit  justify-evenly space-x-3 p-2 leading-[21.78px] rounded-2xl border-2 border-black mt-3 md:mt-0">
        <MenubarMenu>
          {menuItems.map((item, index) => (
            <MenubarTrigger
              key={index}
              className="flex items-center py-2 px-4 sm:px-6 md:px-8 ">
              {item.name}
              {item.icon && (
                <img src={item.icon} alt={item.name} className="w-5 h-5 mr-2" />
              )}
            </MenubarTrigger>
          ))}
        </MenubarMenu>
      </Menubar>
      <div className="flex flex-col md:flex-row items-center space-x-4 mt-4 md:mt-0">
        <h5 className="text-xl py-2 px-4">Sign In</h5>
        <button className="bg-black text-white text-xl py-2 px-4 rounded-2xl border-2 border-black ">
          Try Free demo
        </button>
      </div>
    </div>
  );
}
