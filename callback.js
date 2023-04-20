// Revisando Callback / Promisses  / Assync - Amait

//exemplo sem callback:
/*const loginUser = (email, password) => {
  setTimeout(() => {
    console.log('user logged!');
    return { email };
  }, 1500);

  console.log('after setTimeout');
};

const user = loginUser('tiago@gmail.com', '123456');

console.log({ user });
----------------------------------------------------------------
Retorno no colsole:
after setTimeout
{ user: undefined }
user logged!
*/

//função callback - função que sera executado depois de uma determinada ação / ou determinado tempo
const loginUser = (email, password, callback) => {
  setTimeout(() => {
    console.log('user logged!');
    callback({ email });
  }, 1500);

  console.log('after setTimeout');
};

const user = loginUser('tiago@gmail.com', '123456', (user) => {
  console.log({ user });
});

/*
----------------------------------------------------------------
Retorno no colsole:
after setTimeout
user logged!
{ user: { email: 'tiago@gmail.com' } }
*/
