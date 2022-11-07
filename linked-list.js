const Node = (input) => {
    return {
        value: input || null,
        nextNode: null,
        changeValue(newInput) {
            this.value = newInput
        }
    }
}

const LinkedList = () => {
    const head = null
    let length = 0

    const append  = (value) => {}
}