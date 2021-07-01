test('2 + 2 equal to 4', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);
    expect(value).toBeGreaterThanOrEqual(3);

    expect(value).toBe(4)
})
//  floating points

test(`expect floating numbers`, () => {
    const value = 0.2 + 0.2;
    expect(value).toBeCloseTo(0.4)
})