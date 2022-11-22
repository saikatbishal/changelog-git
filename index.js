const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';

const dates = [[4,1],[5,1],[6,1],[4,2],[5,3],[6,3],[4,3],[5,5],[6,4],[4,5],[6,5]]
function makeCommit(x, y) {
  const DATE = moment().subtract(1, 'y').subtract(4, 'd')
  .add(x, 'w').add(y, 'd').format();
  const data = {
    date : DATE
  }
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE });
  });
}
dates.forEach( date => {
  makeCommit(date[0],date[1])
})
