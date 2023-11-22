export type Task = {
  id: number;
  text: string;
  date: string;
  important: boolean;
  finished: boolean;
  board: string;
};

export type LoadingProps = {
  isAppLoading: boolean;
};
