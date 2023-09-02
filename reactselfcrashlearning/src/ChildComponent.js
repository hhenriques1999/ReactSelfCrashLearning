function ChildComponent({updateParent}) {
    return (
        <button onClick={() => updateParent("Data updated by child")}>
            Update Parent!
        </button>
    );
}

export default ChildComponent;