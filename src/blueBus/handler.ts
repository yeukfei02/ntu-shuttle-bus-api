import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import { getBlueBus } from "../../api/getBlueBus";

export const blueBus: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "blueBus",
    }),
  };

  const blueBus = await getBlueBus();
  if (blueBus) {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "blueBus",
        blueBus: blueBus,
      }),
    };
  }

  return response;
};
