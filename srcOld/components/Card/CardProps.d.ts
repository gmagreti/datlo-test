export interface StateProps {
  id?: string;
  name: string;
  state: string;
  initials: string;
  ibgeCode: string;
}

export interface CardProps {
  states: StateProps[];
}
