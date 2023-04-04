import { create } from 'zustand';

interface ChatStoreState {}

const useChatStore = create<ChatStoreState>()((set, get) => ({}));

export default useChatStore;
