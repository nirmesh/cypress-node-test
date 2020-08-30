const LinkedList = require('./LinkedList')
describe('#insertAtHead',()=>{
    test('it add to beginning of list',()=>{
        const ll =  new LinkedList()
        ll.insertAtHead(10)
        const oldhead = ll.head
        ll.insertAtHead(20)
        expect(ll.head.value).toBe(20);
        expect(ll.head.next).toBe(oldhead);
        expect(ll.length).toBe(2);
    })
})

describe ('#getByIndex',()=>{

    describe('with index less than zero',()=>{
        test("it returns null",()=>{
            const ll = LinkedList.fromValues(10,20)
            expect(ll.getByIndex(-1)).toBeNull()
        })
    })

    describe('with index greater than length of array',()=>{
        test("it returns null",()=>{
            const ll = LinkedList.fromValues(10,20)
            expect(ll.getByIndex(5)).toBeNull()
        })
    })

    describe('with index 0',()=>{
        test('it return the head',()=>{
            const ll = LinkedList.fromValues(10,20)
            expect(ll.getByIndex(0).value).toBe(10);
        })
    })


    describe('with index in midddle',()=>{
        test('it return elemet at that index',()=>{
            const ll = LinkedList.fromValues(10,20,30,40)
            expect(ll.getByIndex(2).value).toBe(30);
        })
    })
})