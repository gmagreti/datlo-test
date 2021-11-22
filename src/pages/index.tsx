/* eslint-disable react-hooks/exhaustive-deps */

// Next
import dynamic from 'next/dynamic'

// React
import { FormEvent, useState, useEffect } from 'react'

// Components
import { Card } from '../components/Card'
import Loading from '../components/Loading'

// Styles
import * as S from './styles'

// Services
import { api } from '../services/api'
import { useMapCoordinates } from '../hook/MapCoordinates'

// Logo
import LogoDatlo from '../../public/datlo'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

export default function Home() {
  const [states, setStates] = useState<any>()
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState('')
  const [inputError, setInputError] = useState('')
  const { loading, setLoading } = useMapCoordinates()

  const btnText = search ? 'Pesquisar' : 'Buscar todos'

  function getDataApi(texts?: string, params?: number) {
    const param = params ? `/Cities?${texts}=${params}` : '/cities'
    setLoading(true)

    try {
      api.get(param).then((response: any) => {
        const { data } = response
        setStates(data.items)
        setPageNumber(data.pageIndex)
        setTotalPages(data.totalPages)
      })
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  useEffect(() => {
    getDataApi()
  }, [])

  function nextPage() {
    const pag = pageNumber
    const pageSelected = pag + 1
    getDataApi('pageNumber', pageSelected)
  }

  function prevPage() {
    const pag = pageNumber
    const pageSelected = pag - 1
    getDataApi('pageNumber', pageSelected)
  }

  async function handleSearch(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()
    setLoading(true)

    try {
      const response = await api.get(`cities?searchString=${search}`)

      const { data } = response

      setStates(data.items)
      setTotalPages(data.totalPages)

      setSearch('')
      setInputError('')
      setLoading(false)
    } catch (err) {
      setLoading(false)

      setInputError('Erro na busca por essa localização')
    }
  }

  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.Header>
          <LogoDatlo style={{ width: '80px', height: '30px' }} />
          <S.Form onSubmit={handleSearch}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Código  ibge, cidades ou UF"
            />
            <button type="submit">{btnText}</button>
          </S.Form>
          {inputError && <S.Error>{inputError}</S.Error>}
        </S.Header>

        <S.Main>
          <Card states={states} />
        </S.Main>

        <S.Footer>
          {totalPages >= 2 && (
            <>
              <S.ButtonPagination onClick={prevPage}>
                Anterior
              </S.ButtonPagination>
              <S.pageIndex>{pageNumber}</S.pageIndex>
              <S.ButtonPagination onClick={nextPage}>
                Próxima
              </S.ButtonPagination>
            </>
          )}
        </S.Footer>
      </S.WrapperContent>
      <>
        {loading && <Loading />}
        <Map />
      </>
    </S.Wrapper>
  )
}
