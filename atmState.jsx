const ATMDeposit = ({onChange}) => {
    return(
        <label className="label huge">
            Deposit:
            <input type="number" onChange={onChange}/>
            <input type="submit" value="submit"/>
        </label>
    );
};

const Account = () => {
    let transactionState = 0; // state of this transaction
    const [totalState, setTotalState] = React.useState(0);
    let status = `Account Balance $ ${totalState}`;
    console.log('account rendered');
    const handleChange = event => {
        console.log(`handleChange ${event.target.value}`);
        transactionState = Number(event.target.value);
    };
    const handleSubmit = () => {
        setTotalState(totalState + transactionState);
        event.preventDefault();
        // write into the DOM
    };
    return(
        <form onSubmit={handleSubmit}>
            <h2 id = "total">{status}</h2>
            <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
        </form>
    );
};

ReactDOM.render(<Account  />, document.getElementById("root"));
