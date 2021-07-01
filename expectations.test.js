function compileAndroidCode () {
    throw new Error(`You are using the wrong JDK`)
}

test('compiling android goes as expectation', () => {
    expect(() => compileAndroidCode()).toThrow()
    // expect(() => compileAndroidCode()).toThrow(Error)
})