const CrossIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="10"
      height="10"
      fill="none"
      aria-hidden="true"
      className={className}
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0L10 10M10 0L0 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export default CrossIcon;
