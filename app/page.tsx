import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/menu-solid.svg"
        alt="Icon for side menu"
        width={42}
        height={41}
        className="absolute top-0 right-0 m-2"
      />
    </>
  );
}
