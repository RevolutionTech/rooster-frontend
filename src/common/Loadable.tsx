import React from "react";

import { assertNever } from "./assert";

export enum LoadableState {
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

export function useLoadable<T, E>(fetcher: () => Promise<T>): Loadable<T, E> {
  const [loadable, setLoadable] = React.useState<Loadable<T, E>>({
    state: LoadableState.LOADING,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetcher();
        setLoadable({ state: LoadableState.SUCCESS, data });
      } catch (error) {
        setLoadable({ state: LoadableState.FAILURE, error });
      }
    };
    fetchData();
  }, [fetcher]);

  return loadable;
}

interface LoadableTextProps<T> {
  getProps: () => Promise<T>;
  component: React.ComponentType<T>;
}

export function LoadableText<T>(
  props: LoadableTextProps<T>
): React.ReactElement {
  const loadable = useLoadable(props.getProps);
  if (loadable.state === LoadableState.LOADING) {
    return <p>Loading...</p>;
  } else if (loadable.state === LoadableState.FAILURE) {
    return <p>ERROR!</p>;
  } else if (loadable.state === LoadableState.SUCCESS) {
    return <props.component {...loadable.data} />;
  } else {
    assertNever(loadable);
  }
}
