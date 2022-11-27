const NotificationIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.2913 14.8262C11.2913 15.4027 11.063 15.9557 10.6567 16.3634C10.2503 16.771 9.69925 17.0001 9.12462 17.0001C8.54999 17.0001 7.9989 16.771 7.59257 16.3634C7.18625 15.9557 6.95798 15.4027 6.95798 14.8262"
        stroke="#647787"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 12.6522H17.2498"
        stroke="#647787"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1662 12.6522H16.7079C15.5108 12.6522 13.9996 11.6794 13.9996 10.4783V5.58702C13.9996 4.28977 13.486 3.04566 12.5717 2.12836C11.6575 1.21107 10.4175 0.69574 9.12463 0.69574C7.83171 0.69574 6.59175 1.21107 5.67752 2.12836C4.76329 3.04566 4.24968 4.28977 4.24968 5.58702V10.4783C4.24968 11.0549 4.02141 11.6078 3.61509 12.0155C3.20876 12.4232 2.65767 12.6522 2.08304 12.6522"
        stroke="#647787"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NotificationIcon;
