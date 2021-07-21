import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import FeedbackRoundedIcon from "@material-ui/icons/FeedbackRounded";
import AssessmentRoundedIcon from "@material-ui/icons/AssessmentRounded";
import HowToRegRoundedIcon from "@material-ui/icons/HowToRegRounded";
import ScheduleIcon from "@material-ui/icons/Schedule";
import GroupIcon from "@material-ui/icons/Group";
import AccessibleIcon from '@material-ui/icons/Accessible';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { v4 as uuidv4 } from "uuid";
import FaceIcon from "@material-ui/icons/Face";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

export const patients = [
  { id: uuidv4(), name: "joy" },
  { id: uuidv4(), name: "Ashu" },
  { id: uuidv4(), name: "Anurag" },
];

export const treatments = [
  { id: uuidv4(), name: "Knee Pain" },
  { id: uuidv4(), name: "Foot Drop" },
  { id: uuidv4(), name: "Neck Pain" },
];

export const headings = [
  "Patient Name",
  "Time",
  "Visit Status",
  "Bill Status",
  "Treatment Name",
  "Consultant Name",
  "Action",
];
export const rows = [
  {
    name: "Joy",
    time: "14:20",
    visitStatus: "Yes",
    billStatus: "Done",
    treatment: "Muscle Pain",
    consultant: "Joy",
    action: "Yes",
  },
  {
    name: "Anurag",
    time: "16:40",
    visitStatus: "Yes",
    billStatus: "Done",
    treatment: "Knee pain",
    consultant: "Yesbir",
    action: "Yes",
  },
  {
    name: "Golu",
    time: "11:30",
    visitStatus: "Yes",
    billStatus: "Done",
    treatment: "Shoulder pain",
    consultant: "Ashu",
    action: "Yes",
  },
  {
    name: "Aditya",
    time: "9:30",
    visitStatus: "Yes",
    billStatus: "Done",
    treatment: "Back pain",
    consultant: "Ayushi",
    action: "Yes",
  },
  {
    name: "Joy",
    time: "14:20",
    visitStatus: "Yes",
    billStatus: "Done",
    treatment: "Muscle Pain",
    consultant: "Joy",
    action: "Yes",
  },
];

export const headings1 = ["Patient Name", "Mobile Number", "Email", "Address"];

export const rows1 = [
  {
    Patient: "Joy",
    Mobile: "5648574125",
    Email: "Joy@yahoo.com",
    Address: "LR road",
  },
  {
    Patient: "Ashu",
    Mobile: "5648574125",
    Email: "Ashu@yahoo.com",
    Address: "LR road",
  },
  {
    Patient: "Yesbir",
    Mobile: "5648574125",
    Email: "Yesbir@yahoo.com",
    Address: "LR road",
  },
];

export const headings2 = [
  "Date",
  "Bill no.",
  "Patients name",
  "Bill amount(INR)",
  "Paid amount(INR)",
  "Due amount(INR)",
  "Payment mode",
  "Status",
  "Action",
];

export const rows2 = [
  {
    Date: "12/05/20",
    Bill: "565696",
    Patients: "Joy",
    BilllINR: "1200",
    Paid: "1000",
    Due: "200",
    Payment: "Online",
    Status: "Done",
    Action: "Yes",
  },
  {
    Date: "14/02/20",
    Bill: "565656",
    Patients: "Ashu",
    BilllINR: "1200",
    Paid: "1200",
    Due: "0.00",
    Payment: "Cash",
    Status: "Done",
    Action: "Yes",
  },
  {
    Date: "15/02/20",
    Bill: "565588",
    Patients: "Yesbir",
    BilllINR: "1200",
    Paid: "1000",
    Due: "200",
    Payment: "Online",
    Status: "Done",
    Action: "Yes",
  },
];

export const headings3 = [
  "Bill no.",
  "Date",
  "Vendor",
  "Subtotal",
  "Tax",
  "Total amount",
];

export const rows3 = [
  {
    Bill: "695636",
    Date: "05/02/20",
    Vendor: "Yesbir",
    Subtotal: "4444",
    Tax: "120",
    Total: "4564",
  },
  {
    Bill: "695675",
    Date: "03/02/20",
    Vendor: "Ashu",
    Subtotal: "5467",
    Tax: "120",
    Total: "4587",
  },
  {
    Bill: "695656",
    Date: "05/07/20",
    Vendor: "Joy",
    Subtotal: "5754",
    Tax: "120",
    Total: "5874",
  },
];

export const todaysData = [
  { heading: "Appointments", data: { count: rows.length } },
  { heading: "Patients", data: { count: rows1.length } },
  { heading: "Income", data: { count: `₹ ${0}` } },
  { heading: "Expenses", data: { count: `₹ ${0}` } },
];
export const walletData = {
  title: "Wallet Data",
  balance: 20000,
  remainingDays: 30,
};

//sidebar data
export const listContent = [


  { heading: "Clinic Today", sub: [] },
  {
    heading: "Appointment Manager",
    sub: [],
  },
  { heading: "Clinic Manager", sub: [] },
  {
    heading: "Account Manager", sub: []
  },
  {
    heading: "Treatment Sessions", sub: []
  },
  {
    heading: "EHR Manager", sub: ["> Patients List", "> Exercise Bulider",  "> Digital Pescription", "> Case Report"]
  },
  {
    heading: "Analytics & Reports", sub: ["> Clinic Health Report", "> Clinic Financial Report", "> Physio Performance Index", "> Marketing Report", "> Clinic Growth Report"]
  },
  { heading: "Notifications", sub: [] },
  { heading: "Feedback", sub: [] },

  { heading: "Settings", sub: [] },

  { heading: "Logout", sub: [] },

];

export const listIcons = [
  // <DashboardRoundedIcon fontSize="large" />,
  <LocalHospitalIcon fontSize="large" />,
  <ScheduleIcon fontSize="large" />,
  <GroupIcon fontSize="large" />,
  <HowToRegRoundedIcon fontSize="large" />,
  <AccessibleIcon fontSize="large" />,
  <AccountBalanceIcon fontSize="large" />,
  <AssessmentRoundedIcon fontSize="large" />,
  <NotificationsNoneIcon fontSize="large" />,
  <FeedbackRoundedIcon fontSize="large" />,
  <SettingsRoundedIcon fontSize="large" />,
  <ExitToAppIcon fontSize="large" />,

];

export const ehrmngmntTableHeading = [
  { id: "image", label: "Image" },
  { id: "date", label: "Date" },
  { id: "patientId", label: "Patient ID" },
  { id: "name", label: "Name" },
  { id: "mobileNumber", label: "Mobile Number" },
  { id: "email", label: "Email" },
  { id: "actions", label: "Actions" },
];

export const feedbackTableHeading = [
  "Date",
  "Patient Name",
  "Score",
  "Recommend",
  "Actions",
];

export const appointmentsTableHeading = [
  { id: "date", label: "Date" },
  { id: "ptName", label: "Patient Name" },
  { id: "time", label: "Time" },
  { id: "visitStatus", label: "Visit Status" },
  { id: "billStatus", label: "Bill Status" },
  { id: "ctName", label: "Consultant Name" },
  { id: "actions", label: "Actions" },
];
export const rescheduledAppointmentsTableHeadings = [
  { id: "date", label: "Date" },
  { id: "ptName", label: "Patient Name" },
  { id: "time", label: "Time" },
  { id: "visitStatus", label: "Visit Status" },
  { id: "billStatus", label: "Bill Status" },
  { id: "ctName", label: "Consultant Name" },
  { id: "actions", label: "Actions" },
];
export const cancelledAppointmentsTableHeadings = [
  { id: "date", label: "Date" },
  { id: "ptName", label: "Patient Name" },
  { id: "time", label: "Time" },
  { id: "visitStatus", label: "Visit Status" },
  { id: "billStatus", label: "Bill Status" },
  { id: "ctName", label: "Consultant Name" },
  { id: "actions", label: "Actions" },
];

export const ehrTableData = [
  {
    image: <FaceIcon />,
    date: "08/02/2021",
    patientId: "C101",
    name: "Aditya",
    mobileNumber: "8744569832",
    email: "amarcool21@gmail.com",
    actions: "actions",
  },
  {
    image: <FaceIcon />,
    date: "08/02/2021",
    patientId: "C101",
    name: "Anish",
    mobileNumber: "8798569832",
    email: "anish21@gmail.com",
    actions: "actions",
  },
  {
    image: <FaceIcon />,
    date: "08/02/2021",
    patientId: "C101",
    name: "Akhil",
    mobileNumber: "8796569832",
    email: "akhil7@gmail.com",
    actions: "actions",
  },
];

export const appointmentsTableData = [
  {
    date: "08/02/2021",
    ptName: "Joy",
    time: "12:00 PM",
    visitStatus: "visited",
    billStatus: "pending",
    ctName: "Ashu",
    actions: "actions",
  },
  {
    date: "08/02/2021",
    ptName: "Ashu",
    time: "12:00 PM",
    visitStatus: "visited",
    billStatus: "pending",
    ctName: "Golu",
    actions: "actions",
  },
  {
    date: "08/02/2021",
    ptName: "Golu",
    time: "12:00 PM",
    visitStatus: "visited",
    billStatus: "pending",
    ctName: "Joy",
    actions: "actions",
  },
];

export const feedbackTableData = [
  {
    date: "08/02/2021",
    ptName: "Joy",
    score: "10",
    recommend: "yes",
    actions: "actions",
  },
  {
    date: "02/05/2021",
    ptName: "Yesbir",
    score: "14",
    recommend: "yes",
    actions: "actions",
  },
  {
    date: "08/08/2021",
    ptName: "Golu",
    score: "100",
    recommend: "yes",
    actions: "actions",
  },
];
export const missedAppointmentsTableData = [
  {
    date: "08/02/2021",
    ptName: "Joy",
    time: "12:00 PM",
    visitStatus: "visited",
    billStatus: "pending",
    ctName: "Ashu",
    actions: "actions",
  },
  {
    date: "08/02/2021",
    ptName: "John",
    time: "12:00 PM",
    visitStatus: "visited",
    billStatus: "pending",
    ctName: "Ashu",
    actions: "actions",
  },
  {
    date: "08/02/2021",
    ptName: "Jake",
    time: "12:00 PM",
    visitStatus: "visited",
    billStatus: "pending",
    ctName: "Fake",
    actions: "actions",
  },
];
export const cancelledAppointmentsTableData = [
  {
    date: "08/02/2021",
    ptName: "Joy",
    time: "12:00 PM",
    visitStatus: "visited",
    billStatus: "pending",
    ctName: "Toy",
    actions: "actions",
  },
  {
    date: "08/02/2021",
    ptName: "Boy",
    time: "12:00 PM",
    visitStatus: "visited",
    billStatus: "pending",
    ctName: "Coy",
    actions: "actions",
  },
  {
    date: "08/02/2021",
    ptName: "Moy",
    time: "12:00 PM",
    visitStatus: "visited",
    billStatus: "pending",
    ctName: "LeMoy",
    actions: "actions",
  },
];

export const calendarAppointments = [
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 5, 25, 9, 35),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 0,
    rRule: "FREQ=DAILY;COUNT=3",
    exDate: "20180628T063500Z,20180626T063500Z",
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 1,
    rRule: "FREQ=DAILY;COUNT=4",
    exDate: "20180627T091100Z",
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 5, 25, 13, 30),
    endDate: new Date(2018, 5, 25, 14, 35),
    id: 2,
    rRule: "FREQ=DAILY;COUNT=5",
  },
];
