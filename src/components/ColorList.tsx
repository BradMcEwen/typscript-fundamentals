
const ColorList = () => {
    const colors: string[] = ["Red", "Green", "Blue"];

    return (
        <ul>
            {colors.map((color, index) => (
                <li key={index}>{color}</li>
            ))}
        </ul>
    )
}

export default ColorList;