export function setName(userName) {
  localStorage.setItem('userName', userName);
}

export function getName() {
  return localStorage.getItem('userName');
}

export function setScoreBoard(scoreBoard) {
  localStorage.setItem('scoreBoard', JSON.stringify(scoreBoard));
}

export function getScoreBoard() {
  return JSON.parse(localStorage.getItem('scoreBoard')) ?? [];
}
