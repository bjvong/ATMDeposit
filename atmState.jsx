const ATMDeposit = ({onChange, isDeposit}) => {
    const choice = ["Deposit", "Cash Back"];
    return(
        <label className="label huge">
            <h3> {choice[Number(!isDeposit)]}</h3>
            <input type="number" width="200" onChange={onChange}/>
            <input type="submit" width="200" value="submit"/>
        </label>
    );
};

const Account = () => {
    let deposit = 0;
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    let status = `Account Balance $ ${totalState}`;
    console.log('account rendered');
    const handleChange = event => {
        console.log(`handleChange ${event.target.value}`);
        deposit = Number(event.target.value);
    };
    const handleSubmit = () => {      
        let newTotal = isDeposit ? totalState + deposit: totalState - deposit;
        if(newTotal > -1){
        setTotalState(newTotal);
        } else alert (`Insufficient Funds`);
        event.preventDefault();
    };
    return(
        <form onSubmit={handleSubmit}>
            <h2 id = "total">{status}</h2>
            <button onClick={()=>setIsDeposit(true)}>Deposit</button>
            <button onClick={()=>setIsDeposit(false)}>CashBack</button>
            <ATMDeposit onChange={handleChange} isDeposit={isDeposit}> Deposit</ATMDeposit>
        </form>
    );
};

ReactDOM.render(<Account  />, document.getElementById("root"));
