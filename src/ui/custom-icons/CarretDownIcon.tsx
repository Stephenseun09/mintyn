const CarretDownIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 1L4.5 5L1 1" stroke="currentColor" />
    </svg>
  );
};

export default CarretDownIcon;
