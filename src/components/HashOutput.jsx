import 'bulma/css/bulma.min.css';

function HashOutput(props) {
    return (
        <div class="box" style={{backgroundColor: "whitesmoke"}}>
            {props.hash}
        </div>
    )
}

export default HashOutput