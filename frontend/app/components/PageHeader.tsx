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
      className="relative lg:min-h-[690px] 2xl:min-h-[810px] min-h-[700px] h-[calc(100dvh_-_64px)] bg-cover bg-center bg-no-repeat bg-blend-multiply text-white p"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255), rgba(72,120,153), rgba(2,20,33)), url(${backgroundImage})`,
      }}
    >
      <div className="relative z-10 flex flex-col lg:flex-row md:pt-[450px] 2xl:pt-[520px] md:pb-20 lg:pb-0 pb-16  justify-end  lg:justify-between h-full container">
        <h4 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold lg:max-w-[420px] max-w-60">
          {heading}
        </h4>
        <p className="text-base md:text-xl max-w-2xl leading-relaxed lg:leading-loose lg:mt-0 mt-6">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
