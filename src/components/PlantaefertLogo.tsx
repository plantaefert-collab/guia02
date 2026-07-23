import brandLogoDark from "@/assets/brand-logo-plantaefert.png";
import brandLogoLight from "@/assets/logo-plantaefert-light.png";

interface PlantaefertLogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function PlantaefertLogo({
  variant = "dark",
  className = "h-10 md:h-12 w-auto object-contain",
}: PlantaefertLogoProps) {
  const logoSrc = variant === "light" ? brandLogoLight : brandLogoDark;

  return (
    <img
      src={logoSrc}
      alt="PlantaeFert — Nutrição Vegetal"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
