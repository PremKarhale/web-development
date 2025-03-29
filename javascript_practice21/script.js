const addItem = async (item) => {
  await randomdelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div)


}

const randomdelay = () => {
  return new Promise((resolve, reject) => {
      let timeout = 1 + 6 * Math.random()
      setTimeout(() => {
          resolve();

      }, timeout * 1000);
  })
}


async function main() {

  let t =setInterval(() => {
    let last = document.body.lastElementChild;

      if (last.innerHTML.endsWith("...")) {
          last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
      } else {
          last.innerHTML += ".";
      }
  }, 300); // Blinks every 500ms


  let text = [
      " Initializing Hacking",
      " Reading your Files",
      "Password files Detected",
      "  Sending all passwords and personal files to server",
      " Cleaning up"
  ]

  for (const item of text) {
      await addItem(item);
  }
  await randomdelay();
  clearInterval(t);
  

}
main();


