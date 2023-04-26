import React from "react";

export const Stats = ({ item }) => {
  return (
    <div className="pokemon-stat">
      <span className="stat-name">
        <b>{item.name}</b>
        {item.stat && <b>{item.stat.name}: </b>}
      </span>
      <span>{item.base_stat}</span>
    </div>
  );
};
