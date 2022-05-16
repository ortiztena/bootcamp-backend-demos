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

const fromCSV = (csv) => {
  const lines = csv.split("\n");
  const myArr = lines.map((x) => x.split(","));
  const [header, ...users] = myArr;
  return users.map((x) => toObject(...x));
};

const toObject = (id, name, surname, gender, email, picture) => ({
  id,
  name,
  surname,
  gender,
  email,
  picture,
});

const fromCSVextra = (csv, attrb) => {
  const [headers, ...users] = csv.split("\n").map((x) => x.split(",", attrb));
  return users.map((user) =>
    Object.fromEntries(user.map((value, i) => [headers[i], value]))
  );
};

console.log(fromCSV(data));
console.log(fromCSVextra(data, 3));
