import agriculture from '../../../assets/Heading 2 → Agriculture.png';
import farming from '../../../assets/Heading 2 → Farming.png';
import organic from '../../../assets/Heading 2 → Organic.png';
import farmStar from '../../../assets/farmStar.png';

export const FarmFields = () => {
  return (
    <div className="container mx-auto grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-10 px-4">
      <div className="flex items-center gap-2 justify-center">
        <img className="w-9 h-8" src={farmStar} alt="Farm Star" />
        <img className="w-64 sm:w-68 md:w-72 lg:w-44" src={agriculture} alt="Agriculture" />
      </div>
      <div className="flex items-center gap-2 justify-center">
        <img className="w-9 h-8" src={farmStar} alt="Farm Star" />
        <img className="w-60 sm:w-68 md:w-56 lg:w-32" src={farming} alt="Farming" />
      </div>
      <div className="flex items-center gap-2 justify-center">
        <img className="w-9 h-8" src={farmStar} alt="Farm Star" />
        <img className="w-60 sm:w-68 md:w-56 lg:w-32" src={organic} alt="Organic" />
      </div>
      <div className="flex items-center gap-2 justify-center">
        <img className="w-9 h-8" src={farmStar} alt="Farm Star" />
        <img className="w-64 sm:w-68 md:w-72 lg:w-44" src={agriculture} alt="Agriculture" />
      </div>
    </div>
  );
};
