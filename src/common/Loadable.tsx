import React from "react";

enum LoadableState {
  LOADING = "loading",
  SUCCESS = "success",
  FAILURE = "failure",
}

type Loadable<T> =
  | {
      state: LoadableState.LOADING;
    }
  | { state: LoadableState.FAILURE; error: unknown }
  | { state: LoadableState.SUCCESS; data: T };

function useLoadable<T>(fetcher: () => Promise<T>): Loadable<T> {
  const [loadable, setLoadable] = React.useState<Loadable<T>>({
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
  } else {
    return <props.component {...loadable.data} />;
  }
}
