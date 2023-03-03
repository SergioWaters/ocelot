/**
 * Что не так с этим тестом?
Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
*/

// надо добавить блок describe, 
// и разделить код на три отдельные проверки,
// чтобы знать где конкретно происходит сбой