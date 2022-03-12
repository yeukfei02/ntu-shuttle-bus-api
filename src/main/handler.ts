import { APIGatewayEvent, Context, Handler } from "aws-lambda";

export const main: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "ntu-shuttle-bus-api",
    }),
  };
  return response;
};
