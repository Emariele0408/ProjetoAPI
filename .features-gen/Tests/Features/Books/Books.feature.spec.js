// Generated from: Tests\Features\Books\Books.feature
import { test } from "../../../../stepgen/Config/Fixture.ts";

test.describe('Books', () => {

  test('GET 200 - api/v1/Books', { tag: ['@Books', '@Smoke'] }, async ({ When, Then, And, ctx }) => { 
    await When('Envio uma requisição GET para o endpoint \'/api/v1/Books\'', null, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
    await And('A resposta deve conter uma lista não vazia', null, { ctx }); 
  });

  test('GET 200 - api/v1/Books/{id}', { tag: ['@Books', '@Smoke'] }, async ({ When, Then, And, ctx }) => { 
    await When('Envio uma requisição GET para o endpoint \'/api/v1/Books/1\'', null, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
    await And('A resposta deve conter os campos:', {"dataTable":{"rows":[{"cells":[{"value":"CAMPO"},{"value":"VALOR"}]},{"cells":[{"value":"id"},{"value":"1"}]},{"cells":[{"value":"title"},{"value":""}]}]}}, { ctx }); 
  });

  test('POST 200 - api/v1/Books', { tag: ['@Books'] }, async ({ When, Then, And, ctx }) => { 
    await When('Envio uma requisição POST para o endpoint \'/api/v1/Books\'', {"dataTable":{"rows":[{"cells":[{"value":"BODY"}]},{"cells":[{"value":"{\"id\":9999,\"title\":\"Livro de Teste {timestamp}\",\"description\":\"Criado via automacao\",\"pageCount\":123,\"excerpt\":\"trecho\",\"publishDate\":\"2026-07-14T00:00:00.000Z\"}"}]}]}}, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
    await And('O campo \'title\' da resposta deve existir', null, { ctx }); 
  });

  test('PUT 200 - api/v1/Books/{id}', { tag: ['@Books'] }, async ({ When, Then, And, ctx }) => { 
    await When('Envio uma requisição PUT para o endpoint \'/api/v1/Books/1\'', {"dataTable":{"rows":[{"cells":[{"value":"BODY"}]},{"cells":[{"value":"{\"id\":1,\"title\":\"Livro Atualizado\",\"description\":\"editado\",\"pageCount\":50,\"excerpt\":\"trecho\",\"publishDate\":\"2026-07-14T00:00:00.000Z\"}"}]}]}}, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
    await And('O campo \'title\' da resposta deve ser igual a \'Livro Atualizado\'', null, { ctx }); 
  });

  test('DELETE 200 - api/v1/Books/{id}', { tag: ['@Books'] }, async ({ When, Then, ctx }) => { 
    await When('Envio uma requisição DELETE para o endpoint \'/api/v1/Books/1\'', null, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
  });

  test('GET 404 - api/v1/Books/{id} inexistente', { tag: ['@Books'] }, async ({ When, Then, ctx }) => { 
    await When('Envio uma requisição GET para o endpoint \'/api/v1/Books/999999\'', null, { ctx }); 
    await Then('A resposta deve retornar o código \'404\'', null, { ctx }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('Tests\\Features\\Books\\Books.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@Books","@Smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Envio uma requisição GET para o endpoint '/api/v1/Books'","stepMatchArguments":[{"group":{"start":41,"value":"'/api/v1/Books'","children":[{"children":[{}]},{"start":42,"value":"/api/v1/Books","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And A resposta deve conter uma lista não vazia","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":13,"tags":["@Books","@Smoke"],"steps":[{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When Envio uma requisição GET para o endpoint '/api/v1/Books/1'","stepMatchArguments":[{"group":{"start":41,"value":"'/api/v1/Books/1'","children":[{"children":[{}]},{"start":42,"value":"/api/v1/Books/1","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And A resposta deve conter os campos:","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":21,"tags":["@Books"],"steps":[{"pwStepLine":19,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When Envio uma requisição POST para o endpoint '/api/v1/Books'","stepMatchArguments":[{"group":{"start":42,"value":"'/api/v1/Books'","children":[{"children":[{}]},{"start":43,"value":"/api/v1/Books","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And O campo 'title' da resposta deve existir","stepMatchArguments":[{"group":{"start":8,"value":"'title'","children":[{"children":[{}]},{"start":9,"value":"title","children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":28,"tags":["@Books"],"steps":[{"pwStepLine":25,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When Envio uma requisição PUT para o endpoint '/api/v1/Books/1'","stepMatchArguments":[{"group":{"start":41,"value":"'/api/v1/Books/1'","children":[{"children":[{}]},{"start":42,"value":"/api/v1/Books/1","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"And O campo 'title' da resposta deve ser igual a 'Livro Atualizado'","stepMatchArguments":[{"group":{"start":8,"value":"'title'","children":[{"children":[{}]},{"start":9,"value":"title","children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"'Livro Atualizado'","children":[{"children":[{}]},{"start":46,"value":"Livro Atualizado","children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":35,"tags":["@Books"],"steps":[{"pwStepLine":31,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When Envio uma requisição DELETE para o endpoint '/api/v1/Books/1'","stepMatchArguments":[{"group":{"start":44,"value":"'/api/v1/Books/1'","children":[{"children":[{}]},{"start":45,"value":"/api/v1/Books/1","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":39,"tags":["@Books"],"steps":[{"pwStepLine":36,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When Envio uma requisição GET para o endpoint '/api/v1/Books/999999'","stepMatchArguments":[{"group":{"start":41,"value":"'/api/v1/Books/999999'","children":[{"children":[{}]},{"start":42,"value":"/api/v1/Books/999999","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '404'","stepMatchArguments":[{"group":{"start":34,"value":"'404'","children":[{"children":[{}]},{"start":35,"value":"404","children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end