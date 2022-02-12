function func(callback) {
  process.nextTick(callback, "callback!!");
}

try {
  func((param) => {
    a.a = 0;
  });
} catch (e) {
  console.log("exception!!");
}

process.on("uncaughtException", (err) => {
  console.log("unexception!");
});
