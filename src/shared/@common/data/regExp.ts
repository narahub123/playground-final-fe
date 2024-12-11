const regExp = {
  userId: {
    default: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,15}$/,
    countError:
      /^(?=.*[a-zA-Z])[a-zA-Z0-9]{0,3}$|^(?=.*[a-zA-Z])[a-zA-Z0-9]{16,}$/,
    typeError: /[^a-zA-Z0-9]/,
    numberError: /^(?!.*[a-zA-Z]).*$/,
  },
};

export default regExp;
