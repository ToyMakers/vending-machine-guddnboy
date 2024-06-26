import { create } from "zustand";

const useStore = create((set) => ({
    money: 0,
    insertMoney: 0,

    selectedDrink: [],
    myDrinks: [],

    handleGet500: () => set((state) => ({ money: state.money + 500 })),
    handleGet1000: () => set((state) => ({ money: state.money + 1000 })),
    handleGet2000: () => set((state) => ({ money: state.money + 2000 })),

    insert: (money) => {
        if (money < 1000) {
            alert("1,000원 이상부터 금액 투입이 가능합니다.");
        } else {
            set((state) => ({
                insertMoney: state.insertMoney + 1000,
                money: state.money - 1000,
            }));
        }
    },

    returnMoney: () =>
        set((state) => ({
            money: state.money + state.insertMoney,
            insertMoney: 0,
        })),

    buyDrink: (drink) =>
        set((state) => {
            if (state.insertMoney >= drink.price) {
                alert("음료가 구매되었습니다.");
                return {
                    insertMoney: state.insertMoney - drink.price,
                    selectedDrink: [...state.selectedDrink, drink],
                };
            } else {
                alert("보유 금액이 부족합니다.");
                return {}; // 상태를 변경하지 않음
            }
        }),

    resetSelectedDrink: () => set({ selectedDrink: [] }),

    getMyDrinks: () =>
        set((state) => {
            if (state.selectedDrink.length === 0) {
                alert("구매한 음료가 없습니다.");
                return {}; // 상태를 변경하지 않음
            } else {
                return {
                    myDrinks: [...state.myDrinks, ...state.selectedDrink],
                    selectedDrink: [],
                };
            }
        }),

    takeMyDrinks: () => set({ selectedDrink: [], myDrinks: [] }),
}));

export default useStore;
