import Image from "next/image";
import NavLinks from "../NavLinks";

export default function Footer() {
  return (
    <footer>
      <div className="flexJustifyLeft pageWidth">
        <Image
          aria-hidden
          src="/circle.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
      </div>
      <NavLinks />
    </footer>
  );
}
