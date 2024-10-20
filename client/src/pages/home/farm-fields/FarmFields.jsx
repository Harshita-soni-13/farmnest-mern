import agriculture from '../../../assets/Heading 2 → Agriculture.png';
import farming from '../../../assets/Heading 2 → Farming.png';
import orgnaic from '../../../assets/Heading 2 → Organic.png';
import farmStar from '../../../assets/farmStar.png';

export const FarmFields = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-10">
      <div className="flex items-center gap-2">
        <img className="w-9 h-8" src={farmStar} alt="Farm Star" />
        <img className="w-full md:w-72 lg:w-44" src={agriculture} alt="Agriculture" />
      </div>
      <div className="flex items-center gap-2">
        <img className="w-9 h-8" src={farmStar} alt="Farm Star" />
        <img className="w-full md:w-56 lg:w-32" src={farming} alt="Farming" />
      </div>
      <div className="flex items-center gap-2">
        <img className="w-9 h-8" src={farmStar} alt="Farm Star" />
        <img className="w-full md:w-56 lg:w-32" src={orgnaic} alt="Organic" />
      </div>
      <div className="flex items-center gap-2">
        <img className="w-9 h-8" src={farmStar} alt="Farm Star" />
        <img className="w-full md:w-72 lg:w-44" src={agriculture} alt="Agriculture" />
      </div>
    </div>
  );
};
