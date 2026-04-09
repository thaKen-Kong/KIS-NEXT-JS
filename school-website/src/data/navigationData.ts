


export const navigationItems = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "ABOUT",
    path: "/about",
    childrens: [
      { label: "HISTORY", path: "history", element: "" },
      { label: "MISSION AND VISION", path: "mission-vision", element: "" },
      { label: "HYMN", path: "hymn", element: "" },
      { label: "CORE VALUES", path: "core-values", element: "" },
      { label: "ADMINISTRATIONS", path: "administration", element: "" },
      { label: "FACULTY AND STAFFS", path: "faculty-staffs", element: "" },
    ],
  },
  {
    label: "WHAT'S NEW?",
    path: "/what-is-new",
    childrens: [
      { label: "NEWS", path: "/news", element: "" },
      { label: "UPCOMING EVENTS", path: "/upcoming-events", element: "" },
      { label: "ANNOUNCEMENTS", path: "/announcements", element: "" },
    ],
  },
  {
    label: "LIFE@KIS",
    path: "/life-at-kis",
    childrens: [
      { label: "JHS", path: "jhs", element: "" },
      { label: "SHS", path: "shs", element: "" },
      { label: "STUDENT ORGANIZATIONS", path: "student-org", element: "" },
      { label: "FACILITIES", path: "facilities", element: "" },
    ],
  },
  {
    label: "ADMISSION",
    path: "/admission",
    childrens: [
      { label: "WHY CHOOSE US?", path: "/why-choose-us", element: "" },
      { label: "REQUIREMENTS", path: "/requirements", element: "" },
      { label: "ENROLLMENT", path: "/enrollment", element: "" },
    ],
  },
  {
    label: "CONTACTS",
    path: "/contact-us",
    childrens: [
      { label: "", path: "", element: "" },
    ],
  },
]
