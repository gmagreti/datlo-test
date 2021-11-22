## Teste para Desenvolvedor ReactJs - Datlo

```

  Implementar uma página web com um mapa interativo usando a biblioteca Leaflet.

  [X] Crie uma página de listagem de cidades paginadas com os seguintes campos:
      - Código IBGE
      - Nome da cidade
      - UF

  [X] Na página deverá ter um campo de pesquisa, sendo possível pesquisar por código IBGE,
      nome da cidade e UF

  [X] Na última coluna da listagem, adicione um botão com o texto “Ver no mapa”. O botão
      deverá levar para uma página com um mapa, onde será apresentado todos os setores da
      cidade selecionada.

  [] O mapa deverá ser classificado pela propriedade population

  [X] Ao clicar em um setor, deverá apresentar um popup com  as seguintes informações: Total
      de população (population), renda média (averageIncome) (R$) daquele setor

  [] O mapa deverá ser renderizado do lado do servidor (SSR) usando NextJS com Leaflet.

  [x] Devem ser utilizadas as seguintes tecnologias:
      - HTML
      - CSS
      - Javascript
      - ReactJS
      - TypeScript
      - NextJS
      - Jest
```

## Testes Unitarios

[] Implementar teste para verificar se está renderizando o mapa na página.
[] Implementar teste para verificar se ao clicar no botão “Ver no mapa” está buscando
os dados da cidade e apresentando no mapa.

    https://www.api.development.datlo.com/cities
    https://www.api.development.datlo.com/map/city?ibgeCode=xxxx
