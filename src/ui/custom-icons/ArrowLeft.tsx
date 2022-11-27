const ArrowLeft = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
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
        d="M5.76138 13.414L0.44038 7.96087C-0.0141216 7.49508 -0.00476179 6.73191 0.461029 6.2774L5.91418 0.956406C6.37997 0.501904 7.14314 0.511266 7.59764 0.977056C8.05214 1.44285 8.04278 2.20602 7.57699 2.66052L2.9759 7.15011L7.46549 11.7512C7.91999 12.217 7.91063 12.9802 7.44484 13.4347C6.97905 13.8892 6.21588 13.8798 5.76138 13.414Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowLeft;
