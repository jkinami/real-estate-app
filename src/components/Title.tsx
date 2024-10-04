import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <div className="mx-[40px] mt-[40px] h-[56px] w-auto border-b border-white border-opacity-20 text-white flex">
      <div className="text-3xl font-normal w-[180px]">
        <FontAwesomeIcon
          icon={fas.faSquarePollVertical}
          style={{ color: "#ffffff" }}
        />
        <span className="ml-2">取引価格</span>
      </div>
      <span className="ml-1 mt-[19px] text-sm">※取引面積1㎡あたり</span>
    </div>
  );
};

export default Title;
