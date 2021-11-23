export interface StateProps {
  id?: string
  name: string
  state: string
  stateInitials: string
  ibgeCode: string
}

export interface CardProps {
  states: StateProps[]
}
