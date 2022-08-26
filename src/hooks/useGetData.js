// Query to fetch the NFT details

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getMetaData = async (url) => {
  const res = await axios
    .get("https://api.stats.routerprotocol.com/api/deposits/getMetaData")
    .then((res) => res.data);

  return res.filter((val) => val.label !== "Active Validators");
};

export const useGetMetaData = () => {
  return useQuery(["metaData"], () => getMetaData());
};

const getGenericMetaData = async (url) => {
  const res = await axios
    .get("https://api.stats.routerprotocol.com/api/generic/getMetaDataGeneric")
    .then((res) => res.data);

  return res.filter((val) => val.label !== "Active Validators");
};

export const useGetGenericMetaData = () => {
  return useQuery(["genericMetaData"], () => getGenericMetaData());
};
