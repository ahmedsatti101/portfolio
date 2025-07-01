import { Carousel } from "./components/Carousel";

export default function Home() {
  return (
    <>
      <p className="text-xl m-5 min-md:text-2xl lg:text-3xl">
        Hello,
        <br />I am Ahmed Mohamed
      </p>
      <p className="text-xl m-5 min-md:text-2xl lg:text-3xl">
        An aspiring software engineer based in Manchester, United Kingdom
      </p>
      <p className="text-xl ml-5 mt-10 min-md:text-2xl lg:text-3xl">
        About me
        <br />
        Lorem ispum Lorem ispum Lorem Lorem ispum Lorem ispum Lorem ispum Lorem
        ispum Lorem ispum Lorem ispum
      </p>
      <Carousel />
    </>
  );
}
