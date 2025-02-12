import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen p-5 md:p-0 flex flex-col justify-center items-center">
      <main className="max-w-[350px] md:max-w-[750px] flex flex-col md:flex-row overflow-hidden rounded-xl shadow-xl bg-white">
        <div className="h-[225px] sm:h-[300px] md:w-[850px]">
          <Image
            src="/images/drawers.jpg"
            alt=""
            height={800}
            width={800}
            className="h-full w-full object-cover object-top md:object-left">
          </Image>
        </div>
        <div className="p-8 space-y-4 flex flex-col justify-center">
          <h1 className="pt-2 md:pt-0 text-base md:text-xl font-bold">
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </h1>
          <p className="text-custDesaturatedDarkBlue">
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I&#39;ve got some simple tips to help you make any room feel complete.
          </p>
          <div className="flex flex-row pt-3 md:pt-0 space-x-4">
            <Image
              src="/images/avatar-michelle.jpg"
              alt=""
              height={50}
              width={50}
              className="rounded-full">
            </Image>
            <div className="flex flex-col space-y-1 justify-center">
              <h2 className="font-bold">
                Michelle Appleton
              </h2>
              <p className="text-custGrayishBlue">
                28 Jun 2020
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="m-4 text-custGrayishBlue">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/joanneast" target="_blank">Joan</a>.
      </footer>
    </div>
  );
}
