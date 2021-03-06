import React from "react";
import Title from "../Title";
import ReservedCarList from "./ReservedCarList";
import Extras from "./Extras";
import TotalPrice from "./TotalPrice";

import { ContextConsumer } from "../../context";

export default function Reservation() {
  return (
    <React.Fragment>
      <ContextConsumer>
        {contextValue => {
          const { cart } = contextValue;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title name="your" title="cart" />
                <ReservedCarList contextValueProps={contextValue} />
                <TotalPrice totalPriceProps={contextValue} />
                <Extras />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <Title name="Empty" title="cart" />
              </React.Fragment>
            );
          }
        }}
      </ContextConsumer>
    </React.Fragment>
  );
}
