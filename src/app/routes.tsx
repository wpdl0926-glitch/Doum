import { createBrowserRouter } from "react-router";
import NotificationScreen from "./screens/NotificationScreen";
import SplashScreen from "./screens/SplashScreen";
import MainScreen from "./screens/MainScreen";
import GuestMainScreen from "./screens/GuestMainScreen";
import RequestDetailScreen from "./screens/RequestDetailScreen";
import AcceptRequestScreen from "./screens/AcceptRequestScreen";
import RequestAcceptedScreen from "./screens/RequestAcceptedScreen";
import RequestCanceledScreen from "./screens/RequestCanceledScreen";
import MatchConfirmedScreen from "./screens/MatchConfirmedScreen";
import VerificationScreen from "./screens/VerificationScreen";
import CreditEarnedScreen from "./screens/CreditEarnedScreen";
import MyActivityScreen from "./screens/MyActivityScreen";
import ExploreScreen from "./screens/ExploreScreen";
import MyPageScreen from "./screens/MyPageScreen";
import ActivityLogScreen from "./screens/ActivityLogScreen";
import BadgeDownloadScreen from "./screens/BadgeDownloadScreen";
import FilterScreen from "./screens/FilterScreen";
import LoginScreen from "./screens/LoginScreen";
import CreditScreen from "./screens/CreditScreen";
import CashOutScreen from "./screens/CashOutScreen";
import ErrorBoundary from "./components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestMainScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/main",
    element: <MainScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/request/:id",
    element: <RequestDetailScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/accept/:id",
    element: <AcceptRequestScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/accepted/:id",
    element: <RequestAcceptedScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/canceled/:id",
    element: <RequestCanceledScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/confirmed/:id",
    element: <MatchConfirmedScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/verify/:id",
    element: <VerificationScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/credit-earned",
    element: <CreditEarnedScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-activity",
    element: <MyActivityScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/explore",
    element: <ExploreScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/mypage",
    element: <MyPageScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/activity-log/:id",
    element: <ActivityLogScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/badge/:id",
    element: <BadgeDownloadScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/filter",
    element: <FilterScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/credit",
    element: <CreditScreen />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/cashout",
    element: <CashOutScreen />,
    errorElement: <ErrorBoundary />,
  },
]);
