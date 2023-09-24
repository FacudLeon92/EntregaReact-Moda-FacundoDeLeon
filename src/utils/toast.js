import { toast } from 'react-toastify';
// Mensajes de éxito y error para los toasts
export const Toast = {
  success: {
    removed: 'eliminado del carrito con éxito!',
    removedOrder: 'El pedido se eliminó correctamente!',
    added: 'Añadida al carrito',
    thanks: '¡¡Gracias por elegirnos!!',
    welcome: 'bienvenido!',
    created: 'Tu cuenta fue creada',
    Empty: 'no se encontro ningun resultado con esa consulta',
    logout: '¡Te extrañaremos!',
  },
  error: {
    400: 'Bad Request',
    404: '404 Not Found',
    500: 'Internal error 500',
    401: 'Unauthorized',
    403: 'Forbiden',
  },
};
// Manejo de errores para mostrar los mensajes de error correspondientes
export const handleError = (error) => {
  if (error.response && error.response.status) {
    const statusCode = error.response.status;
    const errorMessage = Toast.error[statusCode];
    if (errorMessage) {
      toast.error(errorMessage);
    } else {
      toast.error(error.message);
    }
  } else {
    toast.error(error.message);
  }
};
// Manejo de éxito para mostrar los mensajes de éxito correspondientes
export const handleSuccess = (message) => {
  const successMessages = Toast.success;
  const successKeys = Object.keys(successMessages);
  for (let i = 0; i < successKeys.length; i++) {
    const key = successKeys[i];
    if (message === key) {
      toast.success(successMessages[key]);
      break;
    }
  }
};
