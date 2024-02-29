interface IPathName {
  path: string;
}

export interface IParentMenu {
  path: string;
  icon?: React.ReactNode;
  styleIcon?: number;
  title: React.ReactNode;
  hasExtra?: boolean;
  children?: Array<IParentMenu>;
  pathChildren?: IPathName[];
  className?: string;
  popupOffset?: number[];
  popupClassName?: string;
}
