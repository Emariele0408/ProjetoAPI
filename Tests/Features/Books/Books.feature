# language: en
@Books
Feature: Books
  Testes de contrato para o recurso /api/v1/Books da FakeRestAPI.

  @Smoke
  Scenario: GET 200 - api/v1/Books
    When Envio uma requisição GET para o endpoint '/api/v1/Books'
    Then A resposta deve retornar o código '200'
    And A resposta deve conter uma lista não vazia

  @Smoke
  Scenario: GET 200 - api/v1/Books/{id}
    When Envio uma requisição GET para o endpoint '/api/v1/Books/1'
    Then A resposta deve retornar o código '200'
    And A resposta deve conter os campos:
      | CAMPO | VALOR |
      | id    | 1     |
      | title |       |

  Scenario: POST 200 - api/v1/Books
    When Envio uma requisição POST para o endpoint '/api/v1/Books'
      | BODY                                                                                                                            |
      | {"id":9999,"title":"Livro de Teste {timestamp}","description":"Criado via automacao","pageCount":123,"excerpt":"trecho","publishDate":"2026-07-14T00:00:00.000Z"} |
    Then A resposta deve retornar o código '200'
    And O campo 'title' da resposta deve existir

  Scenario: PUT 200 - api/v1/Books/{id}
    When Envio uma requisição PUT para o endpoint '/api/v1/Books/1'
      | BODY                                                                                                                     |
      | {"id":1,"title":"Livro Atualizado","description":"editado","pageCount":50,"excerpt":"trecho","publishDate":"2026-07-14T00:00:00.000Z"} |
    Then A resposta deve retornar o código '200'
    And O campo 'title' da resposta deve ser igual a 'Livro Atualizado'

  Scenario: DELETE 200 - api/v1/Books/{id}
    When Envio uma requisição DELETE para o endpoint '/api/v1/Books/1'
    Then A resposta deve retornar o código '200'

  Scenario: GET 404 - api/v1/Books/{id} inexistente
    When Envio uma requisição GET para o endpoint '/api/v1/Books/999999'
    Then A resposta deve retornar o código '404'