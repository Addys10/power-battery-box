import { type ElementType, type ComponentPropsWithoutRef } from "react";

const VARIANT_MAP = {
  h1: {
    tag: "h1" as const,
    className: "font-primary text-5xl font-bold leading-tight",
  },
  h2: {
    tag: "h2" as const,
    className: "font-primary text-4xl font-bold leading-tight",
  },
  h3: {
    tag: "h3" as const,
    className: "font-primary text-3xl font-semibold leading-snug",
  },
  h4: {
    tag: "h4" as const,
    className: "font-primary text-2xl font-semibold leading-snug",
  },
  h5: {
    tag: "h5" as const,
    className: "font-primary text-xl font-medium leading-normal",
  },
  h6: {
    tag: "h6" as const,
    className: "font-primary text-lg font-medium leading-normal",
  },
  subtitle1: {
    tag: "p" as const,
    className: "font-secondary text-lg font-medium leading-relaxed",
  },
  subtitle2: {
    tag: "p" as const,
    className: "font-secondary text-base font-medium leading-relaxed",
  },
  body: {
    tag: "p" as const,
    className: "font-secondary text-base font-normal leading-relaxed",
  },
  "body-sm": {
    tag: "p" as const,
    className: "font-secondary text-sm font-normal leading-relaxed",
  },
  caption: {
    tag: "span" as const,
    className: "font-secondary text-xs font-normal leading-normal",
  },
  overline: {
    tag: "span" as const,
    className:
      "font-secondary text-xs font-semibold uppercase tracking-widest leading-normal",
  },
} as const;

type Variant = keyof typeof VARIANT_MAP;

type Weight = "thin" | "regular" | "medium" | "semibold" | "bold";

type Font = "primary" | "secondary";

const WEIGHT_CLASS: Record<Weight, string> = {
  thin: "font-thin",
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const FONT_CLASS: Record<Font, string> = {
  primary: "font-primary",
  secondary: "font-secondary",
};

type TypographyProps<T extends ElementType = "p"> = {
  variant?: Variant;
  as?: T;
  weight?: Weight;
  font?: Font;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "className" | "children">;

export function Typography<T extends ElementType = "p">({
  variant = "body",
  as,
  weight,
  font,
  className = "",
  children,
  ...rest
}: TypographyProps<T>) {
  const config = VARIANT_MAP[variant];
  const Component = (as ?? config.tag) as ElementType;

  const classes = [
    config.className,
    weight ? WEIGHT_CLASS[weight] : "",
    font ? FONT_CLASS[font] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
