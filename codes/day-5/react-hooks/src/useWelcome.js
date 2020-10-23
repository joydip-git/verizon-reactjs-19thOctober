const useWelcome = () => {
    const sayHi = () => {
        return 'Hi...'
    }
    const sayBye = () => {
        return 'Bye...'
    }

    return [sayHi, sayBye];
}
export default useWelcome;