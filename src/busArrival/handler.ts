import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import { getBusArrival } from "../../api/getBusArrival";

export const busArrival: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "bus-arrival",
    }),
  };

  if (event.queryStringParameters) {
    const busStopId = event.queryStringParameters.busStopId;
    if (busStopId) {
      const busArrival = await getBusArrival(busStopId);
      if (busArrival) {
        response = {
          statusCode: 200,
          body: JSON.stringify({
            message: "bus-arrival",
            busArrival: busArrival,
          }),
        };
      }
    }
  }

  return response;
};
