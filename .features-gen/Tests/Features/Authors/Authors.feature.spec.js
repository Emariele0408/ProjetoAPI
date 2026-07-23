// Generated from: Tests\Features\Authors\Authors.feature
import { test } from "../../../../stepgen/Config/Fixture.ts";

test.describe('Authors', () => {

  test('GET 200 - api/v1/Authors', { tag: ['@Authors', '@Smoke'] }, async ({ When, Then, And, ctx }) => { 
    await When('Envio uma requisição GET para o endpoint \'/api/v1/Authors\'', null, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
    await And('A resposta deve conter uma lista não vazia', null, { ctx }); 
  });

  test('GET 200 - api/v1/Authors/{id} e captura de campos', { tag: ['@Authors'] }, async ({ When, Then, And, ctx }) => { 
    await When('Envio uma requisição GET para o endpoint \'/api/v1/Authors/1\'', null, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
    await And('Armazeno o campo \'idBook\' da resposta em uma variável chamada \'idBook\'', null, { ctx }); 
    await And('O campo \'id\' da resposta deve ser igual a \'1\'', null, { ctx }); 
  });

  test('GET 200 - Autores filtrados por livro capturado', { tag: ['@Authors'] }, async ({ When, Then, ctx }) => { 
    await When('Envio uma requisição GET para o endpoint \'/api/v1/Authors/authors/books/1\'', null, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
  });

  test('POST 200 - api/v1/Authors', { tag: ['@Authors'] }, async ({ When, Then, And, ctx }) => { 
    await When('Envio uma requisição POST para o endpoint \'/api/v1/Authors\'', {"dataTable":{"rows":[{"cells":[{"value":"BODY"}]},{"cells":[{"value":"{\"id\":9999,\"idBook\":1,\"firstName\":\"Maria {timestamp}\",\"lastName\":\"Souza\"}"}]}]}}, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
    await And('O campo \'lastName\' da resposta deve ser igual a \'Souza\'', null, { ctx }); 
  });

  test('GET 404 - api/v1/Authors/{id} inexistente', { tag: ['@Authors'] }, async ({ When, Then, ctx }) => { 
    await When('Envio uma requisição GET para o endpoint \'/api/v1/Authors/999999\'', null, { ctx }); 
    await Then('A resposta deve retornar o código \'404\'', null, { ctx }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('Tests\\Features\\Authors\\Authors.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@Authors","@Smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Envio uma requisição GET para o endpoint '/api/v1/Authors'","stepMatchArguments":[{"group":{"start":41,"value":"'/api/v1/Authors'","children":[{"children":[{}]},{"start":42,"value":"/api/v1/Authors","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And A resposta deve conter uma lista não vazia","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":12,"tags":["@Authors"],"steps":[{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Envio uma requisição GET para o endpoint '/api/v1/Authors/1'","stepMatchArguments":[{"group":{"start":41,"value":"'/api/v1/Authors/1'","children":[{"children":[{}]},{"start":42,"value":"/api/v1/Authors/1","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And Armazeno o campo 'idBook' da resposta em uma variável chamada 'idBook'","stepMatchArguments":[{"group":{"start":17,"value":"'idBook'","children":[{"children":[{}]},{"start":18,"value":"idBook","children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":62,"value":"'idBook'","children":[{"children":[{}]},{"start":63,"value":"idBook","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And O campo 'id' da resposta deve ser igual a '1'","stepMatchArguments":[{"group":{"start":8,"value":"'id'","children":[{"children":[{}]},{"start":9,"value":"id","children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"'1'","children":[{"children":[{}]},{"start":43,"value":"1","children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":18,"tags":["@Authors"],"steps":[{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Envio uma requisição GET para o endpoint '/api/v1/Authors/authors/books/1'","stepMatchArguments":[{"group":{"start":41,"value":"'/api/v1/Authors/authors/books/1'","children":[{"children":[{}]},{"start":42,"value":"/api/v1/Authors/authors/books/1","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":22,"tags":["@Authors"],"steps":[{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When Envio uma requisição POST para o endpoint '/api/v1/Authors'","stepMatchArguments":[{"group":{"start":42,"value":"'/api/v1/Authors'","children":[{"children":[{}]},{"start":43,"value":"/api/v1/Authors","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And O campo 'lastName' da resposta deve ser igual a 'Souza'","stepMatchArguments":[{"group":{"start":8,"value":"'lastName'","children":[{"children":[{}]},{"start":9,"value":"lastName","children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"'Souza'","children":[{"children":[{}]},{"start":49,"value":"Souza","children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":29,"tags":["@Authors"],"steps":[{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When Envio uma requisição GET para o endpoint '/api/v1/Authors/999999'","stepMatchArguments":[{"group":{"start":41,"value":"'/api/v1/Authors/999999'","children":[{"children":[{}]},{"start":42,"value":"/api/v1/Authors/999999","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '404'","stepMatchArguments":[{"group":{"start":34,"value":"'404'","children":[{"children":[{}]},{"start":35,"value":"404","children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end