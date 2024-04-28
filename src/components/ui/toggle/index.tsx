"use client";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import classNames from "classnames";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import styles from "./styles.module.scss";

export const Toggle = forwardRef<
  ElementRef<typeof TogglePrimitive.Root>,
  ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
  <TogglePrimitive.Root
    className={classNames(styles.toggle, className)}
    ref={ref}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;
