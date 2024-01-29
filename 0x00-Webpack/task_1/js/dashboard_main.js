// importing jquery and lodash
import $ from 'jquery';
import _ from 'lodash';


$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('Copyright - Holberton School');


const updateCounter = _.debounce(() => {
  let count = parseInt($('#count').text().replace(' clicks on the button', '')) || 0;
  count++;
  $('#count').text(`${count} clicks on the button`);
}, 500);

$('button').on('click', updateCounter);
