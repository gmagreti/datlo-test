import { render, screen } from '@testing-library/react'
import Map from '../Map'

describe('<Map />', () => {
  it('should render map component', () => {
    const { queryByTestId } = render(<Map />)

    expect(queryByTestId('leaflet-map')).toBeInTheDocument()
  })
})
