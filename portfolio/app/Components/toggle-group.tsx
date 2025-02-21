"use client"

import * as React from "react"
//Provides accisible toggle groups
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
//A utility function that helps with conditional
//  class names
import { cn } from "@/lib/utils"

/* 
ToggleGroup and ToggleGroupItem ccreate a toggle group where multiple buttons can be grouped together

React.forwardRef
-This allows the component to recive a ref from the perent component
-Usefull when working with a ficus managment or dom elements directly


React.Element<typeof ToggleGroupPrimitive.Root
-extracts the type of the element returned by togglegroup primitive root

-This ensured that ref correctly  refers to a valid dom element 

-React .componentwithout ref 
-extracts all valid props from togglegrroupprimitiveroot
exluding ref

{...props}
-passes all other props to togglegroup primitive.root

cn()
-This function is used to merge multiple classnames avaoiding duplication or undefined values
*/

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex h-fit w-fit items-center justify-center rounded-md bg-muted p-2 text-muted-foreground",
      className,
    )}
    {...props}
  />
))
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-green-400 data-[state=on]:text-white data-[state=on]:shadow-sm",
      className,
    )}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Item>
))
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }

