/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import dynamic from 'next/dynamic';
import * as S from './styles';
import LogoDatlo from '../../public/datlo.jsx';
import { Card } from '../components/Card';
import { api } from '../services/api';
import { FormEvent, useState, useEffect } from 'react';

import { useMapCoordinates } from '../hook/MapCoordinates';

const Map = dynamic(() => import('../components/Map/Map'), { ssr: false });

export default function Home() {
  const [states, setStates] = useState<any>();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [inputError, setInputError] = useState('');
  const { data, setData } = useMapCoordinates();

  const btnText = search ? 'Pesquisar' : 'Buscar todos';

  function getDataApi(texts?: any, params?: any) {
    const param = params ? `/Cities?${texts}=${params}` : '/cities';
    api.get(param).then((response) => {
      const { data } = response;
      setStates(data.items);
      setPageNumber(data.pageIndex);
      setTotalPages(data.totalPages);
    });
  }

  useEffect(() => {
    getDataApi();
  }, []);

  function nextPage() {
    const pag = pageNumber;
    const pageSelected = pag + 1;
    getDataApi('pageNumber', pageSelected);
  }

  function prevPage() {
    const pag = pageNumber;
    const pageSelected = pag - 1;
    getDataApi('pageNumber', pageSelected);
  }

  async function handleSearch(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    console.log(totalPages);

    try {
      const response = await api.get(`cities?searchString=${search}`);

      const { data } = response;

      setStates(data.items);
      setTotalPages(data.totalPages);

      setSearch('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por essa localização');
    }
  }

  async function handleSetMap(ibgeCode: string) {
    try {
      const response = await api.get(`Map/City?ibgeCode=${ibgeCode}`);

      const { data } = response;

      setData(data);
    } catch (err) {}
  }

  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.Header>
          <LogoDatlo style={{ width: '100px', height: '30px' }} />
          <S.Form onSubmit={handleSearch}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquise"
            />
            <button type="submit">{btnText}</button>
          </S.Form>
          {inputError && <S.Error>{inputError}</S.Error>}
          <button onClick={() => handleSetMap('4115200')}>click</button>
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

      <Map />
    </S.Wrapper>
  );
}

// export const getServerSideProps: GetStaticProps = async ({ params }) => {
//   const { data } = await api.get(`/cities`);
//   // console.log(params);
//   console.log('Params page 2: ', params);

//   const states = data.items.map((estado: any) => {
//     return {
//       id: estado.id,
//       name: estado.name,
//       state: estado.state,
//       initials: estado.stateInitials,
//       ibgeCode: estado.ibgeCode,
//     };
//   });

//   return {
//     props: {
//       revalidate: 1,
//       states,
//     },
//   };
// };
