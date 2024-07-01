import { create } from "zustand";

const useStore = create((set) => ({
    money: 20000,
    insertMoney: 0,
    tmpMoney: 0,

    selectedDrink: [],
    myDrinks: [],

    handleGet500: () =>
        set((state) => {
            if (state.money < 500) {
                alert("보유 금액을 확인하세요.");
                return {};
            } else {
                return {
                    money: state.money - 500,
                    insertMoney: state.insertMoney + 500,
                };
            }
        }),
    handleGet1000: () =>
        set((state) => {
            if (state.money < 1000) {
                alert("보유 금액을 확인하세요.");
                return {};
            } else {
                return {
                    money: state.money - 1000,
                    insertMoney: state.insertMoney + 1000,
                };
            }
        }),
    handleGet2000: () =>
        set((state) => {
            if (state.money < 2000) {
                alert("보유 금액을 확인하세요.");
                return {};
            } else {
                return {
                    money: state.money - 2000,
                    insertMoney: state.insertMoney + 2000,
                };
            }
        }),

    insert: () =>
        set((state) => {
            if (state.money < 1000) {
                alert("1,000원 이상부터 금액 투입이 가능합니다.");
                return {};
            } else {
                return {
                    insertMoney: state.insertMoney + 1000,
                    money: state.money - 1000,
                };
            }
        }),

    returnMoney: () =>
        set((state) => ({
            tmpMoney: state.tmpMoney + state.insertMoney,
            insertMoney: 0,
        })),

    getReturnMoney: () =>
        set((state) => ({
            money: state.money + state.tmpMoney,
            tmpMoney: 0,
        })),

    buyDrink: (drink) =>
        set((state) => {
            if (state.insertMoney >= drink.price) {
                return {
                    insertMoney: state.insertMoney - drink.price,
                    selectedDrink: [...state.selectedDrink, drink],
                };
            } else {
                alert("보유 금액이 부족합니다.");
                return {};
            }
        }),

    resetSelectedDrink: () => set({ selectedDrink: [] }),

    getMyDrinks: () =>
        set((state) => {
            if (state.selectedDrink.length === 0) {
                alert("구매한 음료가 없습니다.");
                return {};
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
