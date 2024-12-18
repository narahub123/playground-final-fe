import { RootState } from "@app/store";

const getCoverModal = (state: RootState) => state.modal.coverModal;

export { getCoverModal };
