function Button({ text, onClick, color = 'blue' }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color,
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
            }}
        >
            {text}
        </button>
    );
}

export default Button;
