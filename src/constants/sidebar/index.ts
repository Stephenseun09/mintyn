import {
  AllOrdersIcon,
  AllPaymentsIcon,
  OverviewIcon,
  PendingOrdersIcon,
  ProfileIcon,
  ReconciledOrdersIcon,
  ReconciledPaymentsIcon,
  SettlementsIcon,
  UnreconciledPaymentsIcon,
} from "@/ui/custom-icons";

const Lists = [
  {
    heading: "Main",
    items: [
      {
        name: "Overview",
        link: "#",
        Icon: OverviewIcon,
      },
    ],
  },
  {
    heading: "Payments",
    items: [
      {
        name: "All Payments",
        link: "#",
        Icon: AllPaymentsIcon,
      },
      {
        name: "Reconcilled Payments",
        link: "#",
        Icon: ReconciledPaymentsIcon,
      },
      {
        name: "Un-Reconcilled Payments",
        link: "#",
        Icon: UnreconciledPaymentsIcon,
      },
      {
        name: "Manual Settlement",
        link: "#",
        Icon: SettlementsIcon,
      },
    ],
  },

  {
    heading: "Orders",
    items: [
      {
        name: "All Orders",
        link: "#",
        Icon: AllOrdersIcon,
      },
      {
        name: "Pending Orders",
        link: "#",
        Icon: PendingOrdersIcon,
      },
      {
        name: "Reconcilled Orders",
        link: "#",
        Icon: ReconciledOrdersIcon,
      },
    ],
  },
  {
    items: [
      {
        name: "Merchant Profile",
        link: "#",
        Icon: ProfileIcon,
      },
    ],
  },
];

export { Lists };
