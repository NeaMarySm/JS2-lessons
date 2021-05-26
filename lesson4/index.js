
let text = `After the end of the visit, Carolyn thought that it 
was important to tell Heidi about her bad manners. 
She said to herself, 'If I don't tell her, she will never know.' 
So she sent Heidi an e-mail. 'It is high time someone explained to you about good manners,' 
she started, 'because it is obvious that you don't have any'.`

const regexp = /\B'|'\B/gm;

console.log(text.replace(regexp, '\"'));
