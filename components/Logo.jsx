import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/lws_logo.png"
        alt="Lws"
        width={100}
        height={80}
      />
    </Link>
  );
};

export default Logo;
