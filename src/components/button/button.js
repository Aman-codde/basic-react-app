
//props
export function MyButton({onClick,count}){
    return (
        <div>
            <button onClick={onClick}>Click Me!</button>
            <p>Button clicked {count} times</p>
        </div>
    )
}