'use client'
import HyperText from "@/components/ui/hyper-text";
import { motion } from "framer-motion"
import { Children, useEffect, useState } from "react";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { ArrowDownRight, CalendarIcon, HomeIcon, MailIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";
import ModeToggle from "@/components/ui/mode-toggle";
import { Roboto_Mono } from "next/font/google";
import WordRotate from "@/components/ui/word-rotate";


const robotoMono = Roboto_Mono({
  variable:"--font-roboto-mono",
  subsets: ["latin"],
})

export type IconProps = React.HTMLAttributes<SVGElement>;
export default function Home() {
  const [time,SetTime] = useState('');
  const [color, setColor] = useState("#ffffff");
  const { resolvedTheme } = useTheme();
  ///


  const Icons = {
    calendar: (props: IconProps) => <CalendarIcon {...props} />,
    email: (props: IconProps) => <MailIcon {...props} />,
    linkedin: (props: IconProps) => (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>LinkedIn</title>
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
    x: (props: IconProps) => (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>X</title>
        <path
          fill="currentColor"
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        />
      </svg>
    ),
    youtube: (props: IconProps) => (
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <title>youtube</title>
        <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
      </svg>
    ),
    github: (props: IconProps) => (
      <svg viewBox="0 0 438.549 438.549" {...props}>
        <path
          fill="currentColor"
          d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
        ></path>
      </svg>
    ),
  };
   
  const DATA = {
    navbar: [
      { href: "#", icon: HomeIcon, label: "Home" },
      
    ],
    contact: {
      social: {
        GitHub: {
          name: "GitHub",
          url: "#",
          icon: Icons.github,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/sanele-ncube-823221236/",
          icon: Icons.linkedin,
        },
        
        email: {
          name: "Send Email",
          url: `mailto:zulusibusiso81@gmail.com?subject
                 Let +0027t s work together?body=Let me now of any idea you have and how i coudl contribute `,
          icon: Icons.email,
        },
      },
    },
  };
  useEffect(()=>{
    function getTime(){
      setInterval(()=>{
       const now = new Date()//Get the current data and time
       //extract hours 
        
       SetTime(
        `${now.getHours().toString()}:${now.getMinutes().toString().padStart(2, '0')}`
      );
       //extract minutes
      
       /* if(minutes <= 9 ){
        SetTime(`${now.getHours().toString()}:0${now.getMinutes().toString()}`)
        console.log(time)
        
       } */
      
      },60000)
   
       //Immedialey log the initial timme to avoid waiting for the first interval
       const now = new Date()
       
       SetTime(
        `${now.getHours().toString()}:${now.getMinutes().toString().padStart(2, '0')}`
      );
       
      }
      getTime()
    
  })
  ///
  useEffect(() => {
    setColor(resolvedTheme !== "dark" ?"#000000" :  "#ffffff" );
    
    console.log(color)
  }, [resolvedTheme,color]);
  ////
 


  const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;  // Use window.scrollY instead of window.screenY
  
        if (currentScrollY > lastScrollY) {
          setScrollDirection('down');
          setIsActive(false);  // Update active state when scrolling down
          console.log('scroll event logged');
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection('up');
          setIsActive(true);  // Update active state when scrolling up
          console.log('scroll event logged');
        }
  
        setLastScrollY(currentScrollY);  // Update last scroll position
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
        console.log('scroll event logged');
      };
    }, [lastScrollY]);  // Only re-run effect when lastScrollY changes
  
    // Optionally log state values for debugging
    useEffect(() => {
      console.log(isActive);
    }, [isActive]);  // Log isActive whenever it changes

    return scrollDirection;
  };
  useScrollDirection()

  

  return (
    <main className={`w-screen h-screen  overflow-x-hidden `}>
        <section className={`justify-center items-center w-full flex-col  h-screen  flex flex-1 relative  ${robotoMono.variable} `}>
       <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      >
        
      </Particles>
      <div className="p-2 text-sm roboto_mono flex-1">
    <div className=" ">
      <div className="flex flex-row justify-center">
      <HyperText
      duration={3}
      className="roboto_mono text-[12px] md:text-[14px] text-end  dark:text-[#ececec]"
      text="Sanele  Ncube"
    />
      </div>
    
    <div className="flex flex-row justify-center ">
      <HyperText
      duration={3}
      className="text-[10px] md:text-[12px] dark:text-[#ececec]"
      text="JHB,South Africa"
    />
  
      </div>
      <div className="flex flex-row justify-center text-center
      ">
      <motion.div
      className="text-[10px] md:text-[12px] roboto_mono  dark:text-[#ececec]"
      initial={{
        opacity:0,
      }}
      animate={{
        opacity:1,
      }}
      transition={{
        duration:5,
        ease:'backInOut'
      }}
    >
      
      <p  className=" roboto_mono  dark:text-white">
      {time}
      </p>
    </motion.div>
  
      </div>
   
      </div>
    </div>
   
    

       <div className=" mx-auto my-auto items-center justify-center fixed bottom-9 w-fit flex-1">
       <TooltipProvider>
            <Dock direction="middle" className=""  >
              {DATA.navbar.map((item) => (
                <DockIcon key={item.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={item.href}
                        
                        title={item.label}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full",
                        )}
                      >
                        <item.icon className="size-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              <Separator orientation="vertical" className="h-full" />
              {Object.entries(DATA.contact.social).map(([name, social]) => (
                <DockIcon key={name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={social.url}
                        
                        title={social.name}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full",
                        )}
                      >
                        <social.icon className="size-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              <Separator orientation="vertical" className="h-full py-2" />
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger asChild >
                  <ModeToggle  />
                    
                  </TooltipTrigger>
                  <TooltipContent >
                    <p>Theme</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </TooltipProvider>
       </div>
       
      </section>
    
      <section className="
   w-fit h-screen flex flex-col  mx-auto my-auto text-black dark:text-white mt-8 ">
    <div className=" h-screen w-fit">
    <p className="text-black dark:text-white text-md font-bold p-1 md:p-2">PHILOSOPHY</p>
    <div className="w-screen h-[2px] bg-neutral-800"></div>
    {/* Container */}
   <div className="flex flex-col lg:flex-row-reverse ">
    {/* Img */}
    <div className="lg:max-h-full  p-2  object-fit md:w-full md:h-1/2 md:p-3 lg:h-full ">
    <img src="https://media.licdn.com/dms/image/v2/D4D22AQFAxv_G28KQcg/feedshare-shrink_800/feedshare-shrink_800/0/1716906019555?e=1736985600&v=beta&t=bM-u-Ak9XzNgl9aR-MKr6h2kFvCUgZxQx9dO-laUz10" alt="" className="object-scale-down md:max-h-[80vh] lg:min-w-[50vw] lg:min-h-screen md:w-screen " />
  

  </div>
    <div className="pl-2 "> <p className="font-bold text-xl p-2 lg:text-3xl lg:justify-center xl:text-4xl lg:p-3 ">I FOCUS ON CREATING INTUITIVE EXPERIENCES WHERE EVERY ELEMENT SERVES A PURPOSE, ENSURING THAT NAVIGATION FEELS NATURAL AND EFFORTLESS. VISUALLY, MY DESIGNS ARE NOT JUST ATTRACTIVE BUT STRATEGIC, CAPTURING ATTENTION WHILE CONSISTENTLY REFLECTING YOUR BRAND S IDENTITY AND GOALS.</p>
    <Link href={'#email'} className=" w-full lg:w-1/2 h-22  flex flex-row space-x-1 p-2 md:p-1 lg:pl-3">
 
 <div className="bg-black dark:bg-white w-full p-1 xl:p-2  items-center ">
    <p className="text-white dark:text-black font-semibold text-balances my-auto text-lg">More about me</p>
    </div>
    <div className="bg-black dark:bg-white p-2">

      <ArrowDownRight className="stroke-white dark:stroke-black"/>
    </div>
 
 
      </Link>
    </div>
    
    
   </div>
    </div>
    
      </section>
    {/*  */}
 
    {/*  */}
    <section className="w-screen h-fit my-52 flex flex-col  text-center items-center justify-center ">
      <div className="place-self-start w-full">
        <h1 className="text-3xl lg:text-[45px] font-bold text-center p-4">Education</h1>

      </div>
      <div className="p-2 lg:w-1/2 mx-auto place-self-start">
        <div className="border border-[#333333] p-8 w-11/12 text-start  text-[14px] mx-auto rounded-lg">
          <p className="text-start">[2021-2023]</p>
          <h2 className="text-nowrap text-start">University of johannesburg</h2>
          <h1 className="text-nowrap">BA Public Management & Governance</h1>
          <p className="mt-2 text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque voluptatem quam odit esse ea rem, numquam repudiandae repellendus velit quo doloremque sequi officiis deleniti quos dolore qui, veritatis pariatur.</p>
        </div>
      </div>
    {/*  */}
    <div className="p-2 lg:w-1/2 mx-auto place-self-start">
        <div className="border border-[#333333] p-8 w-11/12 text-start text-[14px] mx-auto rounded-lg">
          <p className="text-start">[2024-Present]</p>
          <h2 className="text-nowrap text-start">University of johannesburg</h2>
          <h1 className="text-nowrap">Bcom (Hons) Information Management </h1>
          <p className="mt-2 text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque voluptatem quam odit esse ea rem, numquam repudiandae repellendus velit quo doloremque sequi officiis deleniti quos dolore qui, veritatis pariatur.</p>
        </div>
      </div>
      <div className="mt-20 space-x-0">
      <h1 className="text-3xl lg:text-[45px] font-bold text-center p-4 ">Certificates</h1>
    
     
        {/*  */}
        <div className="flex flex-row h-fit p-4  text-start  text-[14px] mx-auto rounded-lg  ">
          <div className="h-20 ">
          <img src="https://ulink.uj.ac.za/images/native/uj.png" alt="certificate-institute" className="rounded-lg h-full object-contain" />
          </div>
          <div className="flex flex-col place-content-start place-self-start pl-3  text-lg text-center">
            <p className="text-nowrap ">University of Johannesburg</p>
            <p className="text-start "> Introduction to 4IR</p>
          </div>
      </div>
      {/*  */}
      <div className="flex flex-row h-fit p-4  text-start  text-[14px] mx-auto rounded-lg space-x-0  ">
          <div className="h-20 ">
          <img src="data:image/png;base64,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" alt="certificate-institute" className="rounded-lg h-full object-contain" />
          
          </div>
          <div className="flex flex-col place-content-start place-self-start pl-3  text-lg ">
            <p className="text-nowrap ">Comptia</p>
            <p className="text-start ">Security Pro (In progress)</p>
          </div>
        </div>
         {/*  */}
       <div className=" space-x-0">
       <div className="flex flex-row h-fit p-4  text-start  text-[14px] mx-auto rounded-lg space-x-0  ">
          <div className=" ">
          <img src="https://cdn01.alison-static.net/public/html/site/img/header/alison-free-courses.svg" alt="certificate-institute" className="rounded-lg h-full object-contain " />
          
          </div>
          <div className="flex flex-col place-content-start place-self-start pl-3  text-lg ">
            <p className="text-nowrap ">Alison</p>
            <p className="text-start "> Introduction to Data Analytics with Python</p>
          </div>
        </div>
       </div>
      </div>
      {/*  */}
      <div className="place-self-start w-full">
        <h1 className="text-3xl lg:text-[45px] font-bold text-center pt-32 pb-10">Skills</h1>

      </div>
      <div className="p-4 w-full lg:max-w-screen-md mx-auto place-self-start grid grid-cols-3 gap-4 ">
      <div className="lg:max-w-[280px] max-h-fit  p-6 text-start rounded-xl col-span-3 md:col-span-1">
      <div className="w-full max-h-1/2 flex  justify-center">
      <svg fill="#fff700" width="109px" height="109px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fff700" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>powerbi</title> <path d="M13.501 16h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 12.496c0 0 0 0 0 0 0 0.69 0.559 1.25 1.25 1.25 0 0 0 0 0 0h8.747v-13.746c0-0.69-0.559-1.25-1.25-1.25v0zM19.749 8.502h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 5.623h2.499c1.035 0.001 1.873 0.84 1.874 1.874v13.746h5.623v-21.244c0-0.69-0.559-1.25-1.25-1.25v0zM27.247 2.254v27.492c0 0 0 0 0 0 0 0.69-0.559 1.25-1.25 1.25 0 0-0 0-0 0h-4.374v-21.244c-0.001-1.035-0.84-1.873-1.874-1.874h-2.499v-5.623c0-0 0-0 0-0 0-0.69 0.559-1.25 1.25-1.25h7.498c0.69 0 1.25 0.559 1.25 1.25 0 0 0 0 0 0v0z"></path> </g></svg>
      </div>
      <h1 className="pt-2">Data Visulization</h1>
      <p className="">Power BI</p>
      </div>
      {/*  */}
      <div className="lg:max-w-[280px] max-h-fit  p-5 text-start rounded-xl col-span-3 md:col-span-1 ">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center">
      <svg width="115px" height="115px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="8" y="2" width="24" height="28" rx="2" fill="#2FB776"></rect> <path d="M8 23H32V28C32 29.1046 31.1046 30 30 30H10C8.89543 30 8 29.1046 8 28V23Z" fill="url(#paint0_linear_87_7712)"></path> <rect x="20" y="16" width="12" height="7" fill="#229C5B"></rect> <rect x="20" y="9" width="12" height="7" fill="#27AE68"></rect> <path d="M8 4C8 2.89543 8.89543 2 10 2H20V9H8V4Z" fill="#1D854F"></path> <rect x="8" y="9" width="12" height="7" fill="#197B43"></rect> <rect x="8" y="16" width="12" height="7" fill="#1B5B38"></rect> <path d="M8 12C8 10.3431 9.34315 9 11 9H17C18.6569 9 20 10.3431 20 12V24C20 25.6569 18.6569 27 17 27H8V12Z" fill="#000000" fill-opacity="0.3"></path> <rect y="7" width="18" height="18" rx="2" fill="url(#paint1_linear_87_7712)"></rect> <path d="M13 21L10.1821 15.9L12.8763 11H10.677L9.01375 14.1286L7.37801 11H5.10997L7.81787 15.9L5 21H7.19931L8.97251 17.6857L10.732 21H13Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7712" x1="8" y1="26.5" x2="32" y2="26.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#163C27"></stop> <stop offset="1" stop-color="#2A6043"></stop> </linearGradient> <linearGradient id="paint1_linear_87_7712" x1="0" y1="16" x2="18" y2="16" gradientUnits="userSpaceOnUse"> <stop stop-color="#185A30"></stop> <stop offset="1" stop-color="#176F3D"></stop> </linearGradient> </defs> </g></svg>
      </div>
      <h1 className="pt-2">Productivity</h1>
      <p className="">Microsoft Excel </p>
      </div>
      {/*  */}
      <div className="lg:max-w-[280px]max-h-fit  p-4 text-start rounded-xl col-span-3 md:col-span-1">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center">
      <svg width="109px" height="109px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><linearGradient id="a" x1="4.494" y1="-1748.086" x2="13.832" y2="-1731.914" gradientTransform="translate(0 1756)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ca4c28"></stop><stop offset="0.5" stop-color="#c5401e"></stop><stop offset="1" stop-color="#b62f14"></stop></linearGradient></defs><title>file_type_powerpoint</title><path d="M18.93,17.3,16.977,3h-.146A12.9,12.9,0,0,0,3.953,15.854V16Z" style={{fill:"#ed6c47"}}></path><path d="M17.123,3h-.146V16l6.511,2.6L30,16v-.146A12.9,12.9,0,0,0,17.123,3Z" style={{fill:"#ff8f6b"}}></path><path d="M30,16v.143A12.905,12.905,0,0,1,17.12,29h-.287A12.907,12.907,0,0,1,3.953,16.143V16Z" style={{fill:"#d35230"}}></path><path d="M17.628,9.389V23.26a1.2,1.2,0,0,1-.742,1.1,1.16,1.16,0,0,1-.45.091H7.027c-.182-.208-.358-.429-.521-.65a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85c.143-.221.293-.442.456-.65h9.93A1.2,1.2,0,0,1,17.628,9.389Z" style={{opacity:0.10000000149011612,isolation:'isolate'}}></path><path d="M16.977,10.04V23.911a1.15,1.15,0,0,1-.091.448,1.2,1.2,0,0,1-1.1.741H7.62q-.309-.314-.593-.65c-.182-.208-.358-.429-.521-.65a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.735A1.2,1.2,0,0,1,16.977,10.04Z" style={{opacity:0.20000000298023224,isolation:'isolate'}}></path><path d="M16.977,10.04V22.611A1.2,1.2,0,0,1,15.785,23.8H6.506a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.735A1.2,1.2,0,0,1,16.977,10.04Z" style={{opacity:0.20000000298023224,isolation:'isolate'}}></path><path d="M16.326,10.04V22.611A1.2,1.2,0,0,1,15.134,23.8H6.506a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.084A1.2,1.2,0,0,1,16.326,10.04Z" style={{opacity:0.20000000298023224,isolation:'isolate'}}></path><path d="M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z" style={{fill:'url(#a)'}}></path><path d="M9.293,12.028a3.287,3.287,0,0,1,2.174.636,2.27,2.27,0,0,1,.756,1.841,2.555,2.555,0,0,1-.373,1.376,2.49,2.49,0,0,1-1.059.935A3.607,3.607,0,0,1,9.2,17.15H7.687v2.8H6.141V12.028ZM7.686,15.94H9.017a1.735,1.735,0,0,0,1.177-.351,1.3,1.3,0,0,0,.4-1.025q0-1.309-1.525-1.31H7.686V15.94Z" style={{fill:'#fff'}}></path></g></svg>
      </div>
      <h1 className="pt-2">Communitcation & Presentaion</h1>
      <p className="">Power Point</p>
      </div>
      {/*  */}
      <div className="lg:max-w-[280px] max-h-fit  p-4 text-start rounded-xl col-span-3 md:col-span-1">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center">
      <svg width="109px" height="109px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><linearGradient id="a" x1="4.494" y1="-1712.086" x2="13.832" y2="-1695.914" gradientTransform="translate(0 1720)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2368c4"></stop><stop offset="0.5" stop-color="#1a5dbe"></stop><stop offset="1" stop-color="#1146ac"></stop></linearGradient></defs><title>file_type_word</title><path d="M28.806,3H9.705A1.192,1.192,0,0,0,8.512,4.191h0V9.5l11.069,3.25L30,9.5V4.191A1.192,1.192,0,0,0,28.806,3Z" style={{fill:"#41a5ee"}}></path><path d="M30,9.5H8.512V16l11.069,1.95L30,16Z" style={{fill:"#2b7cd3"}}></path><path d="M8.512,16v6.5L18.93,23.8,30,22.5V16Z" style={{fill:"#185abd"}}></path><path d="M9.705,29h19.1A1.192,1.192,0,0,0,30,27.809h0V22.5H8.512v5.309A1.192,1.192,0,0,0,9.705,29Z" style={{fill:"#103f91"}}></path><path d="M16.434,8.2H8.512V24.45h7.922a1.2,1.2,0,0,0,1.194-1.191V9.391A1.2,1.2,0,0,0,16.434,8.2Z" style={{opacity:0.10000000149011612,isolation:"isolate"}}></path><path d="M15.783,8.85H8.512V25.1h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z" style={{opacity:0.20000000298023224,isolation:"isolate"}}></path><path d="M15.783,8.85H8.512V23.8h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z" style={{opacity:0.20000000298023224,isolation:"isolate"}}></path><path d="M15.132,8.85H8.512V23.8h6.62a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.132,8.85Z" style={{opacity:0.20000000298023224,isolation:"isolate"}}></path><path d="M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z" style={{fill:"#185abd"}}></path><path d="M6.9,17.988c.023.184.039.344.046.481h.028c.01-.13.032-.287.065-.47s.062-.338.089-.465l1.255-5.407h1.624l1.3,5.326a7.761,7.761,0,0,1,.162,1h.022a7.6,7.6,0,0,1,.135-.975l1.039-5.358h1.477l-1.824,7.748H10.591L9.354,14.742q-.054-.222-.122-.578t-.084-.52H9.127q-.021.189-.084.561c-.042.249-.075.432-.1.552L7.78,19.871H6.024L4.19,12.127h1.5l1.131,5.418A4.469,4.469,0,0,1,6.9,17.988Z" style={{fill:"#fff"}}></path></g></svg>
      
      </div>
      <h1 className="pt-2">Productivity</h1>
      <p className="">Microsoft Word </p>
      </div>
{/*  */}
<div className="lg:max-w-[280px] max-h-fit    p-4 text-start rounded-xl col-span-3 md:col-span-1">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center">
    <svg width="109px" height="90px" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clipPath="url(#clip0_905_1790)"><path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#7D2AE7" /><path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="url(#paint0_radial_905_1790)" /><path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="url(#paint1_radial_905_1790)" /><path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="url(#paint2_radial_905_1790)" /><path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="url(#paint3_radial_905_1790)" /><path d="M57.2691 48.2052C56.939 48.2052 56.6485 48.484 56.3462 49.0928C52.9323 56.0153 47.0358 60.9134 40.2125 60.9134C32.3228 60.9134 27.437 53.7913 27.437 43.9522C27.437 27.2855 36.7232 17.6491 44.8796 17.6491C48.691 17.6491 51.0186 20.0443 51.0186 23.8559C51.0186 28.3796 48.4485 30.7748 48.4485 32.3702C48.4485 33.0864 48.8939 33.5201 49.7773 33.5201C53.3264 33.5201 57.4918 29.4419 57.4918 23.6808C57.4918 18.0947 52.63 13.9888 44.4737 13.9888C30.994 13.9888 19.0142 26.4858 19.0142 43.777C19.0142 57.1614 26.6572 66.0061 38.45 66.0061C50.9668 66.0061 58.2043 53.5526 58.2043 49.5105C58.2043 48.6153 57.7466 48.2052 57.2691 48.2052Z" fill="white" /></g><defs><radialGradient id="paint0_radial_905_1790" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(15.453 70.9057) rotate(-49.416) scale(61.8733)"><stop stopColor="#6420FF" /><stop offset={1} stopColor="#6420FF" stopOpacity={0} /></radialGradient><radialGradient id="paint1_radial_905_1790" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(21.1788 9.09457) rotate(54.703) scale(69.7735)"><stop stopColor="#00C4CC" /><stop offset={1} stopColor="#00C4CC" stopOpacity={0} /></radialGradient><radialGradient id="paint2_radial_905_1790" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(15.4526 70.9053) rotate(-45.1954) scale(61.1242 28.1118)"><stop stopColor="#6420FF" /><stop offset={1} stopColor="#6420FF" stopOpacity={0} /></radialGradient><radialGradient id="paint3_radial_905_1790" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(32.7158 10.7789) rotate(66.5198) scale(62.9836 105.512)"><stop stopColor="#00C4CC" stopOpacity={0.725916} /><stop offset={0.0001} stopColor="#00C4CC" /><stop offset={1} stopColor="#00C4CC" stopOpacity={0} /></radialGradient><clipPath id="clip0_905_1790"><rect width={80} height={80} fill="white" /></clipPath></defs></svg>
      
      </div>
      <h1 className="pt-2">Communication & Presentation</h1>
      <p className="">Canva</p>
      </div>

      {/*  */}
      <div className="lg:max-w-[280px] max-h-fit    p-4 text-start rounded-xl col-span-3 md:col-span-1">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="109px" height="90px" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260" ><path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z" /></svg>
      
      </div>
      <h1 className="pt-">Prompt engineering</h1>
      <p className="">Open AI </p>
      </div>
      {/*  */}
      <div className="lg:max-w-[280px] max-h-fit  p-4 text-start rounded-xl col-span-3 md:col-span-1">
      <div className="max-w-1/2 max-h-1/2 flex  justify-center">
      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1024 791.27002" style={{
height:109,width:109
}} xmlSpace="preserve" width="1em" height="1em"><style type="text/css">{"\n\t.st0{fill:#9FEF00;}\n"}</style><path className="st0" d="M697.93835,297.50143c0.00049-0.04691,0.00452-0.09305,0.00452-0.13995 c0-4.64658-2.05377-8.99628-5.51544-11.95172c-0.16724-0.14578-0.34021-0.28525-0.51428-0.42371 c-0.0517-0.04062-0.10291-0.08197-0.15509-0.12183c-0.59521-0.46054-1.22827-0.87796-1.89917-1.24747l-169.76471-98.01547 c-0.41071-0.24364-0.8291-0.47014-1.25714-0.67746c-2.55103-1.23232-5.29578-1.71405-7.96582-1.52412 c-1.40308,0.10164-2.80627,0.39169-4.16898,0.88098c-1.01544,0.36269-1.99631,0.8313-2.92343,1.39728l-169.85989,98.0649 c-4.86584,2.81018-7.86215,8.00027-7.86215,13.61862c0,0.11374,0.00882,0.22623,0.0112,0.33972 c-0.0025,0.12561-0.02094,0.24969-0.02094,0.37531l0.00012,195.83673c0,5.99643,3.35712,11.20972,8.29587,13.86224 l169.79468,98.03036c0.3139,0.18134,0.63281,0.3501,0.95541,0.50793c0.02219,0.01086,0.04489,0.01947,0.06708,0.03027 c0.48273,0.23334,0.97556,0.43634,1.47446,0.61743c0.06961,0.02521,0.13809,0.05347,0.20807,0.0777 c0.49307,0.17151,0.99298,0.31372,1.49728,0.43433c0.09546,0.02295,0.19052,0.04541,0.28638,0.06628 c0.5033,0.11078,1.01001,0.19879,1.51971,0.25928c0.08136,0.00964,0.16257,0.01544,0.24402,0.02374 c0.53546,0.05499,1.0723,0.09052,1.60977,0.09052c0.5376,0,1.07458-0.03552,1.60999-0.09052 c0.08124-0.0083,0.16248-0.0141,0.24365-0.02374c0.50989-0.06049,1.01654-0.1488,1.51996-0.25928 c0.09576-0.02087,0.19055-0.04333,0.28601-0.06604c0.50433-0.12085,1.00446-0.26306,1.49756-0.43433 c0.06989-0.02448,0.13818-0.05273,0.20782-0.07794c0.49847-0.18109,0.99097-0.38385,1.47345-0.61688 c0.02258-0.01111,0.04578-0.01996,0.06836-0.03107c0.32269-0.15784,0.6416-0.32635,0.95538-0.50769l169.79456-98.03036 c4.93884-2.65253,8.29584-7.86581,8.29584-13.86224l0.00049-195.95755C697.95294,297.80386,697.94238,297.65302,697.93835,297.50143 z M392.67059,290.95648l115.6322-66.76077c2.28885-1.32161,5.10895-1.32161,7.39795,0l115.63019,66.759 c4.93207,2.84726,4.93207,9.96625,0.00012,12.81378l-115.63208,66.7605c-2.28894,1.32159-5.1091,1.32159-7.39807,0.00024 l-115.63031-66.75925C387.73868,300.92249,387.73853,293.80399,392.67059,290.95648z M491.96909,544.71106 c0,5.68195-6.15076,9.23309-11.07135,6.39215l-115.4053-66.62985c-2.28357-1.31857-3.6904-3.75522-3.6904-6.39212V344.83359 c0-5.68164,6.15076-9.23282,11.07135-6.39188l115.4053,66.62988c2.28369,1.31857,3.6904,3.75522,3.6904,6.39212V544.71106z  M662.19775,478.08124c0,2.6369-1.40686,5.07355-3.69043,6.39212l-115.40533,66.62985 c-4.92059,2.84094-11.07135-0.71021-11.07135-6.39215V411.46371c0-2.6369,1.40674-5.07355,3.69043-6.39212l115.40515-66.62988 c4.92072-2.84094,11.07153,0.71024,11.07153,6.39215V478.08124z" /></svg>
   
      </div>
      <h1 className="pt-2">CyberSecurity Awerness</h1>
      <p className="">Hack the box </p>
      </div>
      </div>
      <div className="p-2 lg:w-1/2 mx-auto place-self-start">
      <h1 className="text-3xl font-bold p-4 mt-28">Work Experience</h1>
        <div className="border border-[#333333] p-8 w-11/12 text-start text-[14px] mx-auto rounded-lg">
          <p className="text-start"></p>
          <h2 className="text-nowrap text-start">Netflorist</h2>
          <h1 className="text-nowrap">Temp Data Entry Clerk </h1>
          <p className="mt-2 text-muted-foreground">Managed high volume  data entry tasks with precision and contributed to the operational efficiency during the Valentine's Day peak session </p>
        </div>
      </div>
    </section>
    <section className="w-screen h-screen flex flex-col text-black dark:text-white justify-center p-1">
    <div className="flex-row "> 
   <div className="pb-4">
   <div className="flex flex-row text-3xl font-bold space-x-1 items-center">
      Let's 
      <WordRotate
    className="pl-2 font-bold text-black dark:text-white"
    words={["Work", "Create",'Improve']}
    />
      
      
    </div>
    <p className="text-3xl font-bold">Together.</p>
   </div>
   <div>
    
   <div className='flex flex-row items-center space-x-2 max-w-screen-sm'>
    <div className='bg-[#f9f9f9] rounded-full w-4 h-4 animation-pulse'></div>
    <div className=''><p>Available for new opportunities</p></div>
  </div>

  <div className=' grid grid-cols-2 gap-6 p-2 lg:col-start-2'>
  <div className='col-span-1'>
      <input type="text" name="name" id="" className='rounded-md bg-[#f9f9f9]  w-full h-10 p-1 border-transparent border outline outline-transparent text-black' placeholder='Your name'  />
    </div>
    <div className='col-span-1'>
      <input type="email" name="email" id="" className='rounded-md bg-[#f9f9f9] col-span-1 w-full h-10 p-1 border-transparent border outline outline-transparent text-black' placeholder='Your Email' />
    </div>

    <div className='col-span-2 border-none outline-none outline-transparent'>
      <textarea  name="message" id="" className='rounded-xl bg-[#f9f9f9] border-transparent border outline outline-transparent w-full h-44  text-black p-1'></textarea>
    </div>
    <div className='col-span-2 border-none'>
      <button type='submit' className='bg-[#f9f9f9] text-black w-full h-10 rounded-lg'> Send</button>
    </div>
    
    
  </div>

   </div>
    </div>
    {/* 
     <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={["Word", "Rotate"]}
    /> */}
        </section>
    </main>


  );
}
