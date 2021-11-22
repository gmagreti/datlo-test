import { CardProps } from './CardProps';
import * as S from './styles';

const Card = ({ states }: any) => {
  return (
    <>
      {states?.map((st: any) => (
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

            <S.Button>Ver no mapa</S.Button>
          </S.WrapperContent>
        </S.Wrapper>
      ))}
    </>
  );
};

export { Card };
