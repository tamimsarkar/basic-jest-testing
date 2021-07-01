const array = [
    'tamim','sarkar','mathor','alex'
]

test('find alex in array', () => {
    expect(array).toContain('tamim');
    expect(new Set(array)).toContain('tamim')
})