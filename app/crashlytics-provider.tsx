import { getCrashlytics } from "@react-native-firebase/crashlytics";
import React, { useEffect } from "react";

const crashlytics = getCrashlytics();

export default function CrashlyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    crashlytics.crash();
  }, []);

  return <>{children}</>;
}
