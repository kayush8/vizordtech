import {
  SVGArrowRight,
  SVGReadMoreText,
  SVGScrollDownIcon,
} from "@components/utility/Icons";

const ReadMoreBtn: React.FC = () => {
  return (
    <div className="read_more">
      <div className="circle">
        <SVGReadMoreText />
        <SVGScrollDownIcon />
      </div>
      <SVGArrowRight />
    </div>
  );
};

export default ReadMoreBtn;
