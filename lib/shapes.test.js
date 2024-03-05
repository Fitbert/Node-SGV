const { Triangle } = require('../lib/shapes');

    describe('Triangle Class', () => {
    test('should render correctly', () => {
    const triangle = new Triangle('Sample Text', 'red', 'blue');
    const rendered = triangle.render();
    // Add assertions here to check if the rendered SVG is correct
    expect(rendered).toContain('<polygon');
    expect(rendered).toContain('fill="blue"');
  })});

  const { Square } = require('../lib/shapes');

    describe('Square Class', () => {
     test('should render correctly', () => {
    const square = new Square('Sample Text', 'red', 'blue');
    const rendered = square.render();
    expect(rendered).toContain('<rect');
    expect(rendered).toContain('fill="blue"');
})});

  const { Circle } = require('../lib/shapes');

    describe('Circle Class', () => {
     test('should render correctly', () => {
    const circle = new Circle('Sample Text', 'red', 'blue');
    const rendered = circle.render();
    expect(rendered).toContain('<circle');
    expect(rendered).toContain('fill="blue"');
  });
});
