const Blackhole = () => {
  return (
    <section className="absolute top-32 min-w-[1000px] left-1/2 translate-x-[-50%]">
      <div className="pointer-events-none">
        <video
          className="h-auto w-full"
          src="blackhole.webm"
          preload="false"
          muted
          playsInline
          loop
          autoPlay
        />
      </div>
    </section>
  );
};

export default Blackhole;
