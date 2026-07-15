# language: en
@Authors
Feature: Authors
  Testes de contrato para o recurso /api/v1/Authors da FakeRestAPI.

  @Smoke
  Scenario: GET 200 - api/v1/Authors
    When Envio uma requisição GET para o endpoint '/api/v1/Authors'
    Then A resposta deve retornar o código '200'
    And A resposta deve conter uma lista não vazia

  Scenario: GET 200 - api/v1/Authors/{id} e captura de campos
    When Envio uma requisição GET para o endpoint '/api/v1/Authors/1'
    Then A resposta deve retornar o código '200'
    And Armazeno o campo 'idBook' da resposta em uma variável chamada 'idBook'
    And O campo 'id' da resposta deve ser igual a '1'

  Scenario: GET 200 - Autores filtrados por livro capturado
    When Envio uma requisição GET para o endpoint '/api/v1/Authors/authors/books/1'
    Then A resposta deve retornar o código '200'

  Scenario: POST 200 - api/v1/Authors
    When Envio uma requisição POST para o endpoint '/api/v1/Authors'
      | BODY                                                                       |
      | {"id":9999,"idBook":1,"firstName":"Maria {timestamp}","lastName":"Souza"} |
    Then A resposta deve retornar o código '200'
    And O campo 'lastName' da resposta deve ser igual a 'Souza'

  Scenario: GET 404 - api/v1/Authors/{id} inexistente
    When Envio uma requisição GET para o endpoint '/api/v1/Authors/999999'
    Then A resposta deve retornar o código '404'