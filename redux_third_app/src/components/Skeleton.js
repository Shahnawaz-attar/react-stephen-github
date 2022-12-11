import classNames from "classnames";

const Skeleton = ({ times, ClassName }) => {
  const outerClassName = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    ClassName
  );
  const innerClassName = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  // old way
  //   const boxes = [];

  //   for (let i = 0; i < times; i++) {
  //     boxes.push(<div key={i} />);
  //   }

  // fancy way

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassName}>
          <div className={innerClassName} />
        </div>
      );
    });

  return boxes;
};

export default Skeleton;
