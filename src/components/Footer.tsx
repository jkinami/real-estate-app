import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontAwesome";

const Footer = () => {
  return (
    <div className="text-sm font-normal text-white px-[32px] border-t border-white border-opacity-20 h-[50px] w-full bg-black bg-opacity-80 flex flex-wrap content-center justify-between">
      <div className="flex gap-[24px]">
        <div>
          <span className="mr-2">利用規約</span>
          <FontAwesomeIcon
            icon="fa-regular fa-window-restore"
            style={{ color: "#65676c" }}
          />
        </div>
        <div>
          <span className="mr-2">プライバシーポリシー</span>
          <FontAwesomeIcon
            icon="fa-regular fa-window-restore"
            style={{ color: "#65676c" }}
          />
        </div>
      </div>
      <div>
        <span>© 2023 Landit Inc.</span>
      </div>
    </div>
  );
};

export default Footer;
