import logoHorizontal from "@/assets/logo-horizontal.svg";
import logoIcon from "@/assets/logo-icon.svg";
import logoVertical from "@/assets/logo-vertical.svg";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "icon" | "vertical";
}

const sources = {
  horizontal: logoHorizontal,
  icon: logoIcon,
  vertical: logoVertical,
};

export const Logo = ({ className = "", variant = "horizontal" }: LogoProps) => (
  <img src={sources[variant]} alt="Danolo Designs" className={className} />
);
