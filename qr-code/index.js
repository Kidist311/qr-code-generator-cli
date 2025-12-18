import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'link',
      message: 'input your adress?',
    },
  ])
  .then((answers) => {
    var Url = answers.link;
    const qr_svg = qr.image(Url);  //generate the qr image in Png format by dafualt
    qr_svg.pipe(fs.createWriteStream('qr-code.png'));

    fs.writeFile("URL.txt", Url , (err) => {
        if (err) throw err;
        console.log('The file has been saved');
      });

  })
  .catch((error) => {
    console.error(error);
  });

// end of code


// const qr_svg = qr.image(Url, { type: 'svg' }); generate the qr-image in svg format