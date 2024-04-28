"use client";
import * as SliderPrimitive from "@radix-ui/react-slider";
import classNames from "classnames";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import styles from "./styles.module.scss";

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={classNames(styles.slider, className)}
    {...props}
  >
    <SliderPrimitive.Track className={styles.track}>
      <SliderPrimitive.Range className={styles.range} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={styles.thumb} />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;
