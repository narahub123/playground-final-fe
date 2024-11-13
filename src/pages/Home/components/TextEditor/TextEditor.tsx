import styles from "./TextEditor.module.css";

const TextEditor = () => {
  return (
    <div className={styles.editor} contentEditable data-placeholder={"안녕"}>
      TextEditor
    </div>
  );
};

export default TextEditor;
