const intervalId = setInterval(
  () => {
    console.log("sending analytics data...");
  },
  2000,
  []
); //after evry 2s function will be called

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
