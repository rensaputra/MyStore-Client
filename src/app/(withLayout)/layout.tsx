import { Suspense } from "react";
import Header from "@/components/layout/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense fallback={<div className="h-16" />}>
        <Header />
      </Suspense>
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
