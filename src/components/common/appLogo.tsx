import Image from "next/image";

const AppLogo = () => {
  return (
    <div className="flex justify-center items-center gap-2 font-medium">
      <Image
        src={"/img/logo/logo.png"}
        alt="zen agenda logo"
        width={32}
        height={32}
        priority
      />
      <span>ZenAgenda</span>
    </div>
  );
};

export default AppLogo;
