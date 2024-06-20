import coin from "../img/coin.png";
import "../css/money.css";

const MoneyManage = ({myMoney, setMyMoney}) => {

    const onClickInsert = () => {
        setMyMoney(Money => Money + 2000);
    };

    return (
        <div>
            <div className="money-input">
                <button onClick={onClickInsert}>
                    <img src={coin} alt="동전" />
                </button>
            </div>
            <div className="mywallet">
            현재 잔액은 {myMoney}입니다.
        </div>
        </div>
    );
}

export default MoneyManage;
