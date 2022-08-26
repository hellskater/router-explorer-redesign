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

const getGenericMetaData = async () => {
  const res = await axios
    .get("https://api.stats.routerprotocol.com/api/generic/getMetaDataGeneric")
    .then((res) => res.data);

  return res.filter((val) => val.label !== "Active Validators");
};

export const useGetGenericMetaData = () => {
  return useQuery(["genericMetaData"], () => getGenericMetaData());
};

const getFees = async (params) => {
  const res = await axios
    .get("https://api.stats.routerprotocol.com/api/fee", { params })
    .then((res) => res.data);

  return res;
};

export const useGetFees = (parameters) => {
  return useQuery(["txFees"], () => getFees(parameters), {
    enabled: false,
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
};
