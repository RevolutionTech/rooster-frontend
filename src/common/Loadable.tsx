import React from "react";

import { assertNever } from "./assert";

enum LoadableState {
  LOADING = "loading",
  SUCCESS = "success",
  FAILURE = "failure",
}

type Loadable<T, E> =
  | {
      state: LoadableState.LOADING;
    }
  | { state: LoadableState.FAILURE; error: E }
  | { state: LoadableState.SUCCESS; data: T };

function useLoadable<T, E>(fetcher: () => Promise<T>): Loadable<T, E> {
  const [loadable, setLoadable] = React.useState<Loadable<T, E>>({
    state: LoadableState.LOADING,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetcher();
        setLoadable({ state: LoadableState.SUCCESS, data });
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setLoadable({ state: LoadableState.FAILURE, error: error as any });
      }
    };
    fetchData();
  }, [fetcher]);

  return loadable;
}

interface LoadableViewProps<T, E> {
  getProps: () => Promise<T>;
  component: React.ComponentType<T>;
  loadingComponent?: React.ComponentType;
  failureComponent?: React.ComponentType<E>;
}

const DEFAULT_LOADING_COMPONENT: React.FC = () => <p>Loading...</p>;
const DEFAULT_FAILURE_COMPONENT: React.FC = () => <p>ERROR!</p>;

export function LoadableView<T, E>(
  props: LoadableViewProps<T, E>
): React.ReactElement {
  const loadable = useLoadable<T, E>(props.getProps);
  if (loadable.state === LoadableState.LOADING) {
    return props.loadingComponent == null ? (
      <DEFAULT_LOADING_COMPONENT />
    ) : (
      <props.loadingComponent />
    );
  } else if (loadable.state === LoadableState.FAILURE) {
    return props.failureComponent == null ? (
      <DEFAULT_FAILURE_COMPONENT />
    ) : (
      <props.failureComponent {...loadable.error} />
    );
  } else if (loadable.state === LoadableState.SUCCESS) {
    return <props.component {...loadable.data} />;
  } else {
    assertNever(loadable);
  }
}
