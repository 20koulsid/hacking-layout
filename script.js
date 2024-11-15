const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement('div');
  div.innerHTML = item;
  document.body.append(div);
};

const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = Math.random(1 + Math.random * 6);
    // here we use Math.random(a + ((b-a)*Math.random))
    // here a = 1 b = 7 from 1 to 7 sec

    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

async function main() {
  let t  = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length -1]
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
    } else {
      last.innerHTML =  last.innerHTML + "."
    }
    
  }, 100);


  let text = [
    'Innitializing Hacking now reading your data',
    'Reading your Files',
    'Password files detected',
    'Cleaning up',
    'Sending all password and personal files to server',
    'Reading all your files'
  ];

  for (const item of text) {
    await addItem(item);
  }
  await randomDelay()
  clearInterval(t)
}
main();
