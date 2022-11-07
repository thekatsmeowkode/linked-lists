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

    const getHead = () => {
        if (!head) {return null}
        return head.value
    }
    //lol
    const getTail = () => {
        let lastNode = head
        if (lastNode) {
            while (lastNode.nextNode) {
                lastNode = lastNode.nextNode
            }
        }
        return lastNode.value
    }

    const prepend = (value) => {
        const newNode = Node(value)
        if (head === null) {return head = newNode}
        newNode.nextNode = head
        head = newNode
    }

    const nodeAt = (index) => {
        if (!head) return null
        let pointer = head
        for (let i=0; i<index; i++) {
            pointer = pointer.nextNode
        }
        return pointer.value
    }

    const popOff = () => {
        if (!head) return null
        if (head === null) {return head = null}
        nodeAt(size()-2).nextNode = null
        length--
    }

    const containsValue = (value) => {
        if (!head) return null
        let pointer = head
        while (pointer.nextNode != null) {
            if (pointer.value === value) {return true}
            pointer = pointer.nextNode
        }
        return (pointer.value === value)? true : false
    }

    const find = (value) => {
        if (!head) return null
        let pointer = head
        let index = 0
        while (pointer.nextNode != null) {
            if (pointer.value === value) {return index}
            pointer = pointer.nextNode
            index++
        }
        return (pointer.value === value)? index : null
    } 

    const toString = () => {
        if (!head) return null
        let pointer = head
        let string = ''
        while (pointer.nextNode != null) {
            string += `${pointer.value} -> `
            pointer = pointer.nextNode
        }
        return string += pointer.value
    }

    return {append, size, getHead, getTail, prepend, nodeAt, popOff, containsValue, find, toString}
}