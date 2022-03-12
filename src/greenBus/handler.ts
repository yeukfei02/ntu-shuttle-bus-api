import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import { getGreenBus } from "../../api/getGreenBus";

export const greenBus: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "greenBus",
    }),
  };

  const greenBus = await getGreenBus();
  if (greenBus) {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "greenBus",
        greenBus: greenBus,
      }),
    };
  }

  return response;
};
