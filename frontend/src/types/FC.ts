import React from "react";
type Component<T> = T & React.HTMLAttributes<HTMLDivElement>;
export type FC<T> = React.FC<Component<T>>;