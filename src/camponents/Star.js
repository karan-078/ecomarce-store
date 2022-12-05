import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Star = ({Stars, reviews}) => {

    const Ratestr = Array.from({length:5},(element, index)=>{
        let number= index+0.5;

        return (
            <span key={index}>
                    {Stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : Stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
            </span>
        )

    })
  return (
    <div className="main_star_style">
         <div className="icon-style">
        {Ratestr}
        <p>({reviews} customer reviews)</p>
      </div>
    </div>
  )
}

export default Star
