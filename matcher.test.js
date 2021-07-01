test('expected result not to be zero', () => {
    let a, b = 0;
    for(a < 10; a++;){
        for(b <10; b++;){
            expect(a+b).not.toBe(0)
        }
    }
})