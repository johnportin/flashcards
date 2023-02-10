

export default function History({ index, data }) {


    return (
        <div>
            <p> {index + 1} / {data.length} </p>
        </div>
    );
}