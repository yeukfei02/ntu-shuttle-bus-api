import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import { getBrownBus } from "../../api/getBrownBus";

export const brownBus: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "brownBus",
    }),
  };

  const brownBus = await getBrownBus();
  if (brownBus) {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "brownBus",
        brownBus: brownBus,
      }),
    };
  }

  return response;
};
