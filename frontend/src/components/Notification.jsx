function Notification({ message, type }) {
    return (
        <div style={{ padding: '10px', backgroundColor: type === 'success' ? 'green' : 'red', color: 'white', textAlign: 'center' }}>
            {message}
        </div>
    );
}

export default Notification;
