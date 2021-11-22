// Props
import { CardProps } from './CardProps'

// Services
import { api } from '../../services/api'
import { useMapCoordinates } from '../../hook/MapCoordinates'

// Styles
import * as S from './styles'

const Card = ({ states }: CardProps) => {
  const { setData, setLoading } = useMapCoordinates()

  async function handleSetMap(ibgeCode: string) {
    try {
      setData()
      setLoading(true)
      const response = await api.get(`Map/City?ibgeCode=${ibgeCode}`)

      const { data } = response

      setData(data)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      alert(
        'Cidade não encontrada. PS: Só irá retornar dados para o CÓDIGO IBGE 4115200.'
      )
    }
  }

  return (
    <>
      {states?.map((st) => (
        <S.Wrapper key={st.id}>
          <S.WrapperCode>
            <S.Label>
              ibgeCode: <p>{st.ibgeCode}</p>
            </S.Label>
          </S.WrapperCode>

          <S.WrapperContent>
            <S.Label>
              Cidade: <p>{st.name}</p>
            </S.Label>

            <S.Label>
              Estado:
              <p>
                {st.state} • {st.initials}
              </p>
            </S.Label>

            <S.Button onClick={() => handleSetMap(st.ibgeCode)}>
              Ver no mapa
            </S.Button>
          </S.WrapperContent>
        </S.Wrapper>
      ))}
    </>
  )
}

export { Card }
