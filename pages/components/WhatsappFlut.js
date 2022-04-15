import Link from "next/link";
import Image from "next/image";
import ImgFlut from "../../img/icons/whatsappFlut.png";
import { Whatsapp } from "../../styles/styles";

export default function WhatsappFt() {
  return (
    <Whatsapp>
      <Link href="#">
        <a target="_blank">
          <Image src={ImgFlut} alt="Whatsapp Flutuante" />
        </a>
      </Link>
    </Whatsapp>
  );
}
