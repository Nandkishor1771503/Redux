import React from "react";
import { Link } from "react-router-dom";

function Shoes() {
  const imgStyle = "rounded-xl";

  return (
    <>
      <div className="flex justify-center items-center gap-[5%] m-16 h-[50vh]">
        <Link to="/nike">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.RV17M7nLyo-_fZHH48mt1AHaFi&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
        </Link>

        <Link to="/puma">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.l4Nyx4xzMoRMNEE3PPOhiQHaEP&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
        </Link>

        <Link to="/adidas">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.NofjyUf3F6wag8QncrKNUgHaEK&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
        </Link>

        <Link to="/jimmyChoo">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.DgND0_vA3-jrU2M3DJdnSgAAAA&pid=Api&P=0&h=180"
            alt=""
            className={imgStyle}
          />
        </Link>
      </div>
    </>
  );
}

export default Shoes;
