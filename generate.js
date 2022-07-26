const { v4: uuidv4 } = require('uuid');

const NUM_PACKAGES = 1000;

for (let i = 0; i < NUM_PACKAGES; i += 1) {
  console.log(uuidv4());
}
