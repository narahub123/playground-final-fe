const regExp = {
  userId: {
    default: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,15}$/,
    countError:
      /^(?=.*[a-zA-Z])[a-zA-Z0-9]{0,3}$|^(?=.*[a-zA-Z])[a-zA-Z0-9]{16,}$/,
    typeError: /[^a-zA-Z0-9]/,
    numberError: /^(?!.*[a-zA-Z]).*$/,
  },
  password: {
    default:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/,
    countError: /^.{0,8}$|^.{20,}$/,
    typeError:
      /^(?!.*[a-z])|^(?!.*[A-Z])|^(?!.*\d)|^(?!.*[!@#$%^&*(),.?":{}|<>])|^.{0,7}$|^.{8,20}$/,
  },
};

export default regExp;
