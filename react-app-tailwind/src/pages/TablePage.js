import React from "react";
// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-600", score: 1 },
    { name: "Apple", color: "bg-red-600", score: 2 },
    { name: "Banana", color: "bg-yellow-600", score: 3 },
    { name: "Water Melon", color: "bg-green-600", score: 4 },
    { name: "Annar", color: "bg-red-800", score: 5 },
  ];

  const config = [
    {
      label: "name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },

    {
      label: "color",
      render: (fruit) => <div className={`p-3 w-2 ${fruit.color} rounded`} />,
    },

    {
      label: "score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "MRP",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
