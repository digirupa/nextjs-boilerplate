import React from "react";
import { useRouteLoading } from "@/lib/hooks/useRouteLoading";
import useStore from "@/store/store";

const Loading = () => {
  const { loading } = useStore(); //loading from store, ex: action
  const routeLoading = useRouteLoading(); // route loading
  return (
    <React.Fragment>
      {(loading || routeLoading) && (
        <div className="w-full">
          <div className="h-1 w-full bg-primary-foreground overflow-hidden">
            <div className="progress w-full h-full bg-primary left-right"></div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Loading;
