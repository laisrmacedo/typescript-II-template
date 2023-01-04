/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

/*1.1*/
// type TPerson = {
//   id: string,
//   name: string,
//   email: string,
//   password: string,
//   role: "admin" | "normal"
// }

// const UserOne: TPerson = {
//   id: "01",
//   name: "Lais",
//   email: "lais@gmail.com",
//   password: "12345",
//   role: "admin"
// }
/*1.2*/

type TAdminAccount = {
  account: string,
  permission: true
}

type TNormalAccount = {
  account: string,
  permission: false
}



/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 

enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
}

type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: Role 
}

const userOne: TPerson = {
  id: "01",
  name: "Lais",
  email: "lais@gmail.com",
  password: "12345",
  role: Role.ADMIN
}

//2.2 Tipo Intersection unindo: pessoa(Person) + permissão (Role);
type AdminUser = TPerson & TAdminAccount 

const userAdmin: AdminUser = {
  id: "03",
  name: "Murilo",
  email: "murilo@gmail.com",
  password: "351584",
  role: Role.ADMIN,
  account: "admin1",
  permission: true
}

type NormalUser = TPerson & TNormalAccount

const userNormal: NormalUser = {
  id: "04",
  name: "Joao",
  email: "joao@gmail.com",
  password: "849849",
  role: Role.NORMAL,
  account: "normal1",
  permission: false
}

//2.3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

const arrayUsers: (AdminUser | NormalUser)[] = [
  // userOne, --> não aceita pq tem apenas o tipo TPerson 
  userAdmin,
  userNormal
]

//2.4 Crie duas pessoas, uma com permissão normal e a outra admin;
//2.5. Guarde essas pessoas no array de usuários.

const arrayAdmin: AdminUser[] = [
  // userOne, --> não aceita pq tem apenas o tipo TPerson 
  userAdmin,
  // userNormal --> não aceita pq a permissao é false
]

const arrayNormal: NormalUser[] = [
  // userOne, --> não aceita pq tem apenas o tipo TPerson 
  // userAdmin, --> não aceita pq a permissao é true
  userNormal 
]
