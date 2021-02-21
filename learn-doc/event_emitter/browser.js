// 不会中断程序的运行
const myEvent = new Event("start", { bubbles: true });

const fakeDom = document.createElement("div");

fakeDom.addEventListener(
  "start",
  function (e) {
    console.log(e);
    throw 888;
  },
  false
);
window.onerror = (e) => {
  console.log(e);
};

fakeDom.dispatchEvent(myEvent);
console.log("345 :>> ", 345);
