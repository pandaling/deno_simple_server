interface User {
  userId: number;
  name: string;
  email: string;
}

const users: Array<User> = [
  { userId: 1, name: 'Almera', email: 'almera@mail.com' },
  { userId: 2, name: 'Benz', email: 'benz@mail.com' },
  { userId: 3, name: 'Camry', email: 'camry@mail.com' },
];

const getUsers = ({ response }: { response: any}) => {
  response.body = users;
};

const getUser = ({ response, params }: { response: any, params: { name: string } }) => {
  const user = users.find(user => user.name == 'Benz');
  if (user) {
    response.status = 200;
    response.body = user;
  }
  else {
    response.status = 401;
    response.body = { message: 'User Not Found!' };
  }
};

export { getUsers, getUser }