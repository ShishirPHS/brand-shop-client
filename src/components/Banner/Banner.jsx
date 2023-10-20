const Banner = () => {
  return (
    <div className="mb-28">
      <div className="bg-[url('https://i.ibb.co/hgxZ72h/banner-bg.webp')] bg-cover bg-center">
        <div className="bg-[#fff] opacity-80">
          <div className="container mx-auto  px-4 lg:px-0 flex flex-col items-center justify-center pt-32 pb-52">
            <h1 className="text-4xl lg:text-6xl max-w-[670px] font-bold text-center text-black leading-[50px] lg:leading-[90px]">
              Elevate Your Style with StyleCanvas
            </h1>
            <p className="text-lg lg:text-xl text-center max-w-[900px] mt-8 font-medium">
              Welcome to StyleCanvas, your one-stop destination for fashion and
              apparel that redefines your wardrobe. Dive into a world of endless
              possibilities, where style meets creativity, and fashion knows no
              bounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
