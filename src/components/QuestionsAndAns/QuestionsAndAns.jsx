import "./QuestionsAndAns.css";

const QuestionsAndAns = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 mb-20 mt-20 grid grid-cols-12 gap-6">
      <div className="flex flex-col items-center lg:items-start col-span-12 lg:col-span-4">
        <h3 className="text-4xl w-[328px] font-semibold mb-5 text-center lg:text-left">
          Frequently asked questions
        </h3>
        <p className="text-blue-600">Contact us for more info</p>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <div className="QA collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer international shipping?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer international shipping to many countries. You can
              check if we ship to your location during the checkout process.
            </p>
          </div>
        </div>
        <div className="QA collapse collapse-arrow border-b-stone-400">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you have a size guide?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we provide a detailed size guide on each product page to help
              you find the right fit. If you have further questions, our
              customer support can assist you.
            </p>
          </div>
        </div>
        <div className="QA collapse collapse-arrow border-b-stone-400">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How often do you release new collections?
          </div>
          <div className="collapse-content">
            <p>
              We release new collections regularly to keep our inventory fresh
              and up-to-date with the latest fashion trends. Check our website
              for the latest arrivals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAndAns;
