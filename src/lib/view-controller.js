import { signUpWithEmailAndPassword, signInWithPassword, loginWithGoogle, loginWithFacebook, 
  addPost, deletePost } from './controller.js';

export const signUpWithEmailAndPasswordOnClick = (evt) => {
  evt.preventDefault();
  const email = document.getElementById('reg-correo').value;
  const password = document.getElementById('reg-pass').value;
  signUpWithEmailAndPassword(email, password, (error) => {
    if (error) {
      alert(error);
    }
  });
};

export const signInWithPasswordOnClick = (evt) => {
  evt.preventDefault();
  const email = document.getElementById('correo').value;
  const password = document.getElementById('password').value;
  signInWithPassword(email, password, (error) => {
    if (error) {
      alert(error);
    }
  });
};

export const loginWithGoogleOnClick = (evt) => {
  evt.preventDefault();
  loginWithGoogle();
};

export const loginWithFacebookOnClick = (evt) => {
  evt.preventDefault();
  loginWithFacebook();
};

export const addPostOnSubmit = (evt) => {
  evt.preventDefault();
  const inputText = document.getElementById('post');
  const selecPrivacy = document.getElementById('privacidad');
  if (inputText.value === '') {
    alert('Ingresa un contenido');
  } else if (selecPrivacy.value === 'amigos' && inputText !== '') {
    console.log('Soy una publicación de amigos');
    addPost(inputText.value)
      .then(() => {
        inputText.value = '';
        data.message = 'Publicación agregada';
      }).cath(() => {
        inputText.value = '';
        data.message = 'Lo sentimos, no se pudo agregar tu publicación';
      });
  } else if (selecPrivacy.value === 'publico' && inputText !== '') {
    console.log('Soy una publicación publica');
    addPost(inputText.value)
      .then(() => {
        inputText.value = '';
        data.message = 'Publicación agregada';
      }).cath(() => {
        inputText.value = '';
        data.message = 'Lo sentimos, no se pudo agregar tu publicación';
      });
  } else {
    console.log('no se ejecuta');
  }
  // const spanPost = document.getElementById('texto-publicacion');
  const data = {
    message: '',
    timeout: 2000,
    actionText: 'Undo'
  };
};

export const deletePostOnClick = (objPost) => deletePost(objPost.id);
