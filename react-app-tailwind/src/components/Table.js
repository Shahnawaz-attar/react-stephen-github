import React, { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  const renderTbodyRows = data.map((item, i) => {
    const renderCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(item)}
        </td>
      );
    });

    return (
      <tr key={keyFn(item)} className="border-b">
        {renderCells}
      </tr>
    );
  });

  const renderTableLabels = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return (
      <th key={column.label} className="p-3 ">
        {column.label}
      </th>
    );
  });

  return (
    <div className="flex justify-center align-center items-center mt-10 w-full h-full">
      <table border={1} className="table-auto border-spacing-2 ">
        <thead>
          <tr className="border-b-2">{renderTableLabels}</tr>
        </thead>
        <tbody>{renderTbodyRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
