import React from "react";

interface PageHeaderProps {
  backgroundImage: string;
  heading: string;
  subtext: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  backgroundImage,
  heading,
  subtext,
}) => {
  return (
    <div
      className="relative lg:h-[690px] 2xl:h-[810px] bg-cover bg-center bg-no-repeat bg-blend-multiply text-white p"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255), rgba(72,120,153), rgba(2,20,33)), url(${backgroundImage})`,
      }}
    >
      <div className="relative z-10 flex flex-row md:pt-[450px] 2xl:pt-[520px]  justify-between h-full container">
        <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold lg:max-w-[420px]">
          {heading}
        </h4>
        <p className="text-lg md:text-xl max-w-2xl leading-loose">{subtext}</p>
      </div>
    </div>
  );
};

export default PageHeader;
