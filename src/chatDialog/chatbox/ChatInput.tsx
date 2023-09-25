import SendIcon from '@mui/icons-material/Send';

export const ChatInput = ({ setText, sendText, text }: any) => {

    return (
        <>
            <div style={{ height: "4rem", backgroundColor: "#282828", display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: "8px", alignItems: "center", padding: "0rem 2rem" }}>
                <div style={{ width: "60%" }}>
                    <form onSubmit={sendText}>
                        <input
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                            type="text" style={{ height: "2rem", width: "100%", backgroundColor: "#282828", border: "none", outline: "none", fontSize: '1rem', color: "#e5e5e5" }} placeholder='Write a Message' />
                    </form>
                </div>
                <div style={{ cursor: 'pointer' }} onClick={sendText}>
                    <SendIcon />
                </div>
            </div>
        </>
    )
}
