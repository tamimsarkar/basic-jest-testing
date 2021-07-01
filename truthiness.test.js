test('nul', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).not.toBeTruthy();
    expect(n).not.toBeUndefined();
    expect(n).toBeDefined();
    expect(n).toBeFalsy();
})

test('number 0', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).not.toBeUndefined();
    expect(z).toBeFalsy();
    expect(z).toBeDefined();
    expect(z).not.toBeTruthy();
})