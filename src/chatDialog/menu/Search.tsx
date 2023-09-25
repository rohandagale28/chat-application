import SearchIcon from '@mui/icons-material/Search';

export const Search = ({ setText }: any) => {

    return (
        <>
            <div style={{ height: "auto", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: "8px", backgroundColor: "#d9d9d9" }}>
                <div>
                    <input
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Search People and Friends'
                        type='text' style={{ outline: "none", border: "none", height: "2.2rem", width: "100%", borderRadius: "8px", backgroundColor: "#d9d9d9", marginLeft: "8px", paddingLeft: "0.5rem" }} />
                </div>
                <div style={{ paddingRight: "0.8rem", paddingTop: "4px" }}>
                    <SearchIcon />
                </div>
            </div>
        </>
    )
}
