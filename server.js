const fs = require('fs');
const path = require('path');

const dir = "src/environments";
const file = "environment.ts";
const prodFile = "environment.prod.ts";

const content = `${process.env.FIREBASE_DETAILS}`;

fs.access(dir, fs.constants.F_OK, (err) => {
  if (err) {
    console.log("src doesn't exist, creating now", process.cwd());
    fs.mkdirSync(dir, {recursive: true}, (err) => {
      if (err) throw err;
    });
  }
  try {
    fs.writeFileSync(dir + "/" + file, content);
    fs.writeFileSync(dir + "/" + prodFile, content);
    console.log("created successfully in", process.cwd());
    if (fs.existsSync(dir + "/" + file)) {
      console.log("file is created", path.resolve(dir + "/" + file));
      const str = fs.readFileSync(dir + "/" + file).toString();
      console.log(str);
    }
    if (fs.existsSync(dir + "/" + prodFile)) {
      console.log("file is created", path.resolve(dir + "/" + prodFile));
      const str = fs.readFileSync(dir + "/" + prodFile).toString();
      console.log(str);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
