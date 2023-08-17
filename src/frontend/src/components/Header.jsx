import logo from '/bcGovLogo.svg'

function Header () {
    return (
        <>
        <div style={{
            backgroundColor:"#234075", 
            position: "absolute", 
            right: "0px", 
            top: "0px", 
            left: "0px", 
            borderBottom: "solid #e3a82b", 
            minHeight: "60px"
        }}>
            <div style={{
                maxWidth: "200px", 
                marginLeft: '10%'
            }}>
                <img src={logo} />
                </div>
        </div>
        </>
    )

}
export default Header
