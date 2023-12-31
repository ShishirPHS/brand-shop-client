const WhyChooseUs = () => {
  return (
    <div className="bg-[#cecccc]">
      <div className="container mx-auto my-36 py-32 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <div className="h-full mb-12">
            <h4 className="text-6xl font-bold">Why Choose Us</h4>
            <h5 className="my-8 text-2xl">Exclusive Collections</h5>
            <p className="max-w-[500px]">
              Explore a world of fashion thats as unique as you are. Our design
              team is dedicated to creating distinctive collections that reflect
              the latest trends while maintaining an air of exclusivity. Each
              piece is carefully crafted, ensuring that you are investing in
              fashion that not only turns heads but also tells a story.
            </p>
          </div>
          <div data-aos="fade-up-right">
            <img
              className="w-[300px] h-[500px] object-cover rounded-md"
              src={
                "https://i.ibb.co/CKNxfJ9/Tie-a-scarf-for-men-Creating-a-stylish-loop-for-men.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
