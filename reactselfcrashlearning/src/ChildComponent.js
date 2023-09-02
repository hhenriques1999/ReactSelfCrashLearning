function ChildComponent({itemList}) {
    return (
        <ul>
            {itemList.map((item) => <li key={item}>{item}</li>)}
        </ul>
    );
}

export default ChildComponent;