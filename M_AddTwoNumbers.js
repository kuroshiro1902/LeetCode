/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 || !l2) return null;
  let ans = new ListNode(0);
  let listNodeArr = [];
  while (l1 || l2) {
    if (!l1) l1 = new ListNode(0);
    if (!l2) l2 = new ListNode(0);
    const val = l1.val + l2.val + ans.val;
    const onesValue = val % 10;
    const tensValue = (val - onesValue) / 10;
    ans.val = onesValue;
    ans.next = new ListNode(tensValue);
    listNodeArr.push(ans);
    ans = ans.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  let i = listNodeArr.length - 1;
  if (listNodeArr[i].next?.val === 0) listNodeArr[i].next = null;
  while (i > 0) {
    const j = i - 1;
    listNodeArr[j].next = listNodeArr[i];
    i--;
  }
  return listNodeArr[0];
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

export default addTwoNumbers(l1, l2);
