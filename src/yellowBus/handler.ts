import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import { getYellowBus } from "../../api/getYellowBus";

export const yellowBus: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "yellowBus",
    }),
  };

  const yellowBus = await getYellowBus();
  if (yellowBus) {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "yellowBus",
        yellowBus: yellowBus,
      }),
    };
  }

  return response;
};
