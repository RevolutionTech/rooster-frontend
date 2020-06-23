import React from "react";

interface Props<T> {
  title: string;
  activities: T[];
  render: (data: T) => React.ReactNode;
}

export function ActivitySummary<T>(props: Props<T>): React.ReactElement {
  return (
    <>
      {props.activities.length > 0 && (
        <>
          <h3>{props.title}</h3>
          <ul>
            {props.activities.map((activity, i) => (
              <li key={i}>{props.render(activity)}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
