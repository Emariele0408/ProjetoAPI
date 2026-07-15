# language: en
@Activities
Feature: Activities
  Testes de contrato para o recurso /api/v1/Activities da FakeRestAPI.

  @Smoke
  Scenario: GET 200 - api/v1/Activities
    When Envio uma requisição GET para o endpoint '/api/v1/Activities'
    Then A resposta deve retornar o código '200'
    And A resposta deve conter uma lista não vazia

  Scenario: GET 200 - api/v1/Activities/{id}
    When Envio uma requisição GET para o endpoint '/api/v1/Activities/1'
    Then A resposta deve retornar o código '200'
    And A resposta deve conter os campos:
      | CAMPO     | VALOR |
      | id        | 1     |
      | completed |       |

  Scenario: POST 200 - api/v1/Activities
    When Envio uma requisição POST para o endpoint '/api/v1/Activities'
      | BODY                                                                                        |
      | {"id":9999,"title":"Atividade {timestamp}","dueDate":"2026-07-14T00:00:00.000Z","completed":true} |
    Then A resposta deve retornar o código '200'
    And O campo 'completed' da resposta deve ser igual a 'true'

  Scenario: GET 404 - api/v1/Activities/{id} inexistente
    When Envio uma requisição GET para o endpoint '/api/v1/Activities/999999'
    Then A resposta deve retornar o código '404'