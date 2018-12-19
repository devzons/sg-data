const nemo = ['nemo'];
const everyone = ['aemo', 'bemo', 'cemo', 'demo', 'eemo', 'femo', 'gemo', 'hemo', 'iemo', 'nemo', 'kemo', 'lemo', 'memo'];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();
  for(let i = 0; i < array.length; i++){
    if (array[i] === 'nemo') {
      console.log('Found Nemo');
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');
}

findNemo(large);