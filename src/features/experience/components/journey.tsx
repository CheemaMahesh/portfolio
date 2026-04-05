import { DetailsCard } from "./details-card";
import { journeyData } from "../utils/data";

export const Journey = () => {
  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">My Journey</h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          {journeyData.map((item, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div className="hidden md:flex w-full">
                {index % 2 === 0 ? (
                  <>
                    <div className="w-6/12">
                      <DetailsCard {...item} isLeft={true} index={index} />
                    </div>
                    <div className="w-2/12"></div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className="w-2/12"></div>
                    <div className="w-6/12">
                      <DetailsCard {...item} isLeft={false} index={index} />
                    </div>
                  </>
                )}
              </div>

              <div className="md:hidden w-full ml-8">
                <DetailsCard {...item} isLeft={true} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
