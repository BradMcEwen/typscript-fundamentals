

let greeting: string = "hello, typescript!";

let numList: number[] = [5, 10, 15];

function calculateSum(a: number, b: number): number {
    return a + b;
}

const Basics = () => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ul>
                {numList.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <p>Sum of 5 and 10 is: {calculateSum(5, 10)}</p>
        </div>
    )
}


export default Basics;