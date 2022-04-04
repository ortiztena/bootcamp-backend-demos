const data = `id,name,surname,gender,email,picture
15519533,Raul,Flores,male,raul.flores@example.com,https://randomuser.me/api/portraits/men/42.jpg
82739790,Alvaro,Alvarez,male,alvaro.alvarez@example.com,https://randomuser.me/api/portraits/men/48.jpg
37206344,Adrian,Pastor,male,adrian.pastor@example.com,https://randomuser.me/api/portraits/men/86.jpg
58054375,Fatima,Guerrero,female,fatima.guerrero@example.com,https://randomuser.me/api/portraits/women/74.jpg
35133706,Raul,Ruiz,male,raul.ruiz@example.com,https://randomuser.me/api/portraits/men/78.jpg
79300902,Nerea,Santos,female,nerea.santos@example.com,https://randomuser.me/api/portraits/women/61.jpg
89802965,Andres,Sanchez,male,andres.sanchez@example.com,https://randomuser.me/api/portraits/men/34.jpg
62431141,Lorenzo,Gomez,male,lorenzo.gomez@example.com,https://randomuser.me/api/portraits/men/81.jpg
05298880,Marco,Campos,male,marco.campos@example.com,https://randomuser.me/api/portraits/men/67.jpg
61539018,Marco,Calvo,male,marco.calvo@example.com,https://randomuser.me/api/portraits/men/86.jpg`;

// const fromCSV = (csv, attrb) => {
//   const lines = csv.split("\n");
//   const myArr = lines.map((x) => x.split(","));
//   const [header, ...users] = myArr;
//   if (attrb) {
//     const att = header.slice(0, attrb);
//     // return users.map((x, att) => toObject(...x[att]));
//   } else {
//     return users.map((x) => toObject(...x));
//   }
// };

const toObject = (id, name, surname, gender, email, picture) => ({
  id,
  name,
  surname,
  gender,
  email,
  picture,
});

const toObject2 = (user) => ({
  id: user.id,
  name: user.name,
  surname: user.surname,
  gender: user.gender,
  email: user.email,
  picture: user.picture,
});

const fields = (arr, number) => {
  const att = arr.slice(0, number);
  return att;
};

const replyObject = (obj, campos) => {
  let newObj = {};
  let arr = [];
  for (let i of campos) {
    obj.map((x) => (newObj[i] = x[i]));
    arr.push(newObj);
  }
  return arr;
};

const excludeCountry = ({ ...others }) => others;
const lines = data.split("\n");
const myArr = lines.map((x) => x.split(","));
const [header, ...users] = myArr;
const final = users.map((x) => toObject(...x));
// const mapeo = arr.map((x) => toObject2(x));

// hacer split en headers
// hacer una funcion cdonde pasarle el array resultante, y los usuarios
// mapear los resultados y que solo saque lo que contiene el array de headers.
