import './style.css';
import { sleep } from "bittydash"

document.querySelector('#app').innerHTML = `
  <h1>console demo</h1>
  <div class="container">
    <button id="assert">assert</button>
    <button id="clear">clear</button>
    <button id="count">count</button>
    <button id="countReset">countReset</button>
    <button id="debug">debug</button>
    <button id="dir">dir</button>
    <button id="dirxml">dirxml</button>
    <button id="error">error</button>
    <button id="group">group & collapsed & end</button>
    <button id="info">info</button>
    <button id="log">log</button>
    <button id="table">table</button>
    <button id="time">time & timeLog && timeEnd</button>
    <button id="trace">trace</button>
    <button id="warn">warn</button>
  </div>
`

const assertBtn = document.querySelector("#assert");
assertBtn.addEventListener("click", () => {
  console.assert(0, "asser info");
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  console.clear();
});

const countBtn = document.querySelector("#count");
countBtn.addEventListener("click", () => {
  console.count();
  console.count("Yuki");
  console.count();
});

const countResetBtn = document.querySelector("#countReset");
countResetBtn.addEventListener("click", () => {
  console.count();
  console.count();
  console.countReset();
  console.count();
});

const debugBtn = document.querySelector("#debug");
debugBtn.addEventListener("click", () => {
  console.debug("Test Debug");
});

const dirBtn = document.querySelector("#dir");
dirBtn.addEventListener("click", () => {
  console.debug({
    name: "Yuki",
    age: 18,
    parents: [
      {
        name: "Tina"
      },
      {
        name: "Tom"
      }
    ]
  });
});

const dirxmlBtn = document.querySelector("#dirxml");
dirxmlBtn.addEventListener("click", () => {
  console.debug(document.body);
});

const errorBtn = document.querySelector("#error");
errorBtn.addEventListener("click", () => {
  console.error("Test Error");
});

const groupBtn = document.querySelector("#group");
groupBtn.addEventListener("click", () => {
  console.log("first level 1");
  console.group();
  console.log("second level 1");
  console.log("second level 2");
  console.groupCollapsed();
  console.log("Third level 1");
  console.groupEnd();
  console.log("Second level 3");
  console.groupEnd();
});

const infoBtn = document.querySelector("#info");
infoBtn.addEventListener("click", () => {
  console.info("Test info");
});

const logBtn = document.querySelector("#log");
logBtn.addEventListener("click", () => {
  console.log("Test log");
  console.log(document.body);
});

const tableBtn = document.querySelector("#table");
tableBtn.addEventListener("click", () => {
  console.table(["Yuki", "Yui"]);
  console.table({ name: "Yuki", age: 18 });

  const values = [
    { name: "Yuki", age: 18 },
    { name: "Yui", age: 20 }
  ];
  console.table(values);
  console.table(values, ["age"]);
});

const timeBtn = document.querySelector("#time");
timeBtn.addEventListener("click", async () => {
  console.time();
  await sleep(100);
  console.timeLog();
  await sleep(200);
  console.timeEnd();
});

const traceBtn = document.querySelector("#trace");
traceBtn.addEventListener("click", () => {
  console.trace("Test trace");
});

const warnBtn = document.querySelector("#warn");
warnBtn.addEventListener("click", () => {
  console.warn("Test warn");
});
