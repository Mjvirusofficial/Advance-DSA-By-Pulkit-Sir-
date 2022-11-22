/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    let f = head; let s = head;
    
    while(f && f.next){
     s = s.next;
     f = f.next.next;
    }
    
    //Find mid:-
    let head2 = s.next;
    s.next = null;
    
    function reverse(head){
        let curr = head;
        let pre = null;
        
        while(curr){
            let next = curr.next;
            curr.next = pre;
            pre  = curr;
            curr = next;
        }
        
        return pre;
    }
    
    //Reverse head2;
    head2 = reverse(head2);
    
    //Merge head1 nd head2
    
    let curr1 = head, curr2 = head2;
    while(curr1 && curr2){
        let next1 = curr1.next;
        let next2 = curr2.next;
        
        curr1.next = curr2;
        curr2.next = next1;
        
        curr1 = next1 
        curr2 = next2
    }
    
    return head;
    
};