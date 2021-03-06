// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);
const name = 'Nala';
const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
	let days = '';
  if (event === 'Marathon') {
  } else if (event === 'Triathlon') {
  } else if (event === 'Pentathlon') {
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = (event, name) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (days, name) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event, name);
logTime(days, name);
