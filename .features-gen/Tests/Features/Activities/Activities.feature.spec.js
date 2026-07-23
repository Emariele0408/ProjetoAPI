// Generated from: Tests\Features\Activities\Activities.feature
import { test } from "../../../../stepgen/Config/Fixture.ts";

test.describe('Activities', () => {

  test('GET 200 - api/v1/Activities', { tag: ['@Activities', '@Smoke'] }, async ({ When, Then, And, ctx }) => { 
    await When('Envio uma requisição GET para o endpoint \'/api/v1/Activities\'', null, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
    await And('A resposta deve conter uma lista não vazia', null, { ctx }); 
  });

  test('GET 200 - api/v1/Activities/{id}', { tag: ['@Activities'] }, async ({ When, Then, And, ctx }) => { 
    await When('Envio uma requisição GET para o endpoint \'/api/v1/Activities/1\'', null, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
    await And('A resposta deve conter os campos:', {"dataTable":{"rows":[{"cells":[{"value":"CAMPO"},{"value":"VALOR"}]},{"cells":[{"value":"id"},{"value":"1"}]},{"cells":[{"value":"completed"},{"value":""}]}]}}, { ctx }); 
  });

  test('POST 200 - api/v1/Activities', { tag: ['@Activities'] }, async ({ When, Then, And, ctx }) => { 
    await When('Envio uma requisição POST para o endpoint \'/api/v1/Activities\'', {"dataTable":{"rows":[{"cells":[{"value":"BODY"}]},{"cells":[{"value":"{\"id\":9999,\"title\":\"Atividade {timestamp}\",\"dueDate\":\"2026-07-14T00:00:00.000Z\",\"completed\":true}"}]}]}}, { ctx }); 
    await Then('A resposta deve retornar o código \'200\'', null, { ctx }); 
    await And('O campo \'completed\' da resposta deve ser igual a \'true\'', null, { ctx }); 
  });

  test('GET 404 - api/v1/Activities/{id} inexistente', { tag: ['@Activities'] }, async ({ When, Then, ctx }) => { 
    await When('Envio uma requisição GET para o endpoint \'/api/v1/Activities/999999\'', null, { ctx }); 
    await Then('A resposta deve retornar o código \'404\'', null, { ctx }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('Tests\\Features\\Activities\\Activities.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@Activities","@Smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Envio uma requisição GET para o endpoint '/api/v1/Activities'","stepMatchArguments":[{"group":{"start":41,"value":"'/api/v1/Activities'","children":[{"children":[{}]},{"start":42,"value":"/api/v1/Activities","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And A resposta deve conter uma lista não vazia","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":12,"tags":["@Activities"],"steps":[{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Envio uma requisição GET para o endpoint '/api/v1/Activities/1'","stepMatchArguments":[{"group":{"start":41,"value":"'/api/v1/Activities/1'","children":[{"children":[{}]},{"start":42,"value":"/api/v1/Activities/1","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And A resposta deve conter os campos:","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":20,"tags":["@Activities"],"steps":[{"pwStepLine":19,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Envio uma requisição POST para o endpoint '/api/v1/Activities'","stepMatchArguments":[{"group":{"start":42,"value":"'/api/v1/Activities'","children":[{"children":[{}]},{"start":43,"value":"/api/v1/Activities","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '200'","stepMatchArguments":[{"group":{"start":34,"value":"'200'","children":[{"children":[{}]},{"start":35,"value":"200","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"And O campo 'completed' da resposta deve ser igual a 'true'","stepMatchArguments":[{"group":{"start":8,"value":"'completed'","children":[{"children":[{}]},{"start":9,"value":"completed","children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"'true'","children":[{"children":[{}]},{"start":50,"value":"true","children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":27,"tags":["@Activities"],"steps":[{"pwStepLine":25,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Envio uma requisição GET para o endpoint '/api/v1/Activities/999999'","stepMatchArguments":[{"group":{"start":41,"value":"'/api/v1/Activities/999999'","children":[{"children":[{}]},{"start":42,"value":"/api/v1/Activities/999999","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then A resposta deve retornar o código '404'","stepMatchArguments":[{"group":{"start":34,"value":"'404'","children":[{"children":[{}]},{"start":35,"value":"404","children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end