import { SparklesCore } from "./sparkles";

const SparklesPreview = () => {
  return (
    <div className="min-h-[40rem] h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="relative top-48">
        <h1 className="text-3xl md:text-5xl bg-gradient-to-b from-white via-white to-white bg-opacity-70 bg-clip-text text-transparent block fill-transparent z-[5]  py-2 text-center">
          Organise better with {process.env.NEXT_PUBLIC_APP_TITLE}
        </h1>
        <p className="text-[#efedfdb3] text-lg text-center m-0 p-0">
          Never miss a note, idea or connection
        </p>
      </div>
      <div className="relative w-full h-full">
        {/* Gradients */}
        {/* originals */}
        {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

        {/* modified */}
        {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px " />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" /> */}

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default SparklesPreview;
