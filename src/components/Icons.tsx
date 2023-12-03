import { LucideProps } from "lucide-react";

type LogoProps = {
  className?: string;
}

export const Icons = {
  logo: ({ className }: LogoProps) => (
    <img src="/carmelschoollogo.png" className={className} alt="" />
  ),
};
