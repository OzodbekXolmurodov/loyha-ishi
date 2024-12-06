import React from "react";
import { useParams } from "react-router-dom";
import { useGetGenerQuery } from "../../redux/api/ganer-api";

const Dtail = () => {
  const { id } = useParams();
  const { data } = useGetGenerQuery(id);
  console.log(data);

  return <></>;
};

export default Dtail;
