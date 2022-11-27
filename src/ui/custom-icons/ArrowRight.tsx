const ArrowRight = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="8"
      height="14"
      className={className}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.23862 13.414L7.55962 7.96087C8.01412 7.49508 8.00476 6.73191 7.53897 6.2774L2.08582 0.956406C1.62003 0.501904 0.85686 0.511266 0.402358 0.977056C-0.0521442 1.44285 -0.0427833 2.20602 0.423007 2.66052L5.0241 7.15011L0.534513 11.7512C0.0800105 12.217 0.0893711 12.9802 0.555161 13.4347C1.02095 13.8892 1.78412 13.8798 2.23862 13.414Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowRight;
