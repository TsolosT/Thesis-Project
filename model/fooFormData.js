//foo DB temp
let applicationData = [
  {
    id: "form_foo",
    lastName: "ΤΣΟΛ",
    firstName: "ΝΙΚΟΣ",
    idCardNumber: "AM 4812",
    createdDate: "11/2/2020",
    createdFileDate: "11/2/2020 11:05 MM",
    city: "ΑΘΗΝΑ",
  },
  {
    id: "aff_foo",
    app: "aff",
    to: "ΤΟΠΙΚΗ ΑΣΤΥΝΟΜΙΑ",
    fname: "ΝΙΚΟΣ",
    lname: "ΠΑΝΑΓΙΩΤΟΥ",
    fatherFname: "ΚΩΣΤΑΝΤΙΝΟΣ ΠΑΝΑΓΙΩΤΟΥ",
    motherFname: "ΑΡΙΑΝΔΗ ΠΑΠΑΚΩΣΤΑ",
    bdate: "09/12/1989",
    blocation: "ΒΟΛΟΣ",
    passportID: "AM 4812",
    phone: "",
    city: "ΑΘΗΝΑ",
    address: "ΜΑΓΝΗΣΙΑΣ 1 32129",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fugiat autem unde accusamus aperiam! Assumenda, fugiat, maxime cupiditate exercitationem laborum sit beatae quidem asperiores, quos iure vel accusantium consequuntur fugit?",
    createdDate: "11/2/2020",
    createdFileDate: "11/2/2020 11:05 MM",
  },
  {
    id: "auth_foo",
    app: "auth",
    createdDate: "11/2/2020",
    createdFileDate: "11/2/2020 11:05 MM",
    //  gentle:req.body.gentle,
    fullName: "ΝΙΚΟΣ ΠΑΝΑΓΙΩΤΟΥ",
    fatherFname: "ΚΩΣΤΑΝΤΙΝΟΣ ΠΑΝΑΓΙΩΤΟΥ",
    motherFname: "ΑΡΙΑΝΔΗ ΠΑΠΑΚΩΣΤΑ",
    bdate: "09/12/1989",
    blocation: "ΒΟΛΟΣ",
    passportID: "AM 4812",
    passportIDCreatedAt: "ΑΣΤΥΝΟΜΙΑ ΒΟΛΟΥ",
    createdBy: "ΑΘΑΝΑΣΙΟΣ ΔΙΑΚΟΣ",
    city: "ΑΘΗΝΑ",
    address: "ΜΑΓΝΗΣΙΑΣ 1 32129",
    // to auth
    // gentle:req.body.gentle, select fix
    AuthfullName: "ΑΡΙΣΤΟΤΕΛΗΣ ΠΑΚΚΑΣ",
    Authfathername: "ΓΙΩΡΓΟΣ ΠΑΚΚΑ",
    Authmothername: "ΝΙΚΟΛΕΤΑ ΚΑΠΠΑ",
    Autbdate: " 06/05/88",
    Authblocation: "ΑΛΟΝΗΣΣΟΣ",
    AuthpassportID: "ΒΣ 12341",
    AuthpassportIDCreatedAt: "ΑΣΤΥΝΟΜΙΑ ΒΟΛΟΥ",
    AuthcreatedBy: "ΑΡΙΑΝΔΗ ΠΑΠΑΚΩΣΤΑ",
    Authcity: "ΘΕΣΣΑΛΟΝΙΚΗ",
    Authaddress: "ΘΕΡΜΗΣ 11 23231",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fugiat autem unde accusamus aperiam! Assumenda, fugiat, maxime cupiditate exercitationem laborum sit beatae quidem asperiores, quos iure vel accusantium consequuntur fugit?",
  },
];

module.exports = { applicationData }; 