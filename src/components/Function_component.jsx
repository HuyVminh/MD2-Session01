
export default function Function_component() {
    // đây là nơi code JS
    const sum = (a, b) => {
        return a + b;
    }
    return (
        <div>Tổng của 3 + 4 = {sum(3,4)}</div>
    )
}