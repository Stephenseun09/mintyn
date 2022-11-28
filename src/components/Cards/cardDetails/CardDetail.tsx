type Props = {
  name: string;
  details: {
    name?: string;
    value?: number;
    color?: string;
  }[];
};

const CardDetail = ({ name, details }: Props) => {
  return (
    <div className="bg-white shadow-xl p-4 space-y-3 w-full rounded grow">
      <h5 className="text-sm text-[#262626] font-semibold">{name}</h5>
      <div className="flex h-1 rounded-full overflow-hidden">
        <div
          className=""
          style={{
            width: `${details[1].value}%`,
            backgroundColor: details[1].color,
          }}
        />
        <div
          className=""
          style={{
            width: `${details[0].value}%`,
            backgroundColor: details[0].color,
          }}
        />
      </div>
      {Object.values(details).map((item: any, index: any) => {
        return (
          <p key={index} className="text-sm text-[#262626]">
            <span className="">{item.name} :</span>{" "}
            <span
              className=" font-semibold"
              style={{
                color: item.color,
              }}
            >
              {item.value}
            </span>
          </p>
        );
      })}
    </div>
  );
};

export default CardDetail;
