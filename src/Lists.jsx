function Listing (props) {

    const Items = props.Items;
    const ListItems = Items.map((items) => <li> {items}</li>);

    return (
        <>
            <h1>Good morning </h1>
            <ul>{ListItems}</ul>
        </>
    );
}

export default Listing;