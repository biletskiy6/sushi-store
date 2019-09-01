import React from "react";
import { SushiServiceConsumer } from "../sushi-service-context";
const withSushiService = Wrapped => props => {
  return (
    <SushiServiceConsumer>
      {value => {
        return <Wrapped {...props} sushiService={value} />;
      }}
    </SushiServiceConsumer>
  );
};

export default withSushiService;
