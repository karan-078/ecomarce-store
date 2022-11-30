import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Service = () => {
  return (
    <Wrapper>
      <div className=" grid grid-three-column">
        <div className="service-1">
          <div>
            <TbTruckDelivery className="icon" />
            <p>free and fast delivery</p>
          </div>
        </div>

        <div className="service-2">
          <div className="colum-1">
            <MdSecurity className="icon" />
            <p>non Contact Shipping</p>
          </div>
          <div className="colum-2">
            <GiReceiveMoney className="icon" />
            <p>Mony-back Guaranteed</p>
          </div>
        </div>

        <div className="service-3">
          <RiSecurePaymentLine className="icon" />
          <p>Super secure Payment system</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
   {
    display: flex;
    justify-content: center;
    align-center: center;

    .grid {
      width: 120rem;
      place-items: center;
    }

    .service-1,
    .service-2,
    .service-3 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #e2e8ec;
      height: fit-content;
      min-height: 14rem;
      width: 25rem;
      border-radius: 3px;
      text-align:center;
    }

    .service-2 {
      padding: 2rem 0 2rem 0;
    }

    .colum-1,
    .colum-2 {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
  
    }

    .icon {
      width: 4rem;
      height: 4rem;
      background:#fff;
      border-radius:50%;
      color:#2874f0;
    }
  }
`;
export default Service;
