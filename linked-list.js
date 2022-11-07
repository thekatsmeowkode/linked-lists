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

    const append  = (value) => {
        const newNode = Node(value)
        length++
        if (head === null) {return head=newNode}

        let pointer = head
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode
        }
        pointer.nextNode = newNode
    }

    const size = () => {
        if (head===null) {return null};
        return length}

    const headRead = () => {
        if (head === null) {return null}
        return head.value
    }
    
    

    return {append, size, headRead }
}