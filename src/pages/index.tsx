/* eslint-disable react-hooks/exhaustive-deps */

// Next
import dynamic from 'next/dynamic'

// React
import { FormEvent, useState, useEffect } from 'react'

// Components
import { Card } from '../components/Card'
import Loading from '../components/Loading'

// Styles
import * as S from '../styles/styles'

// Services
import { useMapCoordinates } from '../hook/MapCoordinates'
import { api } from '../services/api'

// Logo
import LogoDatlo from '../../public/datlo'

export type showMobile = {
  hideOnMobile?: boolean
}

const Map = dynamic(() => import('../components/Map/Map'), { ssr: false })

export default function Home({ hideOnMobile = false }: showMobile) {
  const [states, setStates] = useState<any>()
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState('')
  const [inputError, setInputError] = useState('')
  const { loading, setLoading } = useMapCoordinates()
  const [showMobile, setShowMobile] = useState(false)

  const btnText = search ? 'Pesquisar' : 'Buscar todos'
  const btnShowMob = showMobile ? 'Ver mapa' : 'Ver cidades'

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
    } catch (err) {}
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

      setInputError('Erro na busca por essa localiza????o')
    }
  }

  function handleShowMobile() {
    setShowMobile(!showMobile)
  }

  return (
    <S.Wrapper>
      <S.WrapperContent hideOnMobile={showMobile}>
        <S.Head>
          <button onClick={() => handleShowMobile()}>{btnShowMob}</button>
        </S.Head>

        <S.Header>
          <LogoDatlo style={{ width: '80px', height: '30px' }} />
          <S.Form onSubmit={handleSearch}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="C??digo  ibge, cidades ou UF"
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
                Pr??xima
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
