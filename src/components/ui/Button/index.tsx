import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Button.module.scss";
import { cn } from "@/lib/utils";

const buttonVariants = cva(styles.button, {
    variants: {
        variant: {
            default: styles.default,
            destructive: styles.destructive,
            outline: styles.outline,
            secondary: styles.secondary,
            ghost: styles.ghost,
            link: styles.link,
            gold: styles.gold,
            "gold-outline": styles["gold-outline"],
            hero: styles.hero,
        },
        size: {
            default: styles["size-default"],
            sm: styles["size-sm"],
            lg: styles["size-lg"],
            xl: styles["size-xl"],
            icon: styles["size-icon"],
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
