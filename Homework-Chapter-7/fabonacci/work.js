this.addEventListener('message',function(e){
    let data = Number(e.data);
    this.postMessage(fibonacci2(data));
},false);
// function fibonacci1(n) {
//     if (n<=2) {
//         return 1;
//     }
//     let i=2;
//     let prev=1
//     let cur=1;
//     while (i<=n) {
//         const temp=cur;
//         cur=cur+prev;
//         prev=temp;
//         i++;
//     }
//     return cur;
// }
function fibonacci2(n) {
    if (n<=2) {
        return 1;
    }
    // window.requestAnimationFrame(fibonacci2);
    return fibonacci2(n-1)+fibonacci2(n-2);
}