import axios from "axios";
import { getBusRootUrl } from "../helper/helper";

const rootUrl = getBusRootUrl();

const redBusId = "44478";

export const getRedBus = async (): Promise<any> => {
  let result = {};

  const response = await axios.get(`${rootUrl}/${redBusId}`, {
    params: {
      format: "json",
    },
  });
  if (response.status == 200) {
    const responseData = response.data;
    if (responseData) {
      let vehicleList = [];
      if (responseData.vehicles) {
        vehicleList = responseData.vehicles.map((vehicle: any) => {
          const obj = {
            latitude: vehicle.lat,
            longitude: vehicle.lon,
          };
          return obj;
        });
      }

      const obj = {
        id: responseData.id,
        name: responseData.name,
        routeName: responseData.routename,
        vehicles: vehicleList,
      };
      result = obj;
    }
  }

  return result;
};
