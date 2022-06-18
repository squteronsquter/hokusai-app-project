import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Hokusai App</h1>
      <Image
        src="/images/arts/wind.png"
        width="800"
        height="500"
        layout="responsive"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        dolorum rerum aut quis sit sunt maiores tempore ullam modi, repellat
        dolorem corporis sint laudantium veniam vel? Quis sint aliquam eligendi.
      </p>
    </>
  );
}
