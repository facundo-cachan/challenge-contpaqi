import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import RecoilNexus from "./services/recoil/nexus";
import routes from "./routes";

import { RecoilRoot } from "recoil";

import "./App.css";

const logError = (error: Error) => {
  // Do something with the error, e.g. log to an external API
  throw new Error(error.message);
};
const Fallback = ({ error, resetErrorBoundary }: any) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre style={{ color: "red" }}>{error.message}</pre>
  </div>
);

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={logError}>
      <RecoilRoot>
        <RecoilNexus />
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider
            router={routes}
            fallbackElement={<p>Initial Load...</p>}
          />
        </Suspense>
      </RecoilRoot>
    </ErrorBoundary>
  );
}

export default App;
