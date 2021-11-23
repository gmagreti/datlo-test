import { render } from '@testing-library/react'
import { Card } from '../'

const statess = [
  {
    id: 'cfe84686-6504-4654-bfec-48e017658bfc',
    name: 'Acrelândia',
    state: 'Acre',
    stateInitials: 'AC',
    ibgeCode: '1200013'
  }
]

describe('<Card />', () => {
  it('should render with the name property', () => {
    const { getByText } = render(<Card states={statess} />)

    const cityName = getByText(/Acrelândia/i)
    expect(cityName).toBeInTheDocument()
  })

  it('should render with the state property', () => {
    const { getByText } = render(<Card states={statess} />)

    const stateName = getByText(/Acre • AC/i)
    expect(stateName).toBeInTheDocument()
  })

  it('should render with the ibgeCode property', () => {
    const { getByText } = render(<Card states={statess} />)

    const stateName = getByText(/1200013/i)
    expect(stateName).toBeInTheDocument()
  })
})
