import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import { getRedBus } from "../../api/getRedBus";

export const redBus: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "redBus",
    }),
  };

  const redBus = await getRedBus();
  if (redBus) {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "redBus",
        redBus: redBus,
      }),
    };
  }

  return response;
};
