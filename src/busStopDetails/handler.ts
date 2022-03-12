import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import { getBusStopDetails } from "../../api/getBusStopDetails";

export const busStopDetails: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "bus-stop-details",
    }),
  };

  const busStopDetails = await getBusStopDetails();
  if (busStopDetails) {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "bus-stop-details",
        busStopDetails: busStopDetails,
      }),
    };
  }

  return response;
};
